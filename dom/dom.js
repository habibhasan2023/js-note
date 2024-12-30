// let element = document.getElementById("hello");
// console.log(element)

//let className = document.getElementsByClassName("course");
// console.log(className)
// console.log(...className)

//const tagName = document.getElementsByTagName("li");
//console.log(tagName)

//for (let name of tagName) {
//   console.log(name)
// }

// const selector = document.querySelector("#hello");
//console.log(selector.innerHTML = "Best class")
//console.log(selector.innerText = "Best class")

// const selector = document.querySelectorAll("li");
// console.log(selector)

// selector.forEach((cuElem) => console.log(cuElem))

//=========================
//=========================
let inputElm = document.getElementById("inpt");

let btn = document.getElementById("btn");

let todo = document.getElementById("todo");

const addto = () => {
  //console.log(inputElm.value);
  //todo.textContent = inputElm.value;
  let pera = document.createElement("p");
  pera.textContent = inputElm.value;
  console.log(pera)
  todo.append(pera);
  inputElm.value = "";
}

btn.addEventListener("click", () => {
  addto()
})

todo.addEventListener("click", (event) => {
  console.log(event.target);
  const removeItem = event.target;
  removeItem.remove();
  console.log(removeItem)
})