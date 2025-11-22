import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

/**
 * Gen 2 schema using the TS-first builder (a.schema / a.model).
 * Primary keys are mapped with .identifier([...]).
 * Relations are mapped with belongsTo / hasMany and explicit FK fields.
 */
const schema = a
  .schema({
    // -------------------------
    // Core entities
    // -------------------------
    Institution: a
      .model({
        institutionID: a.id().required(),
        institutionName: a.string(),
        institutionTaxNumber: a.string(),
        institutionAddress: a.string(),

        users: a.hasMany("UserInstitution", "institutionID"),
      })
      .identifier(["institutionID"]),

    User: a
      .model({
        userID: a.id().required(),
        username: a.string(),
        passwordHash: a.string(),
        mail: a.string(),
        role: a.string(),

        institutions: a.hasMany("UserInstitution", "userID"),
        patients: a.hasMany("UserPatient", "userID"),
        signals: a.hasMany("Signal", "userID"),
      })
      .identifier(["userID"]),

    Patient: a
      .model({
        patientID: a.id().required(),
        firstName: a.string(),
        lastName: a.string(),

        users: a.hasMany("UserPatient", "patientID"),
        signals: a.hasMany("Signal", "patientID"),
      })
      .identifier(["patientID"]),

    // -------------------------
    // Many-to-Many linking tables
    // -------------------------
    UserInstitution: a
      .model({
        userID: a.id().required(),
        institutionID: a.id().required(),

        user: a.belongsTo("User", "userID"),
        institution: a.belongsTo("Institution", "institutionID"),
      })
      .identifier(["userID", "institutionID"]),

    UserPatient: a
      .model({
        userID: a.id().required(),
        patientID: a.id().required(),

        user: a.belongsTo("User", "userID"),
        patient: a.belongsTo("Patient", "patientID"),
      })
      .identifier(["userID", "patientID"]),

    // -------------------------
    // Experimental data hierarchy
    // -------------------------
    Signal: a
      .model({
        experimentID: a.id().required(),
        userID: a.id().required(),
        patientID: a.id().required(),
        uploadTime: a.datetime(),
        status: a.string(),
        filename: a.string(),
        path: a.string(),

        user: a.belongsTo("User", "userID"),
        patient: a.belongsTo("Patient", "patientID"),

        features: a.hasMany("Features", "experimentID"),
        reports: a.hasMany("Report", "experimentID"),
        logs: a.hasMany("ExperimentLogs", "experimentID"),
      })
      .identifier(["experimentID"]),

    Features: a
      .model({
        resultID: a.id().required(),
        experimentID: a.id().required(),
        peakCounts: a.integer(),
        amplitude: a.float(),
        auc: a.float(),
        fwhm: a.float(),
        frequency: a.float(),
        snr: a.float(),
        skewness: a.float(),
        kurtosis: a.float(),
        timeGenerated: a.datetime(),

        signal: a.belongsTo("Signal", "experimentID"),
        reports: a.hasMany("Report", "resultID"),
      })
      .identifier(["resultID"]),

    Report: a
      .model({
        reportID: a.id().required(),
        experimentID: a.id().required(),
        resultID: a.id(), // optional
        timeGenerated: a.datetime(),
        path: a.string(),

        signal: a.belongsTo("Signal", "experimentID"),
        features: a.belongsTo("Features", "resultID"),
      })
      .identifier(["reportID"]),

    ExperimentLogs: a
      .model({
        logID: a.id().required(),
        experimentID: a.id().required(),
        outputs: a.string(), // base64/JSON string

        signal: a.belongsTo("Signal", "experimentID"),
      })
      .identifier(["logID"]),
  })
  // simplest default: only signed-in users can access
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});

