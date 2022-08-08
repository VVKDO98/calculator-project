//Generation of the calculator
const calculator = `
    <main class="calculator">
        <div class="calculator__top">
            <span class="calc__result"></span>
        </div>
        <div class="calculator__bot">
          <div class="bot__row">
              <span data-key="103" class="calc__numb">7</span>
              <span data-key="104" class="calc__numb">8</span>
              <span data-key="105" class="calc__numb">9</span>
              <span data-key="111" class="calc__numb calc__numb--op">/</span>
          </div>
          <div class="bot__row">
              <span data-key="100" class="calc__numb">4</span>
              <span data-key="101" class="calc__numb">5</span>
              <span data-key="102" class="calc__numb">6</span>
              <span data-key="106" class="calc__numb calc__numb--op">*</span>
          </div>
          <div class="bot__row">
              <span data-key="97" class="calc__numb">1</span>
              <span data-key="98" class="calc__numb">2</span>
              <span data-key="99" class="calc__numb">3</span>
              <span data-key="109" class="calc__numb calc__numb--op">-</span>
          </div>
          <div class="bot__row">
              <span data-key="96" class="calc__numb">0</span>
              <span data-key="110" class="calc__numb">.</span>
              <span data-key="8" class="calc__numb calc__numb--ac">AC</span>
              <span data-key="107" class="calc__numb calc__numb--op">+</span>
          </div>
          <div class="bot__row">
              <span data-key="13" class="calc__numb calc__numb--equ">=</span>
          </div>
        </div>
    </main>`;
//Insert the calculator
document.querySelector("body").insertAdjacentHTML("afterbegin", calculator);

//Get const
const touches = [...document.querySelectorAll(".calc__numb")];
const listKeycode = touches.map((touche) => touche.dataset.key);
const screenResult = document.querySelector(".calc__result");

//Event key down and click on the calculator
document.addEventListener("keydown", (e) => {
  const value = e.keyCode.toString();
  calculate(value);
});

document.addEventListener("click", (e) => {
  const value = e.target.dataset.key;
  calculate(value);
});

//Function that calculate
const calculate = (value) => {
  if (listKeycode.includes(value)) {
    switch (value) {
      case "8":
        screenResult.textContent = "";
        break;
      case "13":
        const computeResult = (str) => {
          return Function("return " + str)();
        };
        screenResult.textContent = computeResult(screenResult.textContent);
        break;
      default:
        const indexKeycode = listKeycode.indexOf(value);
        const touche = touches[indexKeycode];
        screenResult.textContent += touche.innerHTML;
    }
  }
};

//If there is an error
window.addEventListener("error", (e) => {
  alert("Something wrong : " + e.message);
});

//Darkmode
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
