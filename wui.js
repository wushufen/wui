// 侧边栏
$(function(){
	$('.sidebar-toggle').click(function() {
		$('.layout-sidebar').toggleClass('active');
		return false;
	});
})



/*****************************************************
 * wui.js
 * by wushufen
 * 2014.05.13
 *****************************************************/


/**
 * loading...
 */
$(window).load(function() {
	$('.loading').fadeOut();
});



/**
 * 返回历史上一页
 * .wuijs-back
 */
$(function() {
	$('.wuijs-back').click(function() {
		history.go(-1);
		return false;
	});
	// 2014.05.22 + 没有历史则隐藏返回按钮
	if (history.length<2) {
		$('.wuijs-back').hide();
	}
});



$(function() {

	// 关闭
	$('.wui-close').click(function() {
		$(this).parent().fadeTo('normal', 0, function() {
			$(this).slideUp(function() {
				$(this).remove();
			});
		});
		return false;
	});



	// 折叠
	$('.collapse').click(function() {
		$(this).next().slideToggle();
	});



	// 标签页
	$('.tabs').each(function() {
		//显示第一个
		$(this).find('.tabs-indexs').children().first().addClass('active');
		$(this).find('.tab').first().show();
	});

	var beforeTabIndex = 0;
	$('.tabs-indexs').children().click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		//显示对应的div
		var tabsBody = $(this).closest('.tabs').find('.tabs-body');
		var index = $(this).index();

		tabsBody.find('.tab').hide();
		var curTab = tabsBody.children('.tab').eq(index);
		var curTabHeight = curTab.outerHeight();

		var beforeTab = tabsBody.children('.tab').eq(beforeTabIndex);
		var beforeTabHeight = beforeTab.outerHeight();
		// // 效果
		// tabsBody.height(beforeTabHeight);
		// tabsBody.stop().animate({height: curTabHeight}, 500, function(){
		// 	tabsBody.height('auto');
		// });
		// beforeTabIndex = index;

		curTab.fadeIn();
	});



});