//alert('wu.js')
/*
wui
by wushufen
2014.02.26

update 2014年2月28日 16:21:47
*/

/**
 * 选项卡
 * .tabs ([hover]用鼠标悬浮切换)
 * .tabs ul li*N 标签、点击
 * .tabs div*N 内容
 * .tabs div.selected 显示
 */
$(function(){
	
	//用this推算相关元素，而不直接用选择器，因为同页中可有多个此控件
	$('.tabs').children('ul').children('li').click(function(){
		//移除其它选择
		$(this).parent('ul').children('li')
			.removeClass('selected');
		//再选择这个
		$(this).addClass('selected');
		
		var tabsBody = $(this).closest('.tabs').children('.tabs-body');
		//显示对应的div
		var index=$(this).index();
		tabsBody.children('.tab')
			.removeClass('selected')
			.hide();
		var curTab = tabsBody.children('.tab').eq(index);
		curTab
			.addClass('selected')
			.fadeIn();
	});

	//默认显示第1个
	$('.tabs').each(function(){//同页允许多个
		$(this).children('ul').children('li')
			.addClass('noSelect')
			.first().click();
	});
	
	//.hover鼠标悬浮切换
	$('.tabs.hover li').hover(function(){
		$(this).click();
	});
});
