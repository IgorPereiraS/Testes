function actbtn(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var actbtn = document.getElementById("actbtn")

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        actbtn.innerHTML = "Ver mais";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        actbtn.innerHTML = "Ver menos";
        moreText.style.display = "inline";
    }
}