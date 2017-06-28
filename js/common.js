$(document).ready(function(){

	$(document).scrollTop(0);

	$('.scroll_panel').scroolly([

	{

		from: 'el-top = vp-top',
		to: 'doc-bottom',
		css : {
			'position': 'fixed',
			'top': '0',
			'margin-top' : '0',
			'background': 'rgba(252, 227, 138,0.9)'
		}
	},

		{
			to: 'con-bottom - 100el = el-top',
			css : {
				'position': 'inherit',
				'margin-top' : '68px',
				'background': 'none'
			}
		}
		

		] , $('header'));

	$('.scroll_panel>div:nth-child(1)>.progress_bar').scroolly([

	{
		from: 'doc-top = vp-top',
		to: 'doc-top + 25% = vp-bottom - 75vp' ,
		cssFrom: {
			'background': 'linear-gradient(to right, #f38181 0% , #fff 0% )'
		},
		cssTo :{
			'background': 'linear-gradient(to right, #f38181 100% , #fff 0% )'
		}
	}
	]);

	$('.scroll_panel>div:nth-child(2)>.progress_bar').scroolly([
	{
		from: 'doc-top + 25% = vp-top + 25vp' ,
		to: 'doc-top + 50% = vp-bottom - 50vp' ,
		cssFrom: {
			'background': 'linear-gradient(to right, #f38181 0% , #fff 0% )'
		},
		cssTo :{
			'background': 'linear-gradient(to right, #f38181 100% , #fff 0% )'
		}
	}
	]);

	$('.scroll_panel>div:nth-child(3)>.progress_bar').scroolly([
	{
		from: 'doc-top + 50% = vp-top + 50vp'  ,
		to: 'doc-top + 75% = vp-bottom - 25vp' ,
		cssFrom: {
			'background': 'linear-gradient(to right, #f38181 0% , #fff 0% )'
		},
		cssTo :{
			'background': 'linear-gradient(to right, #f38181 100% , #fff 0% )'
		}
	}
	]);

	$('.scroll_panel>div:nth-child(4)>.progress_bar').scroolly([
	{
		from: 'doc-top + 75% = vp-top + 75vp' ,
		to: 'doc-bottom = vp-bottom',
		cssFrom: {
			'background': 'linear-gradient(to right, #f38181 0% , #fff 0% )'
		},
		cssTo :{
			'background': 'linear-gradient(to right, #f38181 100% , #fff 0% )'
		}
	}
	]);


//acordion code

var accordion = new $.Zebra_Accordion('.accordion', {
	onBeforeOpen : function(index,element,tab){	
		if(!$(element).find('i').hasClass('rotated')){
			$(element).find('i').addClass('rotated');
			$(element).siblings('dt').find('i').removeClass('rotated');
		}
	}
});

//slider code  

$(".comments_slider").slick({
	prevArrow: '<button type="button" class = "prevArrow"></button>',
	nextArrow: '<button type="button" class = "nextArrow"></button>'
});

});