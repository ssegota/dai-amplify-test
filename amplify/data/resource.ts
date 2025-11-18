import { a, defineData } from "@aws-amplify/data";

export const schema = defineData({
  models: {
    Institution: a
      .model({
        institutionID: a.id().required(),
        institutionName: a.string().required(),
        institutionTaxNumber: a.string(),
        institutionAddress: a.string(),

        users: a.hasMany("UserInstitution", "institutionID"),
      })
      .identifier(["institutionID"]),

    User: a
      .model({
        userID: a.id().required(),
        username: a.string().required(),
        passwordHash: a.string().required(),
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
        firstName: a.string().required(),
        lastName: a.string().required(),

        users: a.hasMany("UserPatient", "patientID"),
        signals: a.hasMany("Signal", "patientID"),
      })
      .identifier(["patientID"]),

    // ============================
    // Many-to-Many join tables
    // ============================

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

    // ============================
    // Experimental data hierarchy
    // ============================

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

        experiment: a.belongsTo("Signal", "experimentID"),
      })
      .identifier(["resultID"]),

    Report: a
      .model({
        reportID: a.id().required(),
        experimentID: a.id().required(),
        resultID: a.id(),

        timeGenerated: a.datetime(),
        path: a.string(),

        experiment: a.belongsTo("Signal", "experimentID"),
        result: a.belongsTo("Features", "resultID"),
      })
      .identifier(["reportID"]),

    ExperimentLogs: a
      .model({
        logID: a.id().required(),
        experimentID: a.id().required(),

        outputs: a.binary(),

        experiment: a.belongsTo("Signal", "experimentID"),
      })
      .identifier(["logID"]),
  },
});

