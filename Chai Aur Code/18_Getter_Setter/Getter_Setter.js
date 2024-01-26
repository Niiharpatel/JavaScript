class user {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }
  get pass() {
    return `${this._pass} nihar`;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  set pass(value) {
    this._pass = value;
  }
}

const user2 = new user("Nihar@12.com", "abc");
console.log(user2.email);
