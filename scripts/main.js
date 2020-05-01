document.getElementById("btn-friends").onclick = function(){
    appear_all_UL()
    document.getElementById("ul-life").style.display = 'none';
    document.getElementById("ul-family").style.display = 'none';
}
document.getElementById("btn-life").onclick = function(){
    appear_all_UL()
    document.getElementById("ul-friends").style.display = 'none';
    document.getElementById("ul-family").style.display = 'none';
}
document.getElementById("btn-family").onclick = function(){
    appear_all_UL()
    document.getElementById("ul-life").style.display = 'none';
    document.getElementById("ul-friends").style.display = 'none';
}
appear_all_UL()
function appear_all_UL(){
    document.getElementById("ul-life").style.display = 'block';
    document.getElementById("ul-family").style.display = 'block';
    document.getElementById("ul-friends").style.display = 'block';
    // document.getElementById("articl-1").style.display = 'none';
    document.getElementById("articl-2").style.display = 'none';
    document.getElementById("articl-3").style.display = 'none';
    document.getElementById("articl-4").style.display = 'none';
    document.getElementById("articl-5").style.display = 'none';
    document.getElementById("articl-6").style.display = 'none';
    document.getElementById("articl-7").style.display = 'none';
}