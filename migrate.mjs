// migrate.mjs

import { Client as PGClient } from "pg";
import { generateClient } from "aws-amplify/data";
import fs from "fs";

// Load amplify_outputs.json safely
const outputs = JSON.parse(fs.readFileSync("./amplify_outputs.json", "utf8"));


// Setup Amplify Data client
const amplify = generateClient({
  config: outputs,
});

// ==== EDIT THESE FOR YOUR POSTGRES SETUP ====
const pgConfig = {
  host: "localhost",
  user: "sbs",
  password: "sandisegota1995",
  port: 5432,
  database: "dai_test",
};
// ============================================

// Helper to safely read DB columns (case-insensitive)
function col(row, name) {
  if (row[name] !== undefined) return row[name];
  if (row[name.toLowerCase()] !== undefined) return row[name.toLowerCase()];
  return undefined;
}

async function fetchAll(pg, table) {
  const res = await pg.query(`SELECT * FROM ${table}`);
  return res.rows;
}

async function migrate(pg, tableName, modelName, mapFn) {
  const rows = await fetchAll(pg, tableName);
  for (const r of rows) {
    const item = mapFn(r);
    try {
      await amplify.models[modelName].create(item);
      console.log(`✓ ${modelName}:`, item);
    } catch (err) {
      console.error(`✗ ERROR (${modelName}):`, err.errors ?? err, "\nRow:", item);
    }
  }
}

async function run() {
  const pg = new PGClient(pgConfig);
  await pg.connect();
  console.log("Connected to PostgreSQL");

  // MIGRATE TABLES IN RELATION ORDER

  await migrate(pg, "institution", "Institution", r => ({
    institutionID: col(r, "InstitutionID"),
    institutionName: col(r, "InstitutionName"),
    institutionTaxNumber: col(r, "InstitutionTaxNumber"),
    institutionAddress: col(r, "InstitutionAddress"),
  }));

  await migrate(pg, '"user"', "User", r => ({
    userID: col(r, "UserID"),
    username: col(r, "Username"),
    passwordHash: col(r, "PasswordHash"),
    mail: col(r, "Mail"),
    role: col(r, "Role"),
  }));

  await migrate(pg, "patient", "Patient", r => ({
    patientID: col(r, "PatientID"),
    firstName: col(r, "FirstName"),
    lastName: col(r, "LastName"),
  }));

  await migrate(pg, "user_institution", "UserInstitution", r => ({
    userID: col(r, "UserID"),
    institutionID: col(r, "InstitutionID"),
  }));

  await migrate(pg, "user_patient", "UserPatient", r => ({
    userID: col(r, "UserID"),
    patientID: col(r, "PatientID"),
  }));

  await migrate(pg, "signal", "Signal", r => ({
    experimentID: col(r, "ExperimentID"),
    userID: col(r, "UserID"),
    patientID: col(r, "PatientID"),
    uploadTime: col(r, "UploadTime"),
    status: col(r, "Status"),
    filename: col(r, "Filename"),
    path: col(r, "Path"),
  }));

  await migrate(pg, "features", "Features", r => ({
    resultID: col(r, "ResultID"),
    experimentID: col(r, "ExperimentID"),
    peakCounts: col(r, "PeakCounts"),
    amplitude: col(r, "Amplitude"),
    auc: col(r, "AUC"),
    fwhm: col(r, "FWHM"),
    frequency: col(r, "Frequency"),
    snr: col(r, "SNR"),
    skewness: col(r, "Skewness"),
    kurtosis: col(r, "Kurtosis"),
    timeGenerated: col(r, "TimeGenerated"),
  }));

  await migrate(pg, "report", "Report", r => ({
    reportID: col(r, "ReportID"),
    experimentID: col(r, "ExperimentID"),
    resultID: col(r, "ResultID"),
    timeGenerated: col(r, "TimeGenerated"),
    path: col(r, "Path"),
  }));

  await migrate(pg, "experiment_logs", "ExperimentLogs", r => ({
    logID: col(r, "LogID"),
    experimentID: col(r, "ExperimentID"),
    outputs: col(r, "Outputs"),
  }));

  await pg.end();
  console.log("🎉 Migration complete!");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});

