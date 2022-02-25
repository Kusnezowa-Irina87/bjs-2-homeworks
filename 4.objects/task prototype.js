function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks.push(marks); // не ясно, как быть, если оценки уже были
  }
}

Student.prototype.getAverage = function () {
  if(this.marks !== undefined && this.marks.length !== 0) {
    let sum = this['marks'].reduce((acc, element) => acc + element, 0);
    return sum/this['marks'].length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}