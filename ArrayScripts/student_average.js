"use strict";
let students = [
    { name: "Mary", grades: [90, 96, 88, 81, 78] },
    { name: "Joseph", grades: [80, 90, 95, 88, 100] },
    { name: "Jane", grades: [95, 81, 92, 90, 99] },
    { name: "John", grades: [75, 80, 85, 90, 95] },
    { name: "Anne", grades: [85, 80, 85, 90, 95] },
];
function showAllStudentAverages(students) {
    for (let i = 0; i < students.length; i++) {
        let total = 0;
        for (let j = 0; j < students[i].grades.length; j++) {
            total += students[i].grades[j];
        }
        const average = total / students[i].grades.length;
        console.log(students[i].name, average);
    }

}
showAllStudentAverages(students)
