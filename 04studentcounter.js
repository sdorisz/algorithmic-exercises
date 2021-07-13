const students = [
    { nev: 'Theodor', kor: 3, edesseg: 2 },
    { nev: 'Paul', kor: 9.5, edesseg: 2 },
    { nev: 'Mark', kor: 12, edesseg: 5 },
    { nev: 'Peter', kor: 7, edesseg: 3 },
    { nev: 'Olaf', kor: 12, edesseg: 7 },
    { nev: 'George', kor: 10, edesseg: 1 }
  ];

let sum = 0;
for(let i =0; i <students.length; i ++){
   sum += students[i]["edesseg"];
}
console.log(sum)


let ageSum = 0;
for(let i =0; i <students.length; i ++){
    if(students[i]["edesseg"] <5){
        ageSum += students[i]['kor']
    }
 }
 console.log(ageSum)