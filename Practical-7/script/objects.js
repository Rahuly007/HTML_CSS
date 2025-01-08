function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const myFather = new Person("rahul","yadav",24,"red")

console.log(myFather.firstName)