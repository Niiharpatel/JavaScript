// ================== Lexical Scope =======================

function outer() {
  let name = "Nihar";

  function inner() {
    let age = 24;
    console.log("name:", name);
  }
  inner();

  console.log("age:", age);
}
outer();

// ================== Closure =======================
