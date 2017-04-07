// JavaScript Document
 $(document).ready(function(){
	$("#header_r>li").mouseover(function(){
	    $(this).addClass("one").siblings("li").removeClass("one");
		$(".login").removeClass("one");
    })
	
	$(".form_select_t>img").click(function(){
		if($(this).parent().next().is(":visible")){
			$(this).parent().next("div").hide();
			$(this).parent().removeClass("form_select_tb")
		}else{
			$(this).parent().next("div").show();
			$(this).parent().addClass("form_select_tb");
		}
	})
	
	$(".form_select_b>li").hover(function(){
		$(this).addClass("form_select_bl");
	},function(){
		$(this).removeClass("form_select_bl");
	}).click(function(){
		$(this).parent().prev().removeClass("form_select_tb")
		       .children("span").text($(this).text());
			   
		$(this).parent().hide();
	})
	
	$("#cirselect>span").click(function(){
		$(this).addClass("circle_bgd").siblings().removeClass("circle_bgd");
		
		var index=$("#cirselect span").index(this);
		var hadd=index+1;
		$("#sct_six_r>p").eq(index).show()
		                 .siblings("p").hide()
						 .siblings("h3").children("span")
						 .text("0"+hadd);
		
	})
	
	$("#sct_egt_r>span").focus(function(){
		$(this).css("background-color","#fff");
	}).blur(function(){
		$(this).css("background-color","#e3e3e3");
	})
	
 })

