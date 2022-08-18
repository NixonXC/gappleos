let taskbar = document.getElementsByClassName("mtask")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let fold = document.getElementsByClassName("fold")[0]
let xp = document.getElementsByClassName("xp")[0]
let trash = document.getElementsByClassName("trash")[0]
let trashfold = document.getElementsByClassName("trashfold")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "31px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "31px"
    }
});
fold.addEventListener("click", ()=>{
    if(xp.style.bottom == "70px"){
        xp.style.bottom = "-655px"
    }
    else{
        xp.style.bottom = "70px"
    }
});
xp.addEventListener("click", ()=>{
    if(xp.style.bottom == "70px"){
        xp.style.bottom = "-655px"
    }
    else{
        xp.style.bottom = "70px"
    }
});
startmenu.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "31px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "31px"
    }
});
trash.addEventListener("click", ()=>{
    if(trashfold.style.bottom == "70px"){
        trashfold.style.bottom = "-655px"
    }
    else{
        trashfold.style.bottom = "70px"
    }
});
trashfold.addEventListener("click", ()=>{
    if(trashfold.style.bottom == "70px"){
        trashfold.style.bottom = "-655px"
    }
    else{
        trashfold.style.bottom = "70px"
    }
});