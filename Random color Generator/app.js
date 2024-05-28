let getColor = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  console.log(randomNumber);
  let colorCode = "#" + randomNumber.toString(16);
  console.log(colorCode);
  document.body.style.backgroundColor = colorCode;
  document.getElementById("color-code").innerText = colorCode;
};

let btnClick = document.getElementById("click-btn");
btnClick.addEventListener("click", getColor);

getColor();
