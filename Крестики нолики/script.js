//function remove() {
//    var card=document.getElementById("cart-del");
//    card.parentElement.removeChild(card);
//} то же самое чо и внизу
function removeByJquery(){
    var element = $("#cart-del");
    element.remove();
}
function add(){
    var element2 = $("#cart-add");
    element2.after("<h1>Hello</h1>");
}
var col="red";
let colors=["none","none","none","none","none","none","none","none","none",]
function turn(number){
    
$('#s'+number).css("background-color", col);
    if(col==="red"){
        col="green";
    }else{
        col="red";
    }
$('#s'+number).prop("disabled",true);

    
}