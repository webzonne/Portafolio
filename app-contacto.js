/*ITEM-1 */
$(".item-1").mouseenter(function(){
$(".no-show-1").fadeOut();
$(".active-insta").fadeIn();
})
.mouseleave(function(){
$(".no-show-1").fadeIn();
$(".active-insta").fadeOut(); 
})

/*ITEM-2 */
$(".item-2").mouseenter(function(){
$(".no-show-2").fadeOut();
$(".active-email").fadeIn();
})
.mouseleave(function(){
$(".no-show-2").fadeIn();
$(".active-email").fadeOut(); 
})

/*ITEM-3 */
$(".item-3").mouseenter(function(){
$(".no-show-3").fadeOut();
$(".active-tele").fadeIn();
})
.mouseleave(function(){
$(".no-show-3").fadeIn();
$(".active-tele").fadeOut(); 
})