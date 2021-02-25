let Students = [
  {
    name: "Maria",
    marks: [9, 4, 8, 10, 9],
  },
  {
    name: "Oleg",
    marks: [4, 10, 8, 10, 9],
  },
  {
    name: "Victor",
    marks: [3, 3, 4, 10, 4],
  },
  {
    name: "Ana",
    marks: [9, 5, 8, 10, 9],
  },
];

let average;
let count = Students.length;
for (let i = 0; i < count; i++) {
  let marks = Students[i]["marks"];
  let total = 0;
  for (let j = 0; j < marks.length; j++) {
    total += marks[j];
  }
  average = total / marks.length;
  Students[i].average = average;
  let msg = Students[i]["name"] + " has average mark: " + average;
  console.log(msg);
}
Students.sort((s1, s2) => s2.average - s1.average);
let topAvg = Students[0].average;
let topStudents = Students.filter((s) => s.average == topAvg)
  .map((s) => s.name)
  .join(", ");
console.log(`Top Students are ${topStudents} with mark ${topAvg}`);

Students.sort((s1, s2) => s1.average - s2.average);
let minAvg = Students[0].average;
let minStudents = Students.filter((s) => s.average == minAvg)
  .map((s) => s.name)
  .join(", ");
console.log(`Dounshifter Students are ${minStudents} with mark ${minAvg}`);

let restantStudents = Students.filter((s) => s.average < 5)
  .map((s) => s.name)
  .join(", ");
console.log(
  `Students with mark less then 5 are ${minStudents} with mark ${minAvg}`
);

let sortStudent = Students.sort((s1, s2) => s2.average - s1.average);
//console.dir(sortStudent)
sortStudent.forEach((element) => console.log(element));

