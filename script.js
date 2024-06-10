function dropdownMenu(){
    var x = document.getElementById("dropdownclick");
    if(x.className === "topnav-left"){
        x.className += " responsive";
    }
    /*change topnav-left to topnav-left.responsive*/
    else{
        x.className = "topnav-left";
    }
}
