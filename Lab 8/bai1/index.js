"use strict";

var input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'), // clear button
    // Theo dõi kết quả đc hiển thị
    resultDisplayed = false;

// Xử lý khi nhấn chuột vào các số
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // lưu input str hiện tại và ký tự cuối của nó trong các biến - được sử dụng sau
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // Nếu kết quả không được hiển thị, chỉ cần tiếp tục thêm
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // Nếu kết quả hiện đang được hiển thị và người dùng nhấn một trong các dấu cộng trừ nhân chia
      // Tiếp tục thêm vào chuỗi cho thao tác tiếp theo
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // nếu kết quả hiện đang được hiển thị và người dùng nhấn số
      // Xóa chuỗi đầu vào và thêm đầu vào mới để bắt đầu task mới
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// Thêm trình xử lý nhấp chuột vào các số tư 0-9
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // lưu lại biến input string and ký tự cuối cùng của nó trong các biến sẽ đc sử dujgn sau
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // nếu nút đầu tiên được nhấn là cái nút điều khiển thì đừng làm gì
      console.log("enter a number first");
    } else {
      // chỉ cần thêm toán tử được nhấn vào đầu vào
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// Xử lý sự kiện cho nút kết quả
result.addEventListener("click", function() {

  // String đc xử lý
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// Xóa hết các input
clear.addEventListener("click", function() {
  input.innerHTML = "";
})