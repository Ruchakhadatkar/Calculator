const arr = [];
const answer = document.querySelector(".answer");

function num(x) {
  arr.push(x);
  const string = arr.join("");
  answer.innerHTML = string;
}

function calculate() {
  const string = arr.join("");
  const ans = eval(string);

  answer.innerHTML = ans;

  const previousEq = document.querySelector(".previousEq");
  previousEq.innerHTML = string;
}

function allClear() {
  answer.innerHTML = "";
  arr.splice(0, arr.length);
}

function del() {
  arr.pop();
  const string = arr.join("");
  answer.innerHTML = string;
}
