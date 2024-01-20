const addBtn = document.querySelector("#add"); //step 1..........

const updateLSData = () => {
  // step 10.......
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};

// step 3......
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmlData = `
    <div class="operation">
     <div class="edit"><i class="fas fa-edit"></i></div>
     <div class="delete"><i class="fas fa-trash-alt"></i></div>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>  
    <textarea class="${
      text ? "hidden" : ""
    }"  id="" cols="30" rows="10"></textarea>
    `;

  note.insertAdjacentHTML("afterbegin", htmlData);

  //getting reference  // step 5 ...
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  //delete note  step 6....
  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  //toggle edit button  step 8........
  textarea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    // step 7......
    mainDiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("change", (event) => {
    //step 9............
    const value = event.target.value;
    mainDiv.innerHTML = value;
    updateLSData(); // step 11.......
  });
  document.body.appendChild(note); // step 4....
};

// get data back from local storage  step 12........

const dataBack = JSON.parse(localStorage.getItem("notes"));

// if (notes) {
//   notes.forEach((ele) => {
//     addNewNote(ele);
//   });
// }

addBtn.addEventListener("click", () => addNewNote()); // step 2
