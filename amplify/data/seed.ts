import { a } from "@aws-amplify/backend";

// NOTE: We use 'any' for the dataClient parameter type to avoid complex type errors
// related to the generated client during local development.

// --- Utility function to generate a specific number of features ---
const generateFeatures = (patientID: string, count: number) => {
  const features = [];
  for (let i = 1; i <= count; i++) {
    features.push({
      featureID: `${patientID}-feat-${i}`,
      peakCounts: Math.floor(Math.random() * 10) + 3, // 3 to 12
      amplitude: parseFloat((Math.random() * 2).toFixed(2)), // 0.00 to 2.00
      auc: parseFloat((Math.random() * 5 + 1).toFixed(2)), // 1.00 to 6.00
      fwhm: parseFloat((Math.random() * 0.5 + 0.1).toFixed(2)), // 0.10 to 0.60
      frequency: parseFloat((Math.random() * 20 + 5).toFixed(2)), // 5.00 to 25.00
      snr: parseFloat((Math.random() * 20 + 10).toFixed(2)), // 10.00 to 30.00
      skewness: parseFloat((Math.random() * 2 - 1).toFixed(2)), // -1.00 to 1.00
      kurtosis: parseFloat((Math.random() * 3 + 1).toFixed(2)), // 1.00 to 4.00
      timeGenerated: new Date(Date.now() - (i * 3600000)).toISOString(), // Spaced out times
      patientID: patientID,
    });
  }
  return features;
};

export async function seed(dataClient: any) { // <-- Use 'any' for the parameter type
  console.log("Starting expanded data seeding...");

  // --- 1. Create Users (including 'zamarin') ---
  const users = [
    { userID: "user-admin-123", username: "adminUser", passwordHash: "hash-a" },
    { userID: "user-regular-456", username: "regularUser", passwordHash: "hash-b" },
    { userID: "user-zamarin-007", username: "zamarin", passwordHash: "hash-c" }, 
    { userID: "user-test-890", username: "testUser", passwordHash: "hash-d" },
  ];

  const createdUsers = new Map();
  for (const user of users) {
    const createdUser = await dataClient.models.User.create(user);
    createdUsers.set(user.username, createdUser);
  }
  console.log(`Created ${users.length} users.`);

  // --- 2. Define Patients and link them to Users (3-4 patients per user) ---
  const patientsData = [
    // Patients for adminUser
    { userID: createdUsers.get("adminUser")!.userID, patientID: "p-admin-01", firstName: "Admin", lastName: "Patient 1", featureCount: 4 },
    { userID: createdUsers.get("adminUser")!.userID, patientID: "p-admin-02", firstName: "Admin", lastName: "Patient 2", featureCount: 3 },
    
    // Patients for regularUser
    { userID: createdUsers.get("regularUser")!.userID, patientID: "p-regular-01", firstName: "Rico", lastName: "Patient 1", featureCount: 5 },
    { userID: createdUsers.get("regularUser")!.userID, patientID: "p-regular-02", firstName: "Lisa", lastName: "Patient 2", featureCount: 3 },
    { userID: createdUsers.get("regularUser")!.userID, patientID: "p-regular-03", firstName: "Mark", lastName: "Patient 3", featureCount: 4 },
    
    // Patients for zamarin (All data reflects the username)
    { userID: createdUsers.get("zamarin")!.userID, patientID: "p-zamarin-01", firstName: "Zamarin", lastName: "Patient Alpha", featureCount: 4 },
    { userID: createdUsers.get("zamarin")!.userID, patientID: "p-zamarin-02", firstName: "Zamarin", lastName: "Patient Beta", featureCount: 4 },
    { userID: createdUsers.get("zamarin")!.userID, patientID: "p-zamarin-03", firstName: "Zamarin", lastName: "Patient Gamma", featureCount: 4 },
    { userID: createdUsers.get("zamarin")!.userID, patientID: "p-zamarin-04", firstName: "Zamarin", lastName: "Patient Delta", featureCount: 4 },

    // Patients for testUser
    { userID: createdUsers.get("testUser")!.userID, patientID: "p-test-01", firstName: "Test", lastName: "Subject A", featureCount: 5 },
    { userID: createdUsers.get("testUser")!.userID, patientID: "p-test-02", firstName: "Test", lastName: "Subject B", featureCount: 3 },
  ];

  // --- 3. Create Patients and Collect all Features ---
  let allFeatures: any[] = [];
  for (const pData of patientsData) {
    // Create Patient record
    await dataClient.models.Patient.create({
      patientID: pData.patientID,
      firstName: pData.firstName,
      lastName: pData.lastName,
      userID: pData.userID,
    });
    
    // Generate features for this patient
    const newFeatures = generateFeatures(pData.patientID, pData.featureCount);
    allFeatures = allFeatures.concat(newFeatures);
  }
  console.log(`Created ${patientsData.length} patients.`);

  // --- 4. Create all Features ---
  for (const feature of allFeatures) {
    await dataClient.models.Feature.create(feature);
  }
  console.log(`Created ${allFeatures.length} features.`);
  console.log("Data seeding complete!");
}
