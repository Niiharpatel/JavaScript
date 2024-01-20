// document.getElementById("1").addEventListener("click", () => {
//   alert("hello");
// });

// --------------------------------------

// document.getElementById("1").addEventListener("click", (e) => {
//   console.log(e);
// });

// ---------------- Event Propogation ------------

// document.getElementById("1").addEventListener(
//   "click",
//   (e) => {
//     // console.log(e.stopPropagation());
//     console.log(e.preventDefault());
//   },
//   true
// );

// -----------------------------------

// document.querySelector("#images").addEventListener("click", (e) => {
//   console.log(e.target.tagName);

//   if (e.target.tagName == "IMG") {
//     let removeIt = e.target.parentNode;
//     removeIt.remove();
//   }

// or...

//   removeIt.parentNode.removeChild(removeIt);
// });
