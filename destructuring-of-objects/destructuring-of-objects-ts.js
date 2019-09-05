var userData = {
    studentName: 'Ann',
    studentAge: 27
};
// деструктивное присваивание ключей объекта в переменные с тем же именем
var studentName = userData.studentName, studentAge = userData.studentAge;
console.log(studentName, studentAge);
// деструктивное присваивание ключей объекта в переменные с происзвольным именем
var nameOfStudent = userData.studentName, ageOfStudent = userData.studentAge;
console.log(nameOfStudent, ageOfStudent);
