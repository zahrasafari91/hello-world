function multiply(a,b){
    return a * b;
};
console.log(multiply(5,10));



function showMassage(){
    return "You are here!";
};
console.log(showMassage());



function sum(num1,num2){
    return num1+ num2
};
console.log( "Sum is: ",
    sum(25,43));




const person = function() {
    const name = "zahra";
    const id = 123;
    const course = "Software Development";
    return name + " " + id + " " + course;
}
console.log(person());




const student = function (name, id, course) {
    this.fullName = name;
    this.studentId = id;
    this.studentCourse = course;
    return `Hi my name is ${this.fullName}, student number: ${this.studentId}.
    I am in ${this.studentCourse} Diploma Program.`;
}
student("John Doe", 313245, "Business Management");
// console.log(person("John Doe", 313245, "Business Management"));




function power(num){
    return num ^ num;
};
console.log(power(88));




function greeting(){
    return "Good morning!"
};
console.log(greeting());



const factorial = function fact(n){
    return n < 2 ? 1 : n * fact(n-1)
}
console.log(factorial(5));




