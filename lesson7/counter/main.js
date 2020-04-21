// 1) Пример counter (mvc) все cb (колбек функции) переписать на промисы (new Promise)

class Model {
  constructor() {
    this.number = 0;
  }

  getNumber() {
    return this.number;
  }

  increment() {
    return new Promise((resolve, reject) => {      
      resolve(this.number += 1);
    });
  }

  decrement() {
    return new Promise((resolve, reject) => {      
      resolve(this.number -= 1);
    });
  }
}
const model = new Model();

class View {
  constructor() {
    this.counterEl = document.querySelector(".counter__number");
    this.plusBtn = document.querySelector(".counter__btn--plus");
    this.minusBtn = document.querySelector(".counter__btn--minus");
  }

  render(number) {
    this.counterEl.innerHTML = number;
  }

  listenIncrement() {
    return new Promise((resolve, reject) => {
      this.plusBtn.addEventListener("click", () => {
        resolve();
      });
    });
  }

  listenDecrement() {
    return new Promise((resolve, reject) => {
      let handler = (event) => {        
        resolve(event);
    };
    this.minusBtn.addEventListener("click", handler);
    });
  }

}
const view = new View();

class Controller {
  constructor() {
    view.render(model.getNumber());   
    (async () => {
      await view.listenDecrement();
      const newNumber = await model.decrement();
      view.render(newNumber);
      })();

      (async () => {
        await view.listenIncrement();
        const newNumber = await model.increment();
        view.render(newNumber);
        })();        
   
  }

}

const controller = new Controller();
