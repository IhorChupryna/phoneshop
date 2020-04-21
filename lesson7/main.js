// const btns = document.querySelectorAll(".btn");
// const addBtn = document.querySelector(".add");
// const list = document.querySelector(".list");

// addBtn.addEventListener("click", () => {
//   list.insertAdjacentHTML(
//     "beforeend",
//     `<li><button class="btn" clicker>CLICKER</button></li>`
//   );
// });

// list.addEventListener("click", (e) => {
//   const target = e.target;
//   if (target.matches("[clicker]")) {
//     console.log("clicked on btn");
//   }
// });

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("clicked");
//   });
// });

// class Model {
//   constructor() {
//     this.number = 0;
//   }

//   getNumber() {
//     return this.number;
//   }

//   increment(cb) {
//     this.number += 1;
//     cb(this.number);
//   }

//   decrement() {
//     this.number -= 1;
//   }
// }
// const model = new Model();
// class View {
//   constructor() {
//     this.counterEl = document.querySelector(".counter__number");
//     this.plusBtn = document.querySelector(".counter__btn--plus");
//     this.minusBtn = document.querySelector(".counter__btn--minus");
//   }

//   render(number) {
//     this.counterEl.innerHTML = number;
//   }

//   listenIncrement(cb) {
//     this.plusBtn.addEventListener("click", () => {
//       cb();
//     });
//   }
// }
// const view = new View();

// class Controller {
//   constructor() {
//     view.render(model.getNumber());
//     // view.listenIncrement(() => {
//     //   model.increment((number) => {
//     //     view.render(number);
//     //   });
//     // });
//     await listenIncrement();
//     const newNumber = await model.increment();
//     view.render(newNumber);
//   }
// }

// const controller = new Controller();

// const f1 = function (cb) {
// let a;
// setTimeout(() => {
//   a = 20;
//   cb(a);
// }, 1000);
// };

// f1((a) => {
//   console.log(a);
// });

// const prom1 = new Promise((resolve, reject) => {
//   let a;
//   setTimeout(() => {
//     a = 20;
//     resolve(a);
//   }, 1000);
// });

// const init = async function () {
//   // prom1.then((a) => {
//   //   console.log(a);
//   // });
//   const a = await prom1;
//   console.log(a);
// };

// init();

// const prom = new Promise((resolve, reject) => {
//   let a = 10;
//   setTimeout(() => {
//     a++;
//     resolve(a);
//   }, 500);
// });

// const f1 = function (cb) {
//   let a = 10;
//   setTimeout(() => {
//     a++;
//     cb(a);
//   }, 500);
// };

// // prom.then((a) => {
// //   console.log("promise", a);
// // });

// (async function () {
//   const a = await prom;
//   console.log("promise", a);
// })();

// f1((a) => {
//   console.log("cb", a);
// });

// (function () {
//   const observers = [];
//   const notify = function () {
//     observers.forEach((obs) => {
//       obs("sdfsdfsdf");
//     });
//   };
//   const subscribe = function (f) {
//     observers.push(f);
//   };

//   subscribe((a) => {
//     console.log("11111", a);
//   });

//   notify();
//   notify();
//   notify();
//   notify();
//   notify();
//   notify();
// })();

// function $(selector) {
//   const el = document.querySelector(selector);
//   return {
//     hide: function () {
//       el.style.display = "none";
//     },
//     show: function () {
//       el.style.display = "block";
//     },
//   };
// }

// $(".box").hide();
// $(".box").show();

// $(".box").hide();

// $(".clicker").click(() => {
//   // $(".box").toggle();
//   // $(".box").slideToggle(200);
//   $(".box").append(`<h1>sdfsdf</h1>`);
// });

// $(".list").on("click", ".btn", () => {
//   console.log("!!!!");
// });

// 1) Пример counter (mvc) все cb (колбек функции) переписать на промисы (new Promise)
// 2) Реализовать табы. Есть несколько блоков текста и есть соответствующие кнопки под каждый текст
// При нажатии на кнопку показывается соответствующий этой кнопке текст, предидущий кусок текста скрывается
