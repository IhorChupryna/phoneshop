/*
1) При нажатии на area создавать внутри еще один figure (appendChild) 
2) Рисовать figure там где нажали 
3) Создать инпут в котором есть возможность писать ширину/высоту создаваемого figure 
*/

let area = document.querySelector(".area");    

let clickArea = area.addEventListener("click", function(event)
{
    let wh = document.getElementById("wh").value;    
    let right = (event.pageX-(wh/2))+"px";
    let bottom = (event.pageY-(wh/2))+"px";
    
    let figureDiv =  document.createElement("div");
    figureDiv.className="figure";
    figureDiv.style.position="absolute";
    figureDiv.style.width=wh+"px";
    figureDiv.style.height=wh+"px";
    figureDiv.style.left=right;
    figureDiv.style.top=bottom;
    

    area.appendChild(figureDiv);    
       
});









 