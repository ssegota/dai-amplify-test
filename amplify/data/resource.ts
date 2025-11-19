import { defineBackend } from "@aws-amplify/backend";
import { data } from "@aws-amplify/backend/data";
import { auth } from "@aws-amplify/backend/auth";

export const backend = defineBackend({
  auth: auth({
    loginMechanisms: ["email"],
    signupAttributes: ["email"],
  }),

  data: data({
    schema: {
      // -------------------------
      // Core entities
      // -------------------------
      Institution: {
        institutionID: "ID!",         // integer PK → Amplify ID
        institutionName: "String",
        institutionTaxNumber: "String",
        institutionAddress: "String",

        relationships: {
          users: {
            type: "hasMany",
            model: "UserInstitution",
            foreignKey: "institutionID",
          },
        },
      },

      User: {
        userID: "ID!",   // integer PK → Amplify ID
        username: "String",
        passwordHash: "String",
        mail: "String",
        role: "String",

        relationships: {
          institutions: {
            type: "hasMany",
            model: "UserInstitution",
            foreignKey: "userID",
          },
          patients: {
            type: "hasMany",
            model: "UserPatient",
            foreignKey: "userID",
          },
          signals: {
            type: "hasMany",
            model: "Signal",
            foreignKey: "userID",
          },
        },
      },

      Patient: {
        patientID: "ID!",
        firstName: "String",
        lastName: "String",

        relationships: {
          users: {
            type: "hasMany",
            model: "UserPatient",
            foreignKey: "patientID",
          },
          signals: {
            type: "hasMany",
            model: "Signal",
            foreignKey: "patientID",
          },
        },
      },

      // -------------------------
      // Many-to-Many linking tables
      // -------------------------
      UserInstitution: {
        userID: "ID!",
        institutionID: "ID!",

        relationships: {
          user: {
            type: "belongsTo",
            model: "User",
            targetField: "userID",
          },
          institution: {
            type: "belongsTo",
            model: "Institution",
            targetField: "institutionID",
          },
        },
      },

      UserPatient: {
        userID: "ID!",
        patientID: "ID!",

        relationships: {
          user: {
            type: "belongsTo",
            model: "User",
            targetField: "userID",
          },
          patient: {
            type: "belongsTo",
            model: "Patient",
            targetField: "patientID",
          },
        },
      },

      // -------------------------
      // Experimental data hierarchy
      // -------------------------
      Signal: {
        experimentID: "ID!", // PK
        userID: "ID!",
        patientID: "ID!",
        uploadTime: "AWSDateTime",
        status: "String",
        filename: "String",
        path: "String",

        relationships: {
          user: {
            type: "belongsTo",
            model: "User",
            targetField: "userID",
          },
          patient: {
            type: "belongsTo",
            model: "Patient",
            targetField: "patientID",
          },
          features: {
            type: "hasMany",
            model: "Features",
            foreignKey: "experimentID",
          },
          reports: {
            type: "hasMany",
            model: "Report",
            foreignKey: "experimentID",
          },
          logs: {
            type: "hasMany",
            model: "ExperimentLogs",
            foreignKey: "experimentID",
          },
        },
      },

      Features: {
        resultID: "ID!",
        experimentID: "ID!",
        peakCounts: "Int",
        amplitude: "Float",
        auc: "Float",
        fwhm: "Float",
        frequency: "Float",
        snr: "Float",
        skewness: "Float",
        kurtosis: "Float",
        timeGenerated: "AWSDateTime",

        relationships: {
          signal: {
            type: "belongsTo",
            model: "Signal",
            targetField: "experimentID",
          },
          reports: {
            type: "hasMany",
            model: "Report",
            foreignKey: "resultID",
          },
        },
      },

      Report: {
        reportID: "ID!",
        experimentID: "ID!",
        resultID: "ID",
        timeGenerated: "AWSDateTime",
        path: "String",

        relationships: {
          signal: {
            type: "belongsTo",
            model: "Signal",
            targetField: "experimentID",
          },
          features: {
            type: "belongsTo",
            model: "Features",
            targetField: "resultID",
          },
        },
      },

      ExperimentLogs: {
        logID: "ID!",
        experimentID: "ID!",
        outputs: "String", // BLOB → base64 or JSON

        relationships: {
          signal: {
            type: "belongsTo",
            model: "Signal",
            targetField: "experimentID",
          },
        },
      },
    },
  }),
});

export default backend;

