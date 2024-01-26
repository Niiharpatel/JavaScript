function setUserName(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const newUser = new createUser("Nihar", "abc@abc.com", "234");
console.log("newUser:", newUser);
