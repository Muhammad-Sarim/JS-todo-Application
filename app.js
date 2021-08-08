// alert("OK")

var lines = document.getElementById("Lines")

function addLine(){
    var input = document.getElementById("input")
    console.log(input.value);

    var li = document.createElement("li")

    // var li = document.createElement("li")
    // ul.appendChild(li)

    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    // console.log(liText);
    lines.appendChild(li)
    // console.log(ul);

    var del_btn = document.createElement("button")
    // console.log(del_btn);
    var del_btnText = document.createTextNode("Delete")
    del_btn.appendChild(del_btnText)
    del_btn.setAttribute("onclick", "del_Item(this)")
    del_btn.setAttribute("class" , "del_Btn")
    del_btn.innerHTML = '<i class="fas fa-minus-circle fa-2x"></i>'




    li.appendChild(del_btn)

    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick", "edit_Item(this)")
    editBtn.innerHTML = '<i class="fas fa-edit fa-2x"></i>'
    console.log(editBtn);


    input.value = ""
}


function allClear(){
    lines.innerHTML = ""
}


function del_Item(d){
    d.parentNode.remove()
}



function edit_Item(d){
    var edit_Value = prompt("Enter Value", d.parentNode.firsChild).nodeValue
    d.parentNode.firstChild.nodeValue = edit_Value
}