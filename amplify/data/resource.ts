import { a, defineData } from "@aws-amplify/backend";

export const data = defineData({
  schema: a.schema({

    // ===========================
    // USER
    // ===========================
    User: a
      .model({
        userID: a.id().required(),
        username: a.string(),
        passwordHash: a.string(),

        patients: a.hasMany("Patient", "userID"),
      })
      .identifier(["userID"])
      .authorization((allow) => [
        allow.group("admin").to(["create", "read", "update", "delete"]),
      ]),

    // ===========================
    // PATIENT
    // ===========================
    Patient: a
      .model({
        patientID: a.id().required(),
        firstName: a.string(),
        lastName: a.string(),

        userID: a.id(),
        user: a.belongsTo("User", "userID"),

        features: a.hasMany("Feature", "patientID"),
      })
      .identifier(["patientID"])
      .authorization((allow) => [
        allow.owner().to(["create", "read", "update", "delete"]),
        allow.group("admin"),
      ]),

    // ===========================
    // FEATURE
    // ===========================
    Feature: a
      .model({
        featureID: a.id().required(),

        peakCounts: a.integer(),
        amplitude: a.float(),
        auc: a.float(),
        fwhm: a.float(),
        frequency: a.float(),
        snr: a.float(),
        skewness: a.float(),
        kurtosis: a.float(),
        timeGenerated: a.timestamp(),

        patientID: a.id(),
        patient: a.belongsTo("Patient", "patientID"),
      })
      .identifier(["featureID"])
      .authorization((allow) => [
        allow.owner().to(["create", "read", "update", "delete"]),
        allow.group("admin"),
      ]),
  }),
});

