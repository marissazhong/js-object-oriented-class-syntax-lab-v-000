class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  veto() {console.log(`No, I must disagree`)};
  veto() {console.log(`No, I must disagree`)};
  veto() {console.log(`No, I must disagree`)};
  veto() {console.log(`No, I must disagree`)};

  sayHi() {console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)};
}
