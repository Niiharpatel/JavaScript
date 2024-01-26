class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName is : ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const get = new teacher("Nihar", "abc@abc.com", "123");
get.addCourse();

const user2 = new user("Nihar");
user2.logMe();

console.log(get instanceof user);
