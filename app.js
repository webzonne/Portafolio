   $(document).ready(function(){
        $(".barra").click(function(){
            
             if ($(".box").is(":checked")){
               $(".despliegue").css("opacity", "0"); 
                 
            }else{
                $(".despliegue").css("opacity", "1"); 
                
            }
            
        });
       
      /* PRIMER LI */
      $("#primerli").mouseover(function(){
         $(".ab").css("color", "white"); 
      });
      $("#primerli").mouseout(function(){
         $(".ab").css("color", "black"); 
      });
              
       /* SEGUNDO LI */
      $("#segundoli").mouseover(function(){
         $(".port").css("color", "white"); 
      });
      $("#segundoli").mouseout(function(){
         $(".port").css("color", "black"); 
      });
              
     /* TERCER LI */
      $("#tercerli").mouseover(function(){
         $(".con").css("color", "white"); 
      });
      $("#tercerli").mouseout(function(){
         $(".con").css("color", "black"); 
      });
              
    
       
    });
    