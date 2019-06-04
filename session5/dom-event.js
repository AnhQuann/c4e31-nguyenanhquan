let h1 = document.getElementById('event-h1');

h1.addEventListener('click', () => {
  console.log('Mày vừa click vào tao!');
})

let menu = document.getElementById('menu');

let btnAddFood = document.getElementById('btnAddFood');

let inputAddFood = document.getElementById('typeFood');

let btnDeleteFood = document.getElementById('btnDeleteFood');

inputAddFood.addEventListener('keyup', (data) => {
  console.log(data.target.value);
})

btnAddFood.addEventListener('click', () => {
  let newFood = inputAddFood.value;
  menu.innerHTML += `
    <li>${newFood}</li>
  `
});

btnDeleteFood.addEventListener('click', () => {
  menu.lastElementChild.remove();
})