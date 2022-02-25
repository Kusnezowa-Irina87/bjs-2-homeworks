class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  addMark(mark, subjectName) {
    if(mark > 0 && mark < 6) {
      if(this.subjects === undefined) {
        this.subjects = {[subjectName]: [mark]};
      } else if(subjectName in this.subjects) {
        this.subjects[subjectName].push(mark);
      } else {
        this.subjects[subjectName] = [mark];
      }
    } else {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
    }
  }

  addMarks(...marks) {
    if(this.marks === undefined) {
      this.marks = marks;
    } else {
      this.marks.push(marks); // не ясно, как быть, если оценки уже были
    }
  }

  getAverageBySubject(subjectName) {
    if(this.subjects !== undefined && subjectName in this.subjects) {
      let sum = this.subjects[subjectName].reduce((acc, element) => acc + element, 0);
      return sum/this.subjects[subjectName].length;
    } else {
      console.log('Несуществующий предмет');
    }
  }

  exclude(reason) {
    delete this.subjects;
    this.excluded = reason;
  }
}