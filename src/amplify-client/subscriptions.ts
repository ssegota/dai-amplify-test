/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExperimentLogs = /* GraphQL */ `subscription OnCreateExperimentLogs(
  $filter: ModelSubscriptionExperimentLogsFilterInput
) {
  onCreateExperimentLogs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExperimentLogsSubscriptionVariables,
  APITypes.OnCreateExperimentLogsSubscription
>;
export const onCreateFeatures = /* GraphQL */ `subscription OnCreateFeatures($filter: ModelSubscriptionFeaturesFilterInput) {
  onCreateFeatures(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeaturesSubscriptionVariables,
  APITypes.OnCreateFeaturesSubscription
>;
export const onCreateInstitution = /* GraphQL */ `subscription OnCreateInstitution(
  $filter: ModelSubscriptionInstitutionFilterInput
) {
  onCreateInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInstitutionSubscriptionVariables,
  APITypes.OnCreateInstitutionSubscription
>;
export const onCreatePatient = /* GraphQL */ `subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
  onCreatePatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePatientSubscriptionVariables,
  APITypes.OnCreatePatientSubscription
>;
export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onCreateSignal = /* GraphQL */ `subscription OnCreateSignal($filter: ModelSubscriptionSignalFilterInput) {
  onCreateSignal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSignalSubscriptionVariables,
  APITypes.OnCreateSignalSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserInstitution = /* GraphQL */ `subscription OnCreateUserInstitution(
  $filter: ModelSubscriptionUserInstitutionFilterInput
) {
  onCreateUserInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserInstitutionSubscriptionVariables,
  APITypes.OnCreateUserInstitutionSubscription
>;
export const onCreateUserPatient = /* GraphQL */ `subscription OnCreateUserPatient(
  $filter: ModelSubscriptionUserPatientFilterInput
) {
  onCreateUserPatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserPatientSubscriptionVariables,
  APITypes.OnCreateUserPatientSubscription
>;
export const onDeleteExperimentLogs = /* GraphQL */ `subscription OnDeleteExperimentLogs(
  $filter: ModelSubscriptionExperimentLogsFilterInput
) {
  onDeleteExperimentLogs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExperimentLogsSubscriptionVariables,
  APITypes.OnDeleteExperimentLogsSubscription
>;
export const onDeleteFeatures = /* GraphQL */ `subscription OnDeleteFeatures($filter: ModelSubscriptionFeaturesFilterInput) {
  onDeleteFeatures(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeaturesSubscriptionVariables,
  APITypes.OnDeleteFeaturesSubscription
>;
export const onDeleteInstitution = /* GraphQL */ `subscription OnDeleteInstitution(
  $filter: ModelSubscriptionInstitutionFilterInput
) {
  onDeleteInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstitutionSubscriptionVariables,
  APITypes.OnDeleteInstitutionSubscription
>;
export const onDeletePatient = /* GraphQL */ `subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
  onDeletePatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePatientSubscriptionVariables,
  APITypes.OnDeletePatientSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onDeleteSignal = /* GraphQL */ `subscription OnDeleteSignal($filter: ModelSubscriptionSignalFilterInput) {
  onDeleteSignal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSignalSubscriptionVariables,
  APITypes.OnDeleteSignalSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserInstitution = /* GraphQL */ `subscription OnDeleteUserInstitution(
  $filter: ModelSubscriptionUserInstitutionFilterInput
) {
  onDeleteUserInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserInstitutionSubscriptionVariables,
  APITypes.OnDeleteUserInstitutionSubscription
>;
export const onDeleteUserPatient = /* GraphQL */ `subscription OnDeleteUserPatient(
  $filter: ModelSubscriptionUserPatientFilterInput
) {
  onDeleteUserPatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserPatientSubscriptionVariables,
  APITypes.OnDeleteUserPatientSubscription
>;
export const onUpdateExperimentLogs = /* GraphQL */ `subscription OnUpdateExperimentLogs(
  $filter: ModelSubscriptionExperimentLogsFilterInput
) {
  onUpdateExperimentLogs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExperimentLogsSubscriptionVariables,
  APITypes.OnUpdateExperimentLogsSubscription
>;
export const onUpdateFeatures = /* GraphQL */ `subscription OnUpdateFeatures($filter: ModelSubscriptionFeaturesFilterInput) {
  onUpdateFeatures(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeaturesSubscriptionVariables,
  APITypes.OnUpdateFeaturesSubscription
>;
export const onUpdateInstitution = /* GraphQL */ `subscription OnUpdateInstitution(
  $filter: ModelSubscriptionInstitutionFilterInput
) {
  onUpdateInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstitutionSubscriptionVariables,
  APITypes.OnUpdateInstitutionSubscription
>;
export const onUpdatePatient = /* GraphQL */ `subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
  onUpdatePatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePatientSubscriptionVariables,
  APITypes.OnUpdatePatientSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onUpdateSignal = /* GraphQL */ `subscription OnUpdateSignal($filter: ModelSubscriptionSignalFilterInput) {
  onUpdateSignal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSignalSubscriptionVariables,
  APITypes.OnUpdateSignalSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserInstitution = /* GraphQL */ `subscription OnUpdateUserInstitution(
  $filter: ModelSubscriptionUserInstitutionFilterInput
) {
  onUpdateUserInstitution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserInstitutionSubscriptionVariables,
  APITypes.OnUpdateUserInstitutionSubscription
>;
export const onUpdateUserPatient = /* GraphQL */ `subscription OnUpdateUserPatient(
  $filter: ModelSubscriptionUserPatientFilterInput
) {
  onUpdateUserPatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserPatientSubscriptionVariables,
  APITypes.OnUpdateUserPatientSubscription
>;
