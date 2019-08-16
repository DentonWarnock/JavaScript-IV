class People {
  constructor(Attrs) {
    this.name = Attrs.name;
    this.age = Attrs.age;
    this.location = Attrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends People {
  constructor(Attrs) {
    super(Attrs);
    this.specialty = Attrs.specialty;
    this.favLanguage = Attrs.favLanguage;
    this.catchPhrase = Attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends People {
  constructor(Attrs) {
    super(Attrs);
    this.previousBackground = Attrs.previousBackground;
    this.className = Attrs.className;
    this.favSubjects = Attrs.favSubjects;
  }

  listsSubject() {
    this.favSubjects.forEach(subject => console.log(`${this.name}'s favorite subjects are ${subject}.`));  
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

class TeamLead extends Instructor {
  constructor(Attrs) {
    super(Attrs);
    this.gradClassName = Attrs.gradClassName;
    this.favInstructor = Attrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel} @channel standy times!`);
  }
  dubugsConsole(student, subject) {
    console.log(`${this.name} dubugs ${student.name}'s code on ${subject}.`);
  }
}

const pace = new Instructor({
  name: 'Pace',
  age: 32,
  location: 'Mesa',
  specialty: 'Video Games',
  favLanguage: 'Cambodian',
  catchPhrase: 'Automate finance!'
})
const nathan = new Instructor({
  name: 'Nathan',
  age: 27,
  location: 'Napa',
  specialty: 'teaching code',
  favLanguage: 'German',
  catchPhrase: 'Lamdbda Rocks!'
})
const albert = new Student({
  name: 'Albert',
  age: 21,
  location: 'Fresno',
  specialty: 'Math',
  favLanguage: 'English',
  catchPhrase: 'To Infinity and Beyond',
  previousBackground: 'Student, and math tutor',
  className: 'FSW24',
  favSubjects: ['CSS', 'JS', 'React']
})
const buzz = new Student({
  name: 'Buzz',
  age: 45,
  location: 'Earth',
  specialty: 'Space Travel',
  favLanguage: 'English',
  catchPhrase: 'To Infinity and Beyond',
  previousBackground: 'Astronaut',
  className: 'DS6',
  favSubjects: ['Python', 'Nanocomputing']
})
const steve = new TeamLead({
  name: 'Steve',
  age: 30,
  location: 'New York',
  specialty: 'Speed Eater',
  favLanguage: 'English',
  catchPhrase: "I never met a hot dog I didn't like!",
  gradClassName: 'CS5',
  favInstructor: 'Pace'
})
const rico = new TeamLead({
  name: 'Rico',
  age: 35,
  location: 'San Francsico',
  specialty: 'Surfing',
  favLanguage: 'Spanish',
  catchPhrase: "Hang Ten!",
  gradClassName: 'CS3',
  favInstructor: 'Nathan'
})

// Instructors
pace.speak();
pace.demo('Computer Science');
pace.grade(albert, 'Sprint Challenge JS');
pace.speak();
nathan.demo('Javascript');
nathan.grade(buzz, 'HTML basics');

// Students
albert.speak();
albert.listsSubject();
albert.PRAssignment("CSS");
albert.sprintChallenge('Javascript');
buzz.speak();
buzz.listsSubject();
buzz.PRAssignment("Python");
buzz.sprintChallenge('CS');

// Team Leads
steve.speak();
steve.demo('Responsive Design');
steve.grade(albert, 'CSS');
steve.standUp('WEB PT 9');
steve.dubugsConsole(albert, 'Javascript');
rico.speak();
rico.demo('Flexbox');
rico.grade(buzz, 'CSS');
rico.standUp('WEB PT 9 FRI');
rico.dubugsConsole(buzz, 'CSS');










