/*
ESTRUTURAS DE REPETIÇÃO - FOR IN
*/ 

const students = {
    name:'marcus',
    age: 18,
    genre: 'male'
}

//console.log(students['name'])   ==  console.log(students.name)


for (let property in students) {
   console.log(students[property])
}

for (let property in students) {
    console.log(`${property} : ${students[property]}`)
 }
 
