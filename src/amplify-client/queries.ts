/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getExperimentLogs = /* GraphQL */ `query GetExperimentLogs($logID: ID!) {
  getExperimentLogs(logID: $logID) {
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
` as GeneratedQuery<
  APITypes.GetExperimentLogsQueryVariables,
  APITypes.GetExperimentLogsQuery
>;
export const getFeatures = /* GraphQL */ `query GetFeatures($resultID: ID!) {
  getFeatures(resultID: $resultID) {
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
` as GeneratedQuery<
  APITypes.GetFeaturesQueryVariables,
  APITypes.GetFeaturesQuery
>;
export const getInstitution = /* GraphQL */ `query GetInstitution($institutionID: ID!) {
  getInstitution(institutionID: $institutionID) {
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
` as GeneratedQuery<
  APITypes.GetInstitutionQueryVariables,
  APITypes.GetInstitutionQuery
>;
export const getPatient = /* GraphQL */ `query GetPatient($patientID: ID!) {
  getPatient(patientID: $patientID) {
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
` as GeneratedQuery<
  APITypes.GetPatientQueryVariables,
  APITypes.GetPatientQuery
>;
export const getReport = /* GraphQL */ `query GetReport($reportID: ID!) {
  getReport(reportID: $reportID) {
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
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const getSignal = /* GraphQL */ `query GetSignal($experimentID: ID!) {
  getSignal(experimentID: $experimentID) {
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
` as GeneratedQuery<APITypes.GetSignalQueryVariables, APITypes.GetSignalQuery>;
export const getUser = /* GraphQL */ `query GetUser($userID: ID!) {
  getUser(userID: $userID) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getUserInstitution = /* GraphQL */ `query GetUserInstitution($institutionID: ID!, $userID: ID!) {
  getUserInstitution(institutionID: $institutionID, userID: $userID) {
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
` as GeneratedQuery<
  APITypes.GetUserInstitutionQueryVariables,
  APITypes.GetUserInstitutionQuery
>;
export const getUserPatient = /* GraphQL */ `query GetUserPatient($patientID: ID!, $userID: ID!) {
  getUserPatient(patientID: $patientID, userID: $userID) {
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
` as GeneratedQuery<
  APITypes.GetUserPatientQueryVariables,
  APITypes.GetUserPatientQuery
>;
export const listExperimentLogs = /* GraphQL */ `query ListExperimentLogs(
  $filter: ModelExperimentLogsFilterInput
  $limit: Int
  $logID: ID
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExperimentLogs(
    filter: $filter
    limit: $limit
    logID: $logID
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      experimentID
      logID
      outputs
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExperimentLogsQueryVariables,
  APITypes.ListExperimentLogsQuery
>;
export const listFeatures = /* GraphQL */ `query ListFeatures(
  $filter: ModelFeaturesFilterInput
  $limit: Int
  $nextToken: String
  $resultID: ID
  $sortDirection: ModelSortDirection
) {
  listFeatures(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    resultID: $resultID
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeaturesQueryVariables,
  APITypes.ListFeaturesQuery
>;
export const listInstitutions = /* GraphQL */ `query ListInstitutions(
  $filter: ModelInstitutionFilterInput
  $institutionID: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listInstitutions(
    filter: $filter
    institutionID: $institutionID
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      institutionAddress
      institutionID
      institutionName
      institutionTaxNumber
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstitutionsQueryVariables,
  APITypes.ListInstitutionsQuery
>;
export const listPatients = /* GraphQL */ `query ListPatients(
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
  $patientID: ID
  $sortDirection: ModelSortDirection
) {
  listPatients(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    patientID: $patientID
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      firstName
      lastName
      patientID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPatientsQueryVariables,
  APITypes.ListPatientsQuery
>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
  $reportID: ID
  $sortDirection: ModelSortDirection
) {
  listReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    reportID: $reportID
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      experimentID
      path
      reportID
      resultID
      timeGenerated
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const listSignals = /* GraphQL */ `query ListSignals(
  $experimentID: ID
  $filter: ModelSignalFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSignals(
    experimentID: $experimentID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSignalsQueryVariables,
  APITypes.ListSignalsQuery
>;
export const listUserInstitutions = /* GraphQL */ `query ListUserInstitutions(
  $filter: ModelUserInstitutionFilterInput
  $institutionID: ModelIDKeyConditionInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userID: ID
) {
  listUserInstitutions(
    filter: $filter
    institutionID: $institutionID
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userID: $userID
  ) {
    items {
      createdAt
      institutionID
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserInstitutionsQueryVariables,
  APITypes.ListUserInstitutionsQuery
>;
export const listUserPatients = /* GraphQL */ `query ListUserPatients(
  $filter: ModelUserPatientFilterInput
  $limit: Int
  $nextToken: String
  $patientID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $userID: ID
) {
  listUserPatients(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    patientID: $patientID
    sortDirection: $sortDirection
    userID: $userID
  ) {
    items {
      createdAt
      patientID
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserPatientsQueryVariables,
  APITypes.ListUserPatientsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userID: ID
) {
  listUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userID: $userID
  ) {
    items {
      createdAt
      mail
      passwordHash
      role
      updatedAt
      userID
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
