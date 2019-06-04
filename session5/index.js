let h1 = document.getElementById('demo-h1');

h1.innerText = 'AHIHI';
let h2 = `<h2>Heading level 2</h2>`;

let body = document.getElementById('demo-body');
body.innerHTML += h2;

let p = document.getElementById('demo-paragraph');
p.remove();

let foodMenu = document.getElementById('menu');
foodMenu.innerHTML += 
  `
    <li>Miến</li>
    <li>Cháo</li>
  `
;
// const context = {
//   users: null,
// };

// window.onload = async () => {
//   const response = await fetch(
//     'https://reqres.in/api/users'
//     // {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",                                                                                                
//     //     "Access-Control-Origin": "*"
//     //   },
//     //   body: JSON.stringify({
//     //     name: "morpheus",
//     //     job: "leader",
//     //   })
//     // }
//   )
//   context.users = await response.json();
  
// }
