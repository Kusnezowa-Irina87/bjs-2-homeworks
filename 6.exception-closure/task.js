function parseCount(arg) {
  let result = Number.parseInt(arg);
  if(Number.isNaN(result)) {
    const err = new Error ('Невалидное значение');
    throw err;
  }
  return result;
}

function validateCount(a) {
  try {
    return parseCount(a);
  } catch (err) {
    return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if(a + b < c || a + c < b || b + c < a || a <= 0 || b <= 0 || c <= 0) {
      const error = new Error ("Треугольник с такими сторонами не существует");
      throw error;
    }
  }
  
  getPerimeter(){
    return this.a + this.b + this.c;
  }
  
  getArea() {
    let p = this.getPerimeter()/2;
    let res = p*(p - this.a)*(p - this.b)*(p - this.c);
    return Number((Math.sqrt(res)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
    };
  } 
}