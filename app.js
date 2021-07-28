// alert("OK")

var lines = document.getElementById("Lines")

function addLine(){
    var input = document.getElementById("input")
    console.log(input.value);

    var ul = document.createElement("ul")

    var li = document.createElement("li")
    ul.appendChild(li)

    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    // console.log(liText);
    lines.appendChild(ul)
    // console.log(ul);

    var del_btn = document.createElement("button")
    // console.log(del_btn);
    var del_btnText = document.createTextNode("Delete")
    del_btn.appendChild(del_btnText)
    del_btn.setAttribute("onclick", "del_Item(this)")

    li.appendChild(del_btn)

    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick", "edit_Item(this)")
    console.log(editBtn);


    input.value = ""
}


function allClear(){
    lines.innerHTML = ""
}


function del_Item(){
    var del_btn = document.createElement("button")
    console.log(del_btn.parentNode)
    del_btn.parentNodes.remove()
}



function edit_Item(e){
    var edit_Value = prompt("Enter Value", e.parentNode.firsChild.Value)
    e.parentNode.firstChild.nodeValue = edit_Value
}


