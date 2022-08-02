window.addEventListener("load", (event) => {
  const calculator = `
    <main class="calculator">
        <div class="calculator__top">
            <span class="calc__result">0</span>
        </div>
        <div class="calculator__bot">
            <span data-key="103" class="calc__numb">7</span>
            <span data-key="98" class="calc__numb">8</span>
            <span data-key="105" class="calc__numb">9</span>
            <span data-key="111" class="calc__numb calc__numb--op">/</span>
            <span data-key="100" class="calc__numb">4</span>
            <span data-key="101" class="calc__numb">5</span>
            <span data-key="102" class="calc__numb">6</span>
            <span data-key="106" class="calc__numb calc__numb--op">x</span>
            <span data-key="97" class="calc__numb">1</span>
            <span data-key="98" class="calc__numb">2</span>
            <span data-key="99" class="calc__numb">3</span>
            <span data-key="109" class="calc__numb calc__numb--op">-</span>
            <span data-key="96" class="calc__numb">0</span>
            <span data-key="110" class="calc__numb">.</span>
            <span data-key="8" class="calc__numb calc__numb--ac">AC</span>
            <span data-key="107" class="calc__numb calc__numb--op">+</span>
            <span data-key="13" class="calc__numb calc__numb--equ">=</span>
        </div>
    </main>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", calculator);
});

const touches = [...document.querySelectorAll(".calc__numb")];
console.log(touches);
