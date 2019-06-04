let btnAC = document.getElementById('btn_AC');
let screen = document.getElementById('screen');
let btnEqual = document.getElementById('btn_equal');
let btnNumbers = document.getElementById('numbers');
let btnOperators = document.getElementById('operators');

btnAC.addEventListener('click', () => {
  screen.value = 0;
})

btnEqual.addEventListener('click', () => {
  let result = eval(screen.value);
  screen.value = result;
})

for (let index = 0; index < btnNumbers.children.length; index++) {
  const eachBtnNumbers = btnNumbers.children[index];
  eachBtnNumbers.addEventListener('click', () => {
    if (screen.value == 0) {
      screen.value = "";
    }
    screen.value += eachBtnNumbers.innerText;
  })
}

for (let index = 0; index < btnOperators.children.length - 1; index++) {
  const eachBtnOperators = btnOperators.children[index];
  eachBtnOperators.addEventListener('click', () => {
    let screenArr = screen.value.split("");
    let lastChar = screenArr[screenArr.length - 1];
    if (0 <= lastChar && lastChar <= 9) {
      screen.value += eachBtnOperators.innerText;
    } else {
      screenArr[screenArr.length - 1] = eachBtnOperators.innerText;
      let newValue = screenArr.join("");
      screen.value = newValue;
    }
  })
}
