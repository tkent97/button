function changebuttontext(){
    var btn = document.getElementById("login");
    if(btn.innerText == "login"){
        btn.innerText="logout";
    }else{
        btn.innerText = "login";
    }
}

function alertbutton(){
    return alert("ninja was clicked");
}

function hideitself(element){
    return element.style.display="none";
}