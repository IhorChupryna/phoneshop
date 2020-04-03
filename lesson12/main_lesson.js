/*
Задание 2	                                                                              Результат

1) Создать двумерный массив спрашивая у пользователя его размерность	                  +
2) Есть пользователь ввел неправильный обьем памяти переспрашивать 	                    +
2) Если пользователь нажал отмена выходить	                                            +
2) Если пользователь ввел коррекный обьем памяти спрашивать у него цвет телефона	      +
2) Если все введено верно и пользователь не нажал отмена выводить цену и картинку	      + 
3) Цена телефона зависит не только от памяти но и от цвета	                            +
4) Посмотреть методы массивов	                                                          +

*/
//-------------------------------------------------1-----------------------------------------------------------
let lvlMatrix = parseInt(prompt("Enter Lvl Matrix", "0"));
let matrixTmp = new Array();
for (let i = 0; i < lvlMatrix; i++) {
  matrixTmp[i] = new Array(lvlMatrix);
  for (let j = 0; j < matrixTmp[i].length; j++) {
    matrixTmp[i][j] = 0;
  }
}
console.log(matrixTmp);

//-------------------------------------------------1-----------------------------------------------------------

//-------------------------------------------------2-----------------------------------------------------------
let iphones = [
  {
    disc: "64",
    price: 200,
    color:
    {
      white:
      {
        pathFile: "img/white64.jpg",
        coeffPrice: 1
      },
      black:
      {
        pathFile: "img/black64.jpg",
        coeffPrice: 1.2
      }
    }
  },
  {
    disc: "128",
    price: 800,
    color:
    {
      white:
      {
        pathFile: "img/white128.jpg",
        coeffPrice: 1
      },
      grey:
      {
        pathFile: "img/grey128.jpg",
        coeffPrice: 1.3
      }
    }

  },
  {
    disc: "256",
    price: 1200,
    color:
    {
      white:
      {
        pathFile: "img/white256.jpg",
        coeffPrice: 1
      },
      black:
      {
        pathFile: "img/black256.jpg",
        coeffPrice: 1.4
      }
    }
  }
];

let disc;
let color;
let check = true;
let currPhone;
let currPhoneColors = [];
let currPhonePrice;

while (check) {
  /*Check and set disc */
  do {
    disc = prompt("Enter phone disc(64/128/256)");
  } while (+disc !== 64 && +disc !== 128 && +disc !== 256 && disc !== null)

  /*Client enter cancel*/
  if (disc === null) {
    check = false;
    break;
  }

  /*Select distanation phone*/    
  for (let i = 0; i < iphones.length; i++) {
    if (iphones[i].disc === disc) {
      currPhone = iphones[i];
      currPhoneColors = Object.keys(iphones[i].color);
      break;
    };
  }

  /*Selection color*/
  let check2 = true;
  while (check2) {
    color = prompt("Select color phone(" + currPhoneColors + ")");
    /*Client enter cancel*/
    if (color === null) {
      check = false;
      break;
    }
    for (let i = 0; i < currPhoneColors.length; i++) {
      if (currPhoneColors[i] === color) {
        check2 = false;
        break;
      }
    }
  }
  break;  
}

/*Price recount*/
currPhonePrice = currPhone.price * currPhone.color[color].coeffPrice;
  
/*Product Information Display*/  
document.write('<h1>Phone Disc: '+disc+', price: '+currPhonePrice+'</h1>');
document.write('<br><img src="'+currPhone.color[color].pathFile+'"  height="420" width="320">');