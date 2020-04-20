// Сделать клон http://todomvc.com/examples/angular2/ по MVC
// 1) Добавление
// 2) Когда отмечаем как сделанное - удалять из списка

// ПЕРВЫМ ЭТАПОМ НАПИШИТЕ МОДЕЛЬ
// ПОТОМ КОНТРОЛЛЕР
// ВО VIEW ВСЕ ВЫВОДИТЕ В КОНСОЛЬ
// И ТОЛЬКО ПОТОМ РЕНДЕРИТЕ html

const Model = {
    items:[]
}
const View = {
    clearList: function(){
        let range = document.createRange()
        range.selectNodeContents(document.getElementById("list"))
        range.deleteContents()
    },
    render: function () {
       this.clearList()

       if(Model.items.length != 0){
           list = document.getElementById("list")
           for (let i = 0; i < Model.items.length; i++) {
               item         = document.createElement("li")
               span         = document.createElement("span")
               check        = document.createElement("a")
               cross        = document.createElement("a")
               iconCheck    = document.createElement("i")
               iconCross    = document.createElement("i")
               
               item.className = "item"
               span.className = "item-text"
               check.className = "item-complete"
               cross.className = "item-delete"

               span.textContent = Model.items[i].text

               if(Model.items[i].comleted)
                    span.setAttribute("style","text-decoration: line-through: color: #bbb")

                iconCheck.setAttribute("class","icon ion-md-checkmark")
                iconCheck.setAttribute("data-id",i)
                iconCross.setAttribute("class","icon ion-md-trash")
                iconCross.setAttribute("data-id",i)
                
                check.setAttribute("onlick", "Controller.comleteItem('" + i + "')")
                cross.setAttribute("onlick", "Controller.deleteItem('" + i + "')")

                check.appendChild(iconCheck)
                cross.appendChild(iconCross)
                item.appendChild(span)
                item.appendChild(check)
                item.appendChild(cross)
                
                list.appendChild(item)


           }
       }
    },
    addItem: function(event){        
        if((event.code == "Enter")||event.code == "NumpadEnter"){        
            input = document.getElementById("add-item");
            if ((input.value != " ") || (input.value != "")){
                Controller.addItem(input.value)
                return false
            }
        }
    }
}

const Controller = {
    
    init: function(){
        View.render()
    },
    addItem: function(){
        let item;
        list_item = {text: item,comleted: false}
        Model.items.push(list_item)
        document.getElementById("add-item").value = ""
        console.log(item)
        View.render()
    },
    comleteItem: function(){
        Model.items[item_index].comleted = !Model.items[item_index].comleted
        View.render()
    },
    deleteItem: function(){
        Model.items.slice()
        View.render()
    }
}

Controller.addItem("111")
Controller.addItem("222")
Controller.addItem("333")

Controller.init();