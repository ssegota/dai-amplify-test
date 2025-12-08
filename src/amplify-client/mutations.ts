/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createExperimentLogs = /* GraphQL */ `mutation CreateExperimentLogs(
  $condition: ModelExperimentLogsConditionInput
  $input: CreateExperimentLogsInput!
) {
  createExperimentLogs(condition: $condition, input: $input) {
    createdAt
    experimentID
    logID
    outputs
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExperimentLogsMutationVariables,
  APITypes.CreateExperimentLogsMutation
>;
export const createFeatures = /* GraphQL */ `mutation CreateFeatures(
  $condition: ModelFeaturesConditionInput
  $input: CreateFeaturesInput!
) {
  createFeatures(condition: $condition, input: $input) {
    amplitude
    auc
    createdAt
    experimentID
    frequency
    fwhm
    kurtosis
    peakCounts
    reports {
      nextToken
      __typename
    }
    resultID
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    skewness
    snr
    timeGenerated
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeaturesMutationVariables,
  APITypes.CreateFeaturesMutation
>;
export const createInstitution = /* GraphQL */ `mutation CreateInstitution(
  $condition: ModelInstitutionConditionInput
  $input: CreateInstitutionInput!
) {
  createInstitution(condition: $condition, input: $input) {
    createdAt
    institutionAddress
    institutionID
    institutionName
    institutionTaxNumber
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstitutionMutationVariables,
  APITypes.CreateInstitutionMutation
>;
export const createPatient = /* GraphQL */ `mutation CreatePatient(
  $condition: ModelPatientConditionInput
  $input: CreatePatientInput!
) {
  createPatient(condition: $condition, input: $input) {
    createdAt
    firstName
    lastName
    patientID
    signals {
      nextToken
      __typename
    }
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePatientMutationVariables,
  APITypes.CreatePatientMutation
>;
export const createReport = /* GraphQL */ `mutation CreateReport(
  $condition: ModelReportConditionInput
  $input: CreateReportInput!
) {
  createReport(condition: $condition, input: $input) {
    createdAt
    experimentID
    features {
      amplitude
      auc
      createdAt
      experimentID
      frequency
      fwhm
      kurtosis
      peakCounts
      resultID
      skewness
      snr
      timeGenerated
      updatedAt
      __typename
    }
    path
    reportID
    resultID
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    timeGenerated
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const createSignal = /* GraphQL */ `mutation CreateSignal(
  $condition: ModelSignalConditionInput
  $input: CreateSignalInput!
) {
  createSignal(condition: $condition, input: $input) {
    createdAt
    experimentID
    features {
      nextToken
      __typename
    }
    filename
    logs {
      nextToken
      __typename
    }
    path
    patient {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    patientID
    reports {
      nextToken
      __typename
    }
    status
    updatedAt
    uploadTime
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSignalMutationVariables,
  APITypes.CreateSignalMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    createdAt
    institutions {
      nextToken
      __typename
    }
    mail
    passwordHash
    patients {
      nextToken
      __typename
    }
    role
    signals {
      nextToken
      __typename
    }
    updatedAt
    userID
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserInstitution = /* GraphQL */ `mutation CreateUserInstitution(
  $condition: ModelUserInstitutionConditionInput
  $input: CreateUserInstitutionInput!
) {
  createUserInstitution(condition: $condition, input: $input) {
    createdAt
    institution {
      createdAt
      institutionAddress
      institutionID
      institutionName
      institutionTaxNumber
      updatedAt
      __typename
    }
    institutionID
    updatedAt
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserInstitutionMutationVariables,
  APITypes.CreateUserInstitutionMutation
>;
export const createUserPatient = /* GraphQL */ `mutation CreateUserPatient(
  $condition: ModelUserPatientConditionInput
  $input: CreateUserPatientInput!
) {
  createUserPatient(condition: $condition, input: $input) {
    createdAt
    patient {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    patientID
    updatedAt
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserPatientMutationVariables,
  APITypes.CreateUserPatientMutation
>;
export const deleteExperimentLogs = /* GraphQL */ `mutation DeleteExperimentLogs(
  $condition: ModelExperimentLogsConditionInput
  $input: DeleteExperimentLogsInput!
) {
  deleteExperimentLogs(condition: $condition, input: $input) {
    createdAt
    experimentID
    logID
    outputs
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExperimentLogsMutationVariables,
  APITypes.DeleteExperimentLogsMutation
>;
export const deleteFeatures = /* GraphQL */ `mutation DeleteFeatures(
  $condition: ModelFeaturesConditionInput
  $input: DeleteFeaturesInput!
) {
  deleteFeatures(condition: $condition, input: $input) {
    amplitude
    auc
    createdAt
    experimentID
    frequency
    fwhm
    kurtosis
    peakCounts
    reports {
      nextToken
      __typename
    }
    resultID
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    skewness
    snr
    timeGenerated
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeaturesMutationVariables,
  APITypes.DeleteFeaturesMutation
>;
export const deleteInstitution = /* GraphQL */ `mutation DeleteInstitution(
  $condition: ModelInstitutionConditionInput
  $input: DeleteInstitutionInput!
) {
  deleteInstitution(condition: $condition, input: $input) {
    createdAt
    institutionAddress
    institutionID
    institutionName
    institutionTaxNumber
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstitutionMutationVariables,
  APITypes.DeleteInstitutionMutation
>;
export const deletePatient = /* GraphQL */ `mutation DeletePatient(
  $condition: ModelPatientConditionInput
  $input: DeletePatientInput!
) {
  deletePatient(condition: $condition, input: $input) {
    createdAt
    firstName
    lastName
    patientID
    signals {
      nextToken
      __typename
    }
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePatientMutationVariables,
  APITypes.DeletePatientMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $condition: ModelReportConditionInput
  $input: DeleteReportInput!
) {
  deleteReport(condition: $condition, input: $input) {
    createdAt
    experimentID
    features {
      amplitude
      auc
      createdAt
      experimentID
      frequency
      fwhm
      kurtosis
      peakCounts
      resultID
      skewness
      snr
      timeGenerated
      updatedAt
      __typename
    }
    path
    reportID
    resultID
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    timeGenerated
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const deleteSignal = /* GraphQL */ `mutation DeleteSignal(
  $condition: ModelSignalConditionInput
  $input: DeleteSignalInput!
) {
  deleteSignal(condition: $condition, input: $input) {
    createdAt
    experimentID
    features {
      nextToken
      __typename
    }
    filename
    logs {
      nextToken
      __typename
    }
    path
    patient {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    patientID
    reports {
      nextToken
      __typename
    }
    status
    updatedAt
    uploadTime
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSignalMutationVariables,
  APITypes.DeleteSignalMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    createdAt
    institutions {
      nextToken
      __typename
    }
    mail
    passwordHash
    patients {
      nextToken
      __typename
    }
    role
    signals {
      nextToken
      __typename
    }
    updatedAt
    userID
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserInstitution = /* GraphQL */ `mutation DeleteUserInstitution(
  $condition: ModelUserInstitutionConditionInput
  $input: DeleteUserInstitutionInput!
) {
  deleteUserInstitution(condition: $condition, input: $input) {
    createdAt
    institution {
      createdAt
      institutionAddress
      institutionID
      institutionName
      institutionTaxNumber
      updatedAt
      __typename
    }
    institutionID
    updatedAt
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserInstitutionMutationVariables,
  APITypes.DeleteUserInstitutionMutation
>;
export const deleteUserPatient = /* GraphQL */ `mutation DeleteUserPatient(
  $condition: ModelUserPatientConditionInput
  $input: DeleteUserPatientInput!
) {
  deleteUserPatient(condition: $condition, input: $input) {
    createdAt
    patient {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    patientID
    updatedAt
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserPatientMutationVariables,
  APITypes.DeleteUserPatientMutation
>;
export const updateExperimentLogs = /* GraphQL */ `mutation UpdateExperimentLogs(
  $condition: ModelExperimentLogsConditionInput
  $input: UpdateExperimentLogsInput!
) {
  updateExperimentLogs(condition: $condition, input: $input) {
    createdAt
    experimentID
    logID
    outputs
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExperimentLogsMutationVariables,
  APITypes.UpdateExperimentLogsMutation
>;
export const updateFeatures = /* GraphQL */ `mutation UpdateFeatures(
  $condition: ModelFeaturesConditionInput
  $input: UpdateFeaturesInput!
) {
  updateFeatures(condition: $condition, input: $input) {
    amplitude
    auc
    createdAt
    experimentID
    frequency
    fwhm
    kurtosis
    peakCounts
    reports {
      nextToken
      __typename
    }
    resultID
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    skewness
    snr
    timeGenerated
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeaturesMutationVariables,
  APITypes.UpdateFeaturesMutation
>;
export const updateInstitution = /* GraphQL */ `mutation UpdateInstitution(
  $condition: ModelInstitutionConditionInput
  $input: UpdateInstitutionInput!
) {
  updateInstitution(condition: $condition, input: $input) {
    createdAt
    institutionAddress
    institutionID
    institutionName
    institutionTaxNumber
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstitutionMutationVariables,
  APITypes.UpdateInstitutionMutation
>;
export const updatePatient = /* GraphQL */ `mutation UpdatePatient(
  $condition: ModelPatientConditionInput
  $input: UpdatePatientInput!
) {
  updatePatient(condition: $condition, input: $input) {
    createdAt
    firstName
    lastName
    patientID
    signals {
      nextToken
      __typename
    }
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePatientMutationVariables,
  APITypes.UpdatePatientMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $condition: ModelReportConditionInput
  $input: UpdateReportInput!
) {
  updateReport(condition: $condition, input: $input) {
    createdAt
    experimentID
    features {
      amplitude
      auc
      createdAt
      experimentID
      frequency
      fwhm
      kurtosis
      peakCounts
      resultID
      skewness
      snr
      timeGenerated
      updatedAt
      __typename
    }
    path
    reportID
    resultID
    signal {
      createdAt
      experimentID
      filename
      path
      patientID
      status
      updatedAt
      uploadTime
      userID
      __typename
    }
    timeGenerated
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const updateSignal = /* GraphQL */ `mutation UpdateSignal(
  $condition: ModelSignalConditionInput
  $input: UpdateSignalInput!
) {
  updateSignal(condition: $condition, input: $input) {
    createdAt
    experimentID
    features {
      nextToken
      __typename
    }
    filename
    logs {
      nextToken
      __typename
    }
    path
    patient {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    patientID
    reports {
      nextToken
      __typename
    }
    status
    updatedAt
    uploadTime
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSignalMutationVariables,
  APITypes.UpdateSignalMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    createdAt
    institutions {
      nextToken
      __typename
    }
    mail
    passwordHash
    patients {
      nextToken
      __typename
    }
    role
    signals {
      nextToken
      __typename
    }
    updatedAt
    userID
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserInstitution = /* GraphQL */ `mutation UpdateUserInstitution(
  $condition: ModelUserInstitutionConditionInput
  $input: UpdateUserInstitutionInput!
) {
  updateUserInstitution(condition: $condition, input: $input) {
    createdAt
    institution {
      createdAt
      institutionAddress
      institutionID
      institutionName
      institutionTaxNumber
      updatedAt
      __typename
    }
    institutionID
    updatedAt
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserInstitutionMutationVariables,
  APITypes.UpdateUserInstitutionMutation
>;
export const updateUserPatient = /* GraphQL */ `mutation UpdateUserPatient(
  $condition: ModelUserPatientConditionInput
  $input: UpdateUserPatientInput!
) {
  updateUserPatient(condition: $condition, input: $input) {
    createdAt
    patient {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    patientID
    updatedAt
    user {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserPatientMutationVariables,
  APITypes.UpdateUserPatientMutation
>;
