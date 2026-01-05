/* ================= BASIC STYLE ================= */
document.body.style.fontFamily = "Arial";
document.body.style.padding = "20px";

/* ================= HEADER ================= */
const header = document.createElement("header");
header.innerHTML = `
<h1>JavaScript Educational Website</h1>
<p>Name: Anas Abdirizak Mohamed | ID: CS1500926</p>
<nav>
  <a href="#ch7">Chapter 7</a> |
  <a href="#ch8">Chapter 8</a> |
  <a href="#ch9">Chapter 9</a>
</nav>
<hr>
`;
document.body.appendChild(header);

/* =================================================
   CHAPTER 7 – OBJECTS 
================================================= */
const ch7 = document.createElement("section");
ch7.id = "ch7";
ch7.innerHTML = "<h2>Chapter 7: JavaScript Objects</h2>";
document.body.appendChild(ch7);

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "1fr 1fr";
grid.style.gap = "10px";
ch7.appendChild(grid);

function addCh7(title, fn) {
  const box = document.createElement("div");
  box.style.border = "1px solid #ccc";
  box.style.padding = "10px";
  box.style.background = "white";

  const btn = document.createElement("button");
  btn.textContent = title;

  const out = document.createElement("pre");
  out.style.background = "#eee";
  out.style.padding = "6px";

  btn.addEventListener("click", () => {
    out.textContent = fn();
  });

  box.append(btn, out);
  grid.appendChild(box);
}

/* 16 OBJECT EXAMPLES */
addCh7("Object Literal", () => JSON.stringify({name:"Anas", age:22},null,2));
addCh7("Dot Access", () => ({x:10}).x);
addCh7("Bracket Access", () => ({y:20})["y"]);
addCh7("Add Property", () => {let o={};o.a=1;return JSON.stringify(o)});
addCh7("Delete Property", () => {let o={a:1,b:2};delete o.b;return JSON.stringify(o)});
addCh7("Object Method", () => ({hi(){return "Hello"}}).hi());
addCh7("this keyword", () => ({v:5,show(){return this.v}}).show());
addCh7("Constructor", () => {function A(n){this.n=n}return new A("JS").n});
addCh7("Class", () => {class B{constructor(x){this.x=x}}return new B(9).x});
addCh7("for...in", () => {let o={a:1,b:2},t="";for(let k in o)t+=k+" ";return t});
addCh7("Object.keys()", () => Object.keys({a:1,b:2}));
addCh7("Object.values()", () => Object.values({a:1,b:2}));
addCh7("Object.entries()", () => JSON.stringify(Object.entries({a:1})));
addCh7("JSON.stringify()", () => JSON.stringify({x:1}));
addCh7("JSON.parse()", () => JSON.parse('{"a":5}').a);
addCh7("Property in Object", () => "a" in {a:1});


/* =================================================
   CHAPTER 8 – DOM MANIPULATION
================================================= */
const ch8 = document.createElement("section");
ch8.id = "ch8";
ch8.innerHTML = `<h2>Chapter 8: DOM Manipulation</h2>`;
document.body.appendChild(ch8);

/* Paragraph & Boxes */
const p8 = document.createElement("p");
p8.id = "content8";
p8.innerText = "Chapter 8 paragraph";

const box1 = document.createElement("p");
box1.className = "box8";
box1.innerText = "Box One";

const box2 = document.createElement("p");
box2.className = "box8";
box2.innerText = "Box Two";

const box3 = document.createElement("p");
box3.className = "box8";
box3.innerText = "Box Three";

ch8.append(p8, box1, box2, box3);

/* Buttons */
const btnId = document.createElement("button");
btnId.innerText = "By ID";

const btnClass = document.createElement("button");
btnClass.innerText = "By Class";

const btnTag = document.createElement("button");
btnTag.innerText = "By Tag";

ch8.append(btnId, btnClass, btnTag);

/* Events */
btnId.onclick = () => {
  document.getElementById("content8").innerText = "Changed by ID";
};

btnClass.onclick = () => {
  document.getElementsByClassName("box8")[0].innerText = "Changed by Class";
};

btnTag.onclick = () => {
  document.getElementsByTagName("p")[0].innerText = "Changed by Tag";
};

/* Create & Append */
const appendBox = document.createElement("div");
appendBox.id = "appendBox";
appendBox.innerHTML = "<p>Existing paragraph</p>";

const addBtn = document.createElement("button");
addBtn.innerText = "Add Paragraph";

ch8.append(appendBox, addBtn);

addBtn.onclick = () => {
  const p = document.createElement("p");
  p.innerText = "New Paragraph Added!";
  appendBox.appendChild(p);
};

/* Change Style */
const stylePara = document.createElement("p");
stylePara.id = "stylePara";
stylePara.innerText = "This paragraph will change style";

const styleBtn = document.createElement("button");
styleBtn.innerText = "Change Style";

ch8.append(stylePara, styleBtn);

styleBtn.onclick = () => {
  stylePara.style.color = "white";
  stylePara.style.backgroundColor = "green";
  stylePara.style.fontWeight = "bold";
  stylePara.style.padding = "5px";
};

/* =================================================
   CHAPTER 9 – EVENTS (UPDATE: MOUSE EVENTS ADDED)
================================================= */
const ch9 = document.createElement("section");
ch9.id = "ch9";
ch9.innerHTML = `<h2>Chapter 9: JavaScript Events</h2>`;
document.body.appendChild(ch9);

/* ---------------- Click Events ---------------- */
const clickTitle = document.createElement("h3");
clickTitle.innerText = "Click Events";

const clickBtn = document.createElement("button");
clickBtn.innerText = "Click Me";
const clickRes = document.createElement("p");

clickBtn.onclick = () => {
  clickRes.innerText = "Button Clicked";
};

ch9.append(clickTitle, clickBtn, clickRes);

/* ---------------- Double Click Events ---------------- */
const dblTitle = document.createElement("h3");
dblTitle.innerText = "Double Click Events";

const dblText = document.createElement("p");
dblText.innerText = "Double-click this text";
const dblRes = document.createElement("p");

dblText.ondblclick = () => {
  dblRes.innerText = "Text Double Clicked!";
};

ch9.append(dblTitle, dblText, dblRes);

/* ---------------- Input Events ---------------- */
const inputTitle = document.createElement("h3");
inputTitle.innerText = "Input Events";

const input = document.createElement("input");
input.placeholder = "Type here";
const inputRes = document.createElement("p");

input.oninput = () => {
  inputRes.innerText = "You typed: " + input.value;
};

ch9.append(inputTitle, input, inputRes);

/* ---------------- Focus & Blur ---------------- */
const focusTitle = document.createElement("h3");
focusTitle.innerText = "Focus & Blur Events";

const focusInput = document.createElement("input");
focusInput.placeholder = "Focus here";
const focusRes = document.createElement("p");

focusInput.onfocus = () => focusRes.innerText = "Input Focused";
focusInput.onblur = () => focusRes.innerText = "Input Blurred";

ch9.append(focusTitle, focusInput, focusRes);

/* ---------------- Keyboard Events ---------------- */
const keyTitle = document.createElement("h3");
keyTitle.innerText = "Keyboard Events";

const keyInput = document.createElement("input");
keyInput.placeholder = "Press key";
const keyRes = document.createElement("p");

keyInput.onkeydown = e => keyRes.innerText = "Key Down: " + e.key;
keyInput.onkeyup = e => keyRes.innerText = "Key Up";

ch9.append(keyTitle, keyInput, keyRes);

/* ---------------- Form Events ---------------- */
const formTitle = document.createElement("h3");
formTitle.innerText = "Form Events";

const form = document.createElement("form");
const fname = document.createElement("input");
fname.placeholder = "Your name";
const submit = document.createElement("button");
submit.innerText = "Submit";
const formRes = document.createElement("p");

form.append(fname, submit);

form.onsubmit = e => {
  e.preventDefault();
  formRes.innerText = "Form Submitted: " + fname.value;
};

ch9.append(formTitle, form, formRes);

/* ---------------- Mouse Events ---------------- */
const mouseTitle = document.createElement("h3");
mouseTitle.innerText = "Mouse Events";

const mouseBox = document.createElement("div");
mouseBox.innerText = "Hover or click inside me";
mouseBox.style.width = "200px";
mouseBox.style.height = "100px";
mouseBox.style.border = "2px solid black";
mouseBox.style.marginTop = "10px";
mouseBox.style.padding = "10px";

const mouseRes = document.createElement("p");

mouseBox.onclick = () => mouseRes.innerText = "Mouse Clicked!";
mouseBox.onmousedown = () => mouseRes.innerText = "Mouse Down!";
mouseBox.onmouseup = () => mouseRes.innerText = "Mouse Up!";
mouseBox.onmouseenter = () => mouseRes.innerText = "Mouse Entered Box!";
mouseBox.onmouseleave = () => mouseRes.innerText = "Mouse Left Box!";
mouseBox.onmousemove = e => mouseRes.innerText = `Mouse Moving: (${e.offsetX}, ${e.offsetY})`;

ch9.append(mouseTitle, mouseBox, mouseRes);