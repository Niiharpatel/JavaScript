class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const user2 = new user("Nihar");

// console.log(user2.createId());

class teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new teacher("Nihar", "i@i.com");
console.log(iphone.createId());
