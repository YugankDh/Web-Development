let btn = document.querySelector(".eye")

btn.addEventListener("click",function(){
    var passfield = document.querySelector("#pass")

    if(passfield.type == "text"){
        btn.src = "eye.png"
        passfield.type = "password"
    }
    else{
        btn.src = "hidden.png"
        passfield.type = "text"
    }
    

})