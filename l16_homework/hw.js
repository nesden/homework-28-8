// try {
//     alert(`Hello world`);
//     lalala
//     alert(`My name is John`);
// } catch {
//     alert(`Error has occurred`)
// }
//will go to error on second row since lalala is a reference error

//2
// try {
//     {{{{{{{{{{{
//     } catch {
//     alert('Error has occurred')
//     }
//syntax error and wont arrive to the alert since  it stops at the error. it isnt sure why the catch is there

//3
// let json = '{ "age" : 30 }';
//  try {
//  let user = JSON.parse(json);
//  alert(user.name);
//  } catch (err) {
//  alert("Error has occurred")
//  }
//returns alert of undefined 



//3b
// let json = '{ "age" : 30 }';
// try {
//     let user = JSON.parse(json);
//     if (user[name] == undefined) {
//         throw new Error("user.name does not exist");

//     }

// } catch (err) {
//     alert(err.message)
// }

//ex4


// const p1={
//     id:1234567,
//     name:"jonathan",
//     lastName:"joestar",
//     age:17,
//     grades:[82,79,95,78]
// }
// const p2={
//     id:2563418,
//     name:"yoav",
//     lastName:"meshih",
//     age:42,
//     grades:[82,79,105,78]
// }
// const p3={
//     id:1234567,
//     name:"miko",
//     lastName:"biko",
//     age:17,
//     grades:[82,23,64,78]
// }

// const p4={
//     id:78155156,
//     name:"jinko",
//     lastName:"minkp",
//     age:"money",
//     grades:[82,79,95,78]
// }


class Person {
    constructor(id, name, lastName, age, grades) {
        this.id = id
        this.name = name
        this.lastName = lastName
        this.age = age
        this.grades = grades
    }
}

const p1 = new Person(1234567, "jonathan", "joestar", 17, [82, 79, 95, 78])
const p2 = new Person(2563418, "yoav", "meshih", 42, [82, 79, 105, 78])
const p3 = new Person(1234567, "miko", "biko", 17, [82, 23, 64, 78])
const p4 = new Person(78155156, "jinko", "mniko", "money", [82, 79, 95, 78])

const persArr = [p1, p2, p3, p4]
function pupils(persArr) {

    const ids = []

    try {


        for (let i = 0; i < persArr.length; i++) {
            // if (typeof (persArr[i].age) != "number") {
            //     throw new Error("error:the age of " + persArr[i].name + " isnt a number");

            // }

            // if (ids.includes(persArr[i].id)) {
            //     throw new Error(`error the id of ${persArr[i].name} has already appeared `);

            // }
            // ids.push(persArr[i].id)
            //tried to do it all in one try catch but i got only one error. ven if there were 3 errors
            for (let j = 0; j < persArr[i].grades.length; j++) {
                if (persArr[i].grades[j] < 0 || persArr[i].grades[j] > 100) {
                    throw new Error(`error the grade of ${persArr[i].name} is invalid`);

                }

            }

        }



    } catch (error) {

        console.log(error.message);
    }
    try {

        for (let i = 0; i < persArr.length; i++) {
            if (ids.includes(persArr[i].id)) {
                throw new Error(`error the id of ${persArr[i].name} has already appeared `);

            }
            ids.push(persArr[i].id)
        }
    } catch (error) {
        console.log(error.message);
    }
    try {

        for (let i = 0; i < persArr.length; i++) {
            if (typeof (persArr[i].age) != "number") {
                throw new Error("error:the age of " + persArr[i].name + " isnt a number");

            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

pupils(persArr)

//arrow 
//1
const add = (a, b) => a + b;
console.log(add(5, 4));
//2
const alerting = () => { alert("cheeseburegr") };
alerting();
//3

const x4 = (x) => x + 1
console.log(x4(5));
//4

//should tell 25 twice in my opinion
function Shimi() {
    this.name = 'Jack',
        this.age = 25,
        this.sayName = function () {
            console.log(this.age);
            let innerFunc = () => {
                console.log(this.age);
            }
            innerFunc();
        }
}
const x = new Shimi();
x.sayName()