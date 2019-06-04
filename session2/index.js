// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// i += 2
// i = i + 2
// let len = 0;

// for (let i = 0; i < 500; i++) {
//   fd(len);
//   rt(90);
//   len += 5;
// }

// let n = prompt("Nhập số n: "); // 15
// let tong = 0;

// for (let i = 1; i <= n; i++) {
//   tong += i; // tong = tong + i;
// };

// console.log(tong);




// CONDITIONAL / BRANCH
// let age = prompt("Enter your age: ");

// if (age < 10) {
//   console.log("Baby");
// } 

// else if (age < 18) {
//   console.log("Teenager");
// }

// else if (age < 25) {
//   console.log("Tre trau");
// }

// else {
//   console.log("Adult");
// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let n = Math.floor(Math.random()*100 + 1);
// console.log(n);
// if (n < 30) {
//   console.log("Sunny");
// } else if (n < 70) {
//   console.log("Rainy");
// } else {
//   console.log("Cloudy");
// }

// let a = prompt("Nhập a: ");
// let b = prompt("Nhập b: ");
// let c = prompt("Nhập c: ");

// let delta = b**2 - 4*a*c

// if (delta < 0) {
//   console.log("Vô nghiệm");
// } else if (delta === 0) {
//   let x = -b / 2*a;
//   console.log("Nghiệm kép");
//   console.log(x);
// } else {
//   let x1 = (-b - delta**0.5) / (2*a);
//   let x2 = (-b + delta**0.5) / (2*a);
//   console.log("2 nghiệm phân biệt");
//   console.log(x1, x2);
// }

// rt(90);
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     color("red");
//   } else {
//     color("blue");
//   }
//   fd(10);
//   penup();
//   fd(10);
//   pendown();
// }

// let username = prompt("Enter username: ");

// if (username === "c4e") {
//   let password = prompt("Enter password: ");
//   if (password === "mindx") {
//     console.log("Welcome!");
//   } else {
//     console.log("Wrong password!");
//   }
// } else {
//   console.log("Wrong Username!")
// }

for (let index = 0; index < 3; index++) {
  if (index % 2 === 0) {
    console.log("*");
  } else {
    console.log("x");
  }
}