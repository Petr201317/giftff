document.addEventListener("click", e=> {
    if(e.target.id == 2) {
        document.getElementsByClassName("answers")[0].style.display = "none";
        document.getElementsByClassName("answers")[1].style.display = "none";
        document.getElementsByClassName("answers")[2].style.display = "none";
        document.getElementsByClassName("questionText")[0].style.display = "none";
        document.getElementsByClassName("win_letter")[0].style.display = "block";
        document.getElementsByClassName("where")[0].style.display = "block";
}
    else if (e.target.id == 1) {
        document.getElementById(1).style.backgroundColor = "red";
    }
    else if (e.target.id == 3) {
        document.getElementById(3).style.backgroundColor = "red";
    }
})
