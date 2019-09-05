const userData: {studentName: string, studentAge: number} = {
  studentName: 'Ann',
  studentAge: 27
};

// деструктивное присваивание ключей объекта в переменные с тем же именем
const {studentName, studentAge} = userData;
console.log(studentName, studentAge);

// деструктивное присваивание ключей объекта в переменные с происзвольным именем
const {studentName: nameOfStudent, studentAge: ageOfStudent} = userData;
console.log(nameOfStudent, ageOfStudent);
