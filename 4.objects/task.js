function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks){
    if('marks' in Student === false){
        delete this.marks;   
    } else {
        this.marks = marks;
    }
}

Student.prototype.getAverage = function (...marks) {
    if('marks' in Student === false || this.marks === 0){
        return 0;
    } else {
        marks.reduce((acc, item, index) => {
            let sum = acc + item;
            if (index === marks.length - 1){
                return sum / marks.length;
            }
            return sum;
        },0)}; 
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
