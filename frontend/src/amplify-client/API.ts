/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ExperimentLogs = {
  __typename: "ExperimentLogs",
  createdAt: string,
  experimentID: string,
  logID: string,
  outputs?: string | null,
  signal?: Signal | null,
  updatedAt: string,
};

export type Signal = {
  __typename: "Signal",
  createdAt: string,
  experimentID: string,
  features?: ModelFeaturesConnection | null,
  filename?: string | null,
  logs?: ModelExperimentLogsConnection | null,
  path?: string | null,
  patient?: Patient | null,
  patientID: string,
  reports?: ModelReportConnection | null,
  status?: string | null,
  updatedAt: string,
  uploadTime?: string | null,
  user?: User | null,
  userID: string,
};

export type ModelFeaturesConnection = {
  __typename: "ModelFeaturesConnection",
  items:  Array<Features | null >,
  nextToken?: string | null,
};

export type Features = {
  __typename: "Features",
  amplitude?: number | null,
  auc?: number | null,
  createdAt: string,
  experimentID: string,
  frequency?: number | null,
  fwhm?: number | null,
  kurtosis?: number | null,
  peakCounts?: number | null,
  reports?: ModelReportConnection | null,
  resultID: string,
  signal?: Signal | null,
  skewness?: number | null,
  snr?: number | null,
  timeGenerated?: string | null,
  updatedAt: string,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type Report = {
  __typename: "Report",
  createdAt: string,
  experimentID: string,
  features?: Features | null,
  path?: string | null,
  reportID: string,
  resultID?: string | null,
  signal?: Signal | null,
  timeGenerated?: string | null,
  updatedAt: string,
};

export type ModelExperimentLogsConnection = {
  __typename: "ModelExperimentLogsConnection",
  items:  Array<ExperimentLogs | null >,
  nextToken?: string | null,
};

export type Patient = {
  __typename: "Patient",
  createdAt: string,
  firstName?: string | null,
  lastName?: string | null,
  patientID: string,
  signals?: ModelSignalConnection | null,
  updatedAt: string,
  users?: ModelUserPatientConnection | null,
};

export type ModelSignalConnection = {
  __typename: "ModelSignalConnection",
  items:  Array<Signal | null >,
  nextToken?: string | null,
};

export type ModelUserPatientConnection = {
  __typename: "ModelUserPatientConnection",
  items:  Array<UserPatient | null >,
  nextToken?: string | null,
};

export type UserPatient = {
  __typename: "UserPatient",
  createdAt: string,
  patient?: Patient | null,
  patientID: string,
  updatedAt: string,
  user?: User | null,
  userID: string,
};

export type User = {
  __typename: "User",
  createdAt: string,
  institutions?: ModelUserInstitutionConnection | null,
  mail?: string | null,
  passwordHash?: string | null,
  patients?: ModelUserPatientConnection | null,
  role?: string | null,
  signals?: ModelSignalConnection | null,
  updatedAt: string,
  userID: string,
  username?: string | null,
};

export type ModelUserInstitutionConnection = {
  __typename: "ModelUserInstitutionConnection",
  items:  Array<UserInstitution | null >,
  nextToken?: string | null,
};

export type UserInstitution = {
  __typename: "UserInstitution",
  createdAt: string,
  institution?: Institution | null,
  institutionID: string,
  updatedAt: string,
  user?: User | null,
  userID: string,
};

export type Institution = {
  __typename: "Institution",
  createdAt: string,
  institutionAddress?: string | null,
  institutionID: string,
  institutionName?: string | null,
  institutionTaxNumber?: string | null,
  updatedAt: string,
  users?: ModelUserInstitutionConnection | null,
};

export type ModelExperimentLogsFilterInput = {
  and?: Array< ModelExperimentLogsFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  id?: ModelIDInput | null,
  logID?: ModelIDInput | null,
  not?: ModelExperimentLogsFilterInput | null,
  or?: Array< ModelExperimentLogsFilterInput | null > | null,
  outputs?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFeaturesFilterInput = {
  amplitude?: ModelFloatInput | null,
  and?: Array< ModelFeaturesFilterInput | null > | null,
  auc?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  frequency?: ModelFloatInput | null,
  fwhm?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  kurtosis?: ModelFloatInput | null,
  not?: ModelFeaturesFilterInput | null,
  or?: Array< ModelFeaturesFilterInput | null > | null,
  peakCounts?: ModelIntInput | null,
  resultID?: ModelIDInput | null,
  skewness?: ModelFloatInput | null,
  snr?: ModelFloatInput | null,
  timeGenerated?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelInstitutionFilterInput = {
  and?: Array< ModelInstitutionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  institutionAddress?: ModelStringInput | null,
  institutionID?: ModelIDInput | null,
  institutionName?: ModelStringInput | null,
  institutionTaxNumber?: ModelStringInput | null,
  not?: ModelInstitutionFilterInput | null,
  or?: Array< ModelInstitutionFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelInstitutionConnection = {
  __typename: "ModelInstitutionConnection",
  items:  Array<Institution | null >,
  nextToken?: string | null,
};

export type ModelPatientFilterInput = {
  and?: Array< ModelPatientFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelPatientFilterInput | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  patientID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items:  Array<Patient | null >,
  nextToken?: string | null,
};

export type ModelReportFilterInput = {
  and?: Array< ModelReportFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  id?: ModelIDInput | null,
  not?: ModelReportFilterInput | null,
  or?: Array< ModelReportFilterInput | null > | null,
  path?: ModelStringInput | null,
  reportID?: ModelIDInput | null,
  resultID?: ModelIDInput | null,
  timeGenerated?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSignalFilterInput = {
  and?: Array< ModelSignalFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  filename?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelSignalFilterInput | null,
  or?: Array< ModelSignalFilterInput | null > | null,
  path?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uploadTime?: ModelStringInput | null,
  userID?: ModelIDInput | null,
};

export type ModelUserInstitutionFilterInput = {
  and?: Array< ModelUserInstitutionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  institutionID?: ModelIDInput | null,
  not?: ModelUserInstitutionFilterInput | null,
  or?: Array< ModelUserInstitutionFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
};

export type ModelIDKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelUserPatientFilterInput = {
  and?: Array< ModelUserPatientFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserPatientFilterInput | null,
  or?: Array< ModelUserPatientFilterInput | null > | null,
  patientID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  mail?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  passwordHash?: ModelStringInput | null,
  role?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelExperimentLogsConditionInput = {
  and?: Array< ModelExperimentLogsConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  not?: ModelExperimentLogsConditionInput | null,
  or?: Array< ModelExperimentLogsConditionInput | null > | null,
  outputs?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateExperimentLogsInput = {
  experimentID: string,
  logID: string,
  outputs?: string | null,
};

export type ModelFeaturesConditionInput = {
  amplitude?: ModelFloatInput | null,
  and?: Array< ModelFeaturesConditionInput | null > | null,
  auc?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  frequency?: ModelFloatInput | null,
  fwhm?: ModelFloatInput | null,
  kurtosis?: ModelFloatInput | null,
  not?: ModelFeaturesConditionInput | null,
  or?: Array< ModelFeaturesConditionInput | null > | null,
  peakCounts?: ModelIntInput | null,
  skewness?: ModelFloatInput | null,
  snr?: ModelFloatInput | null,
  timeGenerated?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateFeaturesInput = {
  amplitude?: number | null,
  auc?: number | null,
  experimentID: string,
  frequency?: number | null,
  fwhm?: number | null,
  kurtosis?: number | null,
  peakCounts?: number | null,
  resultID: string,
  skewness?: number | null,
  snr?: number | null,
  timeGenerated?: string | null,
};

export type ModelInstitutionConditionInput = {
  and?: Array< ModelInstitutionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  institutionAddress?: ModelStringInput | null,
  institutionName?: ModelStringInput | null,
  institutionTaxNumber?: ModelStringInput | null,
  not?: ModelInstitutionConditionInput | null,
  or?: Array< ModelInstitutionConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateInstitutionInput = {
  institutionAddress?: string | null,
  institutionID: string,
  institutionName?: string | null,
  institutionTaxNumber?: string | null,
};

export type ModelPatientConditionInput = {
  and?: Array< ModelPatientConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelPatientConditionInput | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePatientInput = {
  firstName?: string | null,
  lastName?: string | null,
  patientID: string,
};

export type ModelReportConditionInput = {
  and?: Array< ModelReportConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  experimentID?: ModelIDInput | null,
  not?: ModelReportConditionInput | null,
  or?: Array< ModelReportConditionInput | null > | null,
  path?: ModelStringInput | null,
  resultID?: ModelIDInput | null,
  timeGenerated?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateReportInput = {
  experimentID: string,
  path?: string | null,
  reportID: string,
  resultID?: string | null,
  timeGenerated?: string | null,
};

export type ModelSignalConditionInput = {
  and?: Array< ModelSignalConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  not?: ModelSignalConditionInput | null,
  or?: Array< ModelSignalConditionInput | null > | null,
  path?: ModelStringInput | null,
  patientID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  uploadTime?: ModelStringInput | null,
  userID?: ModelIDInput | null,
};

export type CreateSignalInput = {
  experimentID: string,
  filename?: string | null,
  path?: string | null,
  patientID: string,
  status?: string | null,
  uploadTime?: string | null,
  userID: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  mail?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  passwordHash?: ModelStringInput | null,
  role?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  mail?: string | null,
  passwordHash?: string | null,
  role?: string | null,
  userID: string,
  username?: string | null,
};

export type ModelUserInstitutionConditionInput = {
  and?: Array< ModelUserInstitutionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserInstitutionConditionInput | null,
  or?: Array< ModelUserInstitutionConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInstitutionInput = {
  institutionID: string,
  userID: string,
};

export type ModelUserPatientConditionInput = {
  and?: Array< ModelUserPatientConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserPatientConditionInput | null,
  or?: Array< ModelUserPatientConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserPatientInput = {
  patientID: string,
  userID: string,
};

export type DeleteExperimentLogsInput = {
  logID: string,
};

export type DeleteFeaturesInput = {
  resultID: string,
};

export type DeleteInstitutionInput = {
  institutionID: string,
};

export type DeletePatientInput = {
  patientID: string,
};

export type DeleteReportInput = {
  reportID: string,
};

export type DeleteSignalInput = {
  experimentID: string,
};

export type DeleteUserInput = {
  userID: string,
};

export type DeleteUserInstitutionInput = {
  institutionID: string,
  userID: string,
};

export type DeleteUserPatientInput = {
  patientID: string,
  userID: string,
};

export type UpdateExperimentLogsInput = {
  experimentID?: string | null,
  logID: string,
  outputs?: string | null,
};

export type UpdateFeaturesInput = {
  amplitude?: number | null,
  auc?: number | null,
  experimentID?: string | null,
  frequency?: number | null,
  fwhm?: number | null,
  kurtosis?: number | null,
  peakCounts?: number | null,
  resultID: string,
  skewness?: number | null,
  snr?: number | null,
  timeGenerated?: string | null,
};

export type UpdateInstitutionInput = {
  institutionAddress?: string | null,
  institutionID: string,
  institutionName?: string | null,
  institutionTaxNumber?: string | null,
};

export type UpdatePatientInput = {
  firstName?: string | null,
  lastName?: string | null,
  patientID: string,
};

export type UpdateReportInput = {
  experimentID?: string | null,
  path?: string | null,
  reportID: string,
  resultID?: string | null,
  timeGenerated?: string | null,
};

export type UpdateSignalInput = {
  experimentID: string,
  filename?: string | null,
  path?: string | null,
  patientID?: string | null,
  status?: string | null,
  uploadTime?: string | null,
  userID?: string | null,
};

export type UpdateUserInput = {
  mail?: string | null,
  passwordHash?: string | null,
  role?: string | null,
  userID: string,
  username?: string | null,
};

export type UpdateUserInstitutionInput = {
  institutionID: string,
  userID: string,
};

export type UpdateUserPatientInput = {
  patientID: string,
  userID: string,
};

export type ModelSubscriptionExperimentLogsFilterInput = {
  and?: Array< ModelSubscriptionExperimentLogsFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  experimentID?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  logID?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionExperimentLogsFilterInput | null > | null,
  outputs?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFeaturesFilterInput = {
  amplitude?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionFeaturesFilterInput | null > | null,
  auc?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  experimentID?: ModelSubscriptionIDInput | null,
  frequency?: ModelSubscriptionFloatInput | null,
  fwhm?: ModelSubscriptionFloatInput | null,
  id?: ModelSubscriptionIDInput | null,
  kurtosis?: ModelSubscriptionFloatInput | null,
  or?: Array< ModelSubscriptionFeaturesFilterInput | null > | null,
  peakCounts?: ModelSubscriptionIntInput | null,
  resultID?: ModelSubscriptionIDInput | null,
  skewness?: ModelSubscriptionFloatInput | null,
  snr?: ModelSubscriptionFloatInput | null,
  timeGenerated?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionInstitutionFilterInput = {
  and?: Array< ModelSubscriptionInstitutionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  institutionAddress?: ModelSubscriptionStringInput | null,
  institutionID?: ModelSubscriptionIDInput | null,
  institutionName?: ModelSubscriptionStringInput | null,
  institutionTaxNumber?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionInstitutionFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPatientFilterInput = {
  and?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPatientFilterInput | null > | null,
  patientID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionReportFilterInput = {
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  experimentID?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
  path?: ModelSubscriptionStringInput | null,
  reportID?: ModelSubscriptionIDInput | null,
  resultID?: ModelSubscriptionIDInput | null,
  timeGenerated?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSignalFilterInput = {
  and?: Array< ModelSubscriptionSignalFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  experimentID?: ModelSubscriptionIDInput | null,
  filename?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionSignalFilterInput | null > | null,
  path?: ModelSubscriptionStringInput | null,
  patientID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  uploadTime?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  mail?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  passwordHash?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserInstitutionFilterInput = {
  and?: Array< ModelSubscriptionUserInstitutionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  institutionID?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserInstitutionFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserPatientFilterInput = {
  and?: Array< ModelSubscriptionUserPatientFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserPatientFilterInput | null > | null,
  patientID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
};

export type GetExperimentLogsQueryVariables = {
  logID: string,
};

export type GetExperimentLogsQuery = {
  getExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetFeaturesQueryVariables = {
  resultID: string,
};

export type GetFeaturesQuery = {
  getFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type GetInstitutionQueryVariables = {
  institutionID: string,
};

export type GetInstitutionQuery = {
  getInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetPatientQueryVariables = {
  patientID: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetReportQueryVariables = {
  reportID: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type GetSignalQueryVariables = {
  experimentID: string,
};

export type GetSignalQuery = {
  getSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type GetUserQueryVariables = {
  userID: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type GetUserInstitutionQueryVariables = {
  institutionID: string,
  userID: string,
};

export type GetUserInstitutionQuery = {
  getUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type GetUserPatientQueryVariables = {
  patientID: string,
  userID: string,
};

export type GetUserPatientQuery = {
  getUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type ListExperimentLogsQueryVariables = {
  filter?: ModelExperimentLogsFilterInput | null,
  limit?: number | null,
  logID?: string | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListExperimentLogsQuery = {
  listExperimentLogs?:  {
    __typename: "ModelExperimentLogsConnection",
    items:  Array< {
      __typename: "ExperimentLogs",
      createdAt: string,
      experimentID: string,
      logID: string,
      outputs?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeaturesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  resultID?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFeaturesQuery = {
  listFeatures?:  {
    __typename: "ModelFeaturesConnection",
    items:  Array< {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInstitutionsQueryVariables = {
  filter?: ModelInstitutionFilterInput | null,
  institutionID?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInstitutionsQuery = {
  listInstitutions?:  {
    __typename: "ModelInstitutionConnection",
    items:  Array< {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  patientID?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items:  Array< {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  reportID?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      createdAt: string,
      experimentID: string,
      path?: string | null,
      reportID: string,
      resultID?: string | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSignalsQueryVariables = {
  experimentID?: string | null,
  filter?: ModelSignalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSignalsQuery = {
  listSignals?:  {
    __typename: "ModelSignalConnection",
    items:  Array< {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserInstitutionsQueryVariables = {
  filter?: ModelUserInstitutionFilterInput | null,
  institutionID?: ModelIDKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userID?: string | null,
};

export type ListUserInstitutionsQuery = {
  listUserInstitutions?:  {
    __typename: "ModelUserInstitutionConnection",
    items:  Array< {
      __typename: "UserInstitution",
      createdAt: string,
      institutionID: string,
      updatedAt: string,
      userID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserPatientsQueryVariables = {
  filter?: ModelUserPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  patientID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  userID?: string | null,
};

export type ListUserPatientsQuery = {
  listUserPatients?:  {
    __typename: "ModelUserPatientConnection",
    items:  Array< {
      __typename: "UserPatient",
      createdAt: string,
      patientID: string,
      updatedAt: string,
      userID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userID?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateExperimentLogsMutationVariables = {
  condition?: ModelExperimentLogsConditionInput | null,
  input: CreateExperimentLogsInput,
};

export type CreateExperimentLogsMutation = {
  createExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateFeaturesMutationVariables = {
  condition?: ModelFeaturesConditionInput | null,
  input: CreateFeaturesInput,
};

export type CreateFeaturesMutation = {
  createFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateInstitutionMutationVariables = {
  condition?: ModelInstitutionConditionInput | null,
  input: CreateInstitutionInput,
};

export type CreateInstitutionMutation = {
  createInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePatientMutationVariables = {
  condition?: ModelPatientConditionInput | null,
  input: CreatePatientInput,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateReportMutationVariables = {
  condition?: ModelReportConditionInput | null,
  input: CreateReportInput,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateSignalMutationVariables = {
  condition?: ModelSignalConditionInput | null,
  input: CreateSignalInput,
};

export type CreateSignalMutation = {
  createSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type CreateUserInstitutionMutationVariables = {
  condition?: ModelUserInstitutionConditionInput | null,
  input: CreateUserInstitutionInput,
};

export type CreateUserInstitutionMutation = {
  createUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type CreateUserPatientMutationVariables = {
  condition?: ModelUserPatientConditionInput | null,
  input: CreateUserPatientInput,
};

export type CreateUserPatientMutation = {
  createUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type DeleteExperimentLogsMutationVariables = {
  condition?: ModelExperimentLogsConditionInput | null,
  input: DeleteExperimentLogsInput,
};

export type DeleteExperimentLogsMutation = {
  deleteExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteFeaturesMutationVariables = {
  condition?: ModelFeaturesConditionInput | null,
  input: DeleteFeaturesInput,
};

export type DeleteFeaturesMutation = {
  deleteFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteInstitutionMutationVariables = {
  condition?: ModelInstitutionConditionInput | null,
  input: DeleteInstitutionInput,
};

export type DeleteInstitutionMutation = {
  deleteInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePatientMutationVariables = {
  condition?: ModelPatientConditionInput | null,
  input: DeletePatientInput,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteReportMutationVariables = {
  condition?: ModelReportConditionInput | null,
  input: DeleteReportInput,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteSignalMutationVariables = {
  condition?: ModelSignalConditionInput | null,
  input: DeleteSignalInput,
};

export type DeleteSignalMutation = {
  deleteSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type DeleteUserInstitutionMutationVariables = {
  condition?: ModelUserInstitutionConditionInput | null,
  input: DeleteUserInstitutionInput,
};

export type DeleteUserInstitutionMutation = {
  deleteUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type DeleteUserPatientMutationVariables = {
  condition?: ModelUserPatientConditionInput | null,
  input: DeleteUserPatientInput,
};

export type DeleteUserPatientMutation = {
  deleteUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type UpdateExperimentLogsMutationVariables = {
  condition?: ModelExperimentLogsConditionInput | null,
  input: UpdateExperimentLogsInput,
};

export type UpdateExperimentLogsMutation = {
  updateExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateFeaturesMutationVariables = {
  condition?: ModelFeaturesConditionInput | null,
  input: UpdateFeaturesInput,
};

export type UpdateFeaturesMutation = {
  updateFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateInstitutionMutationVariables = {
  condition?: ModelInstitutionConditionInput | null,
  input: UpdateInstitutionInput,
};

export type UpdateInstitutionMutation = {
  updateInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePatientMutationVariables = {
  condition?: ModelPatientConditionInput | null,
  input: UpdatePatientInput,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateReportMutationVariables = {
  condition?: ModelReportConditionInput | null,
  input: UpdateReportInput,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateSignalMutationVariables = {
  condition?: ModelSignalConditionInput | null,
  input: UpdateSignalInput,
};

export type UpdateSignalMutation = {
  updateSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type UpdateUserInstitutionMutationVariables = {
  condition?: ModelUserInstitutionConditionInput | null,
  input: UpdateUserInstitutionInput,
};

export type UpdateUserInstitutionMutation = {
  updateUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type UpdateUserPatientMutationVariables = {
  condition?: ModelUserPatientConditionInput | null,
  input: UpdateUserPatientInput,
};

export type UpdateUserPatientMutation = {
  updateUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnCreateExperimentLogsSubscriptionVariables = {
  filter?: ModelSubscriptionExperimentLogsFilterInput | null,
};

export type OnCreateExperimentLogsSubscription = {
  onCreateExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateFeaturesSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturesFilterInput | null,
};

export type OnCreateFeaturesSubscription = {
  onCreateFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnCreateInstitutionSubscription = {
  onCreateInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSignalSubscriptionVariables = {
  filter?: ModelSubscriptionSignalFilterInput | null,
};

export type OnCreateSignalSubscription = {
  onCreateSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type OnCreateUserInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionUserInstitutionFilterInput | null,
};

export type OnCreateUserInstitutionSubscription = {
  onCreateUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnCreateUserPatientSubscriptionVariables = {
  filter?: ModelSubscriptionUserPatientFilterInput | null,
};

export type OnCreateUserPatientSubscription = {
  onCreateUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnDeleteExperimentLogsSubscriptionVariables = {
  filter?: ModelSubscriptionExperimentLogsFilterInput | null,
};

export type OnDeleteExperimentLogsSubscription = {
  onDeleteExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeaturesSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturesFilterInput | null,
};

export type OnDeleteFeaturesSubscription = {
  onDeleteFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnDeleteInstitutionSubscription = {
  onDeleteInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSignalSubscriptionVariables = {
  filter?: ModelSubscriptionSignalFilterInput | null,
};

export type OnDeleteSignalSubscription = {
  onDeleteSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type OnDeleteUserInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionUserInstitutionFilterInput | null,
};

export type OnDeleteUserInstitutionSubscription = {
  onDeleteUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnDeleteUserPatientSubscriptionVariables = {
  filter?: ModelSubscriptionUserPatientFilterInput | null,
};

export type OnDeleteUserPatientSubscription = {
  onDeleteUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnUpdateExperimentLogsSubscriptionVariables = {
  filter?: ModelSubscriptionExperimentLogsFilterInput | null,
};

export type OnUpdateExperimentLogsSubscription = {
  onUpdateExperimentLogs?:  {
    __typename: "ExperimentLogs",
    createdAt: string,
    experimentID: string,
    logID: string,
    outputs?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeaturesSubscriptionVariables = {
  filter?: ModelSubscriptionFeaturesFilterInput | null,
};

export type OnUpdateFeaturesSubscription = {
  onUpdateFeatures?:  {
    __typename: "Features",
    amplitude?: number | null,
    auc?: number | null,
    createdAt: string,
    experimentID: string,
    frequency?: number | null,
    fwhm?: number | null,
    kurtosis?: number | null,
    peakCounts?: number | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    resultID: string,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    skewness?: number | null,
    snr?: number | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnUpdateInstitutionSubscription = {
  onUpdateInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    institutionAddress?: string | null,
    institutionID: string,
    institutionName?: string | null,
    institutionTaxNumber?: string | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePatientSubscriptionVariables = {
  filter?: ModelSubscriptionPatientFilterInput | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    createdAt: string,
    firstName?: string | null,
    lastName?: string | null,
    patientID: string,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "Features",
      amplitude?: number | null,
      auc?: number | null,
      createdAt: string,
      experimentID: string,
      frequency?: number | null,
      fwhm?: number | null,
      kurtosis?: number | null,
      peakCounts?: number | null,
      resultID: string,
      skewness?: number | null,
      snr?: number | null,
      timeGenerated?: string | null,
      updatedAt: string,
    } | null,
    path?: string | null,
    reportID: string,
    resultID?: string | null,
    signal?:  {
      __typename: "Signal",
      createdAt: string,
      experimentID: string,
      filename?: string | null,
      path?: string | null,
      patientID: string,
      status?: string | null,
      updatedAt: string,
      uploadTime?: string | null,
      userID: string,
    } | null,
    timeGenerated?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSignalSubscriptionVariables = {
  filter?: ModelSubscriptionSignalFilterInput | null,
};

export type OnUpdateSignalSubscription = {
  onUpdateSignal?:  {
    __typename: "Signal",
    createdAt: string,
    experimentID: string,
    features?:  {
      __typename: "ModelFeaturesConnection",
      nextToken?: string | null,
    } | null,
    filename?: string | null,
    logs?:  {
      __typename: "ModelExperimentLogsConnection",
      nextToken?: string | null,
    } | null,
    path?: string | null,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    status?: string | null,
    updatedAt: string,
    uploadTime?: string | null,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    institutions?:  {
      __typename: "ModelUserInstitutionConnection",
      nextToken?: string | null,
    } | null,
    mail?: string | null,
    passwordHash?: string | null,
    patients?:  {
      __typename: "ModelUserPatientConnection",
      nextToken?: string | null,
    } | null,
    role?: string | null,
    signals?:  {
      __typename: "ModelSignalConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    userID: string,
    username?: string | null,
  } | null,
};

export type OnUpdateUserInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionUserInstitutionFilterInput | null,
};

export type OnUpdateUserInstitutionSubscription = {
  onUpdateUserInstitution?:  {
    __typename: "UserInstitution",
    createdAt: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      institutionAddress?: string | null,
      institutionID: string,
      institutionName?: string | null,
      institutionTaxNumber?: string | null,
      updatedAt: string,
    } | null,
    institutionID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};

export type OnUpdateUserPatientSubscriptionVariables = {
  filter?: ModelSubscriptionUserPatientFilterInput | null,
};

export type OnUpdateUserPatientSubscription = {
  onUpdateUserPatient?:  {
    __typename: "UserPatient",
    createdAt: string,
    patient?:  {
      __typename: "Patient",
      createdAt: string,
      firstName?: string | null,
      lastName?: string | null,
      patientID: string,
      updatedAt: string,
    } | null,
    patientID: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      mail?: string | null,
      passwordHash?: string | null,
      role?: string | null,
      updatedAt: string,
      userID: string,
      username?: string | null,
    } | null,
    userID: string,
  } | null,
};
