
$(".page .sidebar-btn")	.on("click" , function(){
    $ (".wrapper").toggleClass('is-visible');
    if ($ (".wrapper").hasClass('is-visible')){
      $(".page").animate({
        marginLeft:"110px"
      },500) ; 

      $ (".wrapper").animate({
        left:"-150PX"
      },500);
      // $(".page").animate({
      //   marginLeft:"110px"
      // },500) ;

      $(".side-plugins").fadeOut();

      $(".sidebar h1").animate({
        marginLeft:"140px",
        fontSize:"20px"
       });

      $(".sidebar a").animate({
       marginLeft:"130px"
      },500);

    }else{
        $ (".wrapper").animate({
           left:0
        },500);

        $(".page").animate({
          marginLeft:"250px"
        },500) ;  

        $(".side-plugins").fadeIn();
        $(".sidebar a").animate({
          marginLeft:"-20px"
         });
         
         $(".sidebar h1").animate({
          fontSize:"40px",
          marginLeft:"-10px"
         });
    }
})	;
	
		
	
