/*
Задание 2	                                                                              Результат

1) Создать двумерный массив спрашивая у пользователя его размерность	
2) Есть пользователь ввел неправильный обьем памяти переспрашивать 	 
2) Если пользователь нажал отмена выходить	
2) Если пользователь ввел коррекный обьем памяти спрашивать у него цвет телефона	
2) Если все введено верно и пользователь не нажал отмена выводить цену и картинку	
3) Цена телефона зависит не только от памяти но и от цвета	
4) Посмотреть методы массивов	

*/

let iphones = [
  {
   64: {
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
  128: {
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
  256: {
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
       },      
      
      
  }
];



// var phone;
// var color;
// var phoneDisc;
// var phoneColor;
// var filePhone;

// phoneDisc = prompt("Виберіть розмір пам'яті телефону(8G/16G/32G/64G/128G/256G)");

// switch (phoneDisc) {
//     case "8G":
//         phone="Iphone_5s";
//         color="white/black"
//         document.write(phone+" - 100$");
//         break;
//     case "16G":
//         phone="Iphone_6s";
//         color="white/grey"
//         document.write(phone+" - 150$");
//         break;
//     case "32G":
//         phone="Samsung_s6";
//         color="white/black"
//         document.write(phone+" - 200$");
//         break;
//     case "64G":
//         phone="Xiaomi_Redme_9";
//         color="white/blue"
//         document.write(phone+" - 250$");
//         break;
//     case "128G":
//         phone="Samsung_Note_10";
//         color="white/black"
//         document.write(phone+" - 1400$");
//         break;
//     case "256G":
//         phone="Iphone_11_Plus";
//         color="white/black"
//         document.write(phone+" - 1200$");
//         break;
//     default:
//         alert("Телефона з таким параметром пам'яті не існує!!!")
//         break;
// }

// if(phone != (undefined || null)){
//     phoneColor = prompt("Виберіть колір телефону "+phone+" ("+color+")");
//     filePhone=phone+"/"+phoneColor+".jpg";
    
//       if(phoneColor == "white"){
//         document.write("<br><img src=\""+filePhone+"\"  height=\"420\" width=\"320\">");
//       }else if(phoneColor == "black" && phone == ("Iphone_5s"||"Iphone_11_Plus"||"Samsung_s6"||"Samsung_Note_10")){
//         document.write("<br><img src=\""+filePhone+"\"  height=\"420\" width=\"320\">");
//       }else if(phoneColor == "grey" && phone == "Iphone_6s"){
//         document.write("<br><img src=\""+filePhone+"\"  height=\"420\" width=\"320\">");
//       }else if(phoneColor == "blue" && phone == "Xiaomi_Redme_9"){
//         document.write("<br><img src=\""+filePhone+"\"  height=\"420\" width=\"320\">");
//       }else{
//         alert(phone+" з "+phoneColor+" кольором не існує!!!")
//       }
// }


// @ponomarenko_me