// Function for form validation before submitting data
function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;

  if (name == "") {
    alert("Name is required");
    return false;
  }
  if (age == "") {
    alert("Age is required");
    return false;
  }
  if (email == "") {
    alert("Email is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid Email Address");
    return false;
  }
  return true;
}

// Function to show data from local storage
function showData() {
  var users;
  if (localStorage.getItem("users") == null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  var html = "";

  users.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Delete</button>  <button onclick="updateData(' +
      index +
      ')" class="btn btn-warning">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}

// Load all data when document or page loaded
document.onload = showData();

// Function to add data to local storage
function addData() {
  // If form is valid
  if (validateForm() == true) {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    var users;
    if (localStorage.getItem("users") == null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }
    users.push({
      name: name,
      age: age,
      email: email,
    });
    localStorage.setItem("users", JSON.stringify(users));
    showData();
    // Input fields are blank after adding data
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
  }
}

// Function to delete data from local storage
function deleteData(index) {
  var users;
  if (localStorage.getItem("users") == null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  showData();
}

// Function to update/edit data in local storage
function updateData(index) {
  // Submit button will hide & Update button will show for updating data in local storage
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  var users;
  if (localStorage.getItem("users") == null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users"));
  }

  document.getElementById("name").value = users[index].name;
  document.getElementById("age").value = users[index].age;
  document.getElementById("email").value = users[index].email;

  document.querySelector("#update").onclick = function () {
    if (validateForm() == true) {
      users[index].name = document.getElementById("name").value;
      users[index].age = document.getElementById("age").value;
      users[index].email = document.getElementById("email").value;

      localStorage.setItem("users", JSON.stringify(users));
      showData();

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("email").value = "";

      // Update button will hide & Submit button will show
      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  };
}
