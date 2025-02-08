// Data Stucture
const studentDatabase = ["Partha", "Thirtha", "Joy", "Priti", "Tithi"];

// Algorithm for finding spacific user
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudent(studentDatabase, "Tithi");
