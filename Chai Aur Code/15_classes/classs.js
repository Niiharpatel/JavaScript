class User {
  constructor(username, email, password) {
    (this.username = username),
      (this.email = email),
      (this.password = password);
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  upperCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const another = new User("Nihar", "abc@abc.com", "123");
console.log("another:", another.encryptPassword());
console.log("another:", another.upperCase());
