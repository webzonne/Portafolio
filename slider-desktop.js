let i=2;
$("#radio1").click(function(){
    i =1;
$(".slide-img1").css("opacity","1");
$(".slide-img1").css("transform", "scale(1)");
$(".slide:nth-child(1) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");
});

$("#radio2").click(function(){
    i=2;
$(".slide-img2").css("opacity","1");
$(".slide-img2").css("transform", "scale(1)");
$(".slide:nth-child(2) button").css("opacity","1");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");
});

$("#radio3").click(function(){
    i=3;
$(".slide-img3").css("opacity","1");
$(".slide-img3").css("transform", "scale(1)");
$(".slide:nth-child(3) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");
});


$("#radio4").click(function(){
    i=4;
$(".slide-img4").css("opacity","1");
$(".slide-img4").css("transform", "scale(1)");
$(".slide:nth-child(4) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
});



/* BOTON IZQUIERDA */
$(".content-izq").click(function(){
    if (i==1){i=5}
        i--;
 $("#radio"+i).prop("checked", true);
 
if(i==4){
$(".slide-img4").css("opacity","1");
$(".slide-img4").css("transform", "scale(1)");
$(".slide:nth-child(4) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");  
}

if(i==3){
$(".slide-img3").css("opacity","1");
$(".slide-img3").css("transform", "scale(1)");
$(".slide:nth-child(3) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");   
 }
if(i==2){
$(".slide-img2").css("opacity","1");
$(".slide-img2").css("transform", "scale(1)");
$(".slide:nth-child(2) button").css("opacity","1");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");    
}
if(i==1){
$(".slide-img1").css("opacity","1");
$(".slide-img1").css("transform", "scale(1)");
$(".slide:nth-child(1) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");    
}
});

/* BOTON DERECHA */

$(".content-dere").click(function(){
i++;
if(i>4){i=1}
$("#radio"+i).prop("checked", true);
if(i==1){
$(".slide-img1").css("opacity","1");
$(".slide-img1").css("transform", "scale(1)");
$(".slide:nth-child(1) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");    
}
if(i==2){
$(".slide-img2").css("opacity","1");
$(".slide-img2").css("transform", "scale(1)");
$(".slide:nth-child(2) button").css("opacity","1");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");        
}
if(i==3){
$(".slide-img3").css("opacity","1");
$(".slide-img3").css("transform", "scale(1)");
$(".slide:nth-child(3) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img4").css("opacity","0.2");
$(".slide-img4").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(4) button").css("opacity","0.2");     
}
if(i==4){
$(".slide-img4").css("opacity","1");
$(".slide-img4").css("transform", "scale(1)");
$(".slide:nth-child(4) button").css("opacity","1");
$(".slide-img2").css("opacity","0.2");
$(".slide-img2").css("transform", "scale(0.8)");
$(".slide-img1").css("opacity","0.2");
$(".slide-img1").css("transform", "scale(0.8)");
$(".slide-img3").css("opacity","0.2");
$(".slide-img3").css("transform", "scale(0.8)");
$(".slide:nth-child(1) button").css("opacity","0.2");
$(".slide:nth-child(2) button").css("opacity","0.2");
$(".slide:nth-child(3) button").css("opacity","0.2");  
}


});