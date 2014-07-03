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

$(function(){
	//2014.05.23 + 设置超时
	setTimeout(function(){
		$('.loading').fadeOut();
	}, 10000);

	// 2014.05.26 + 点击隐藏
	$('.loading').click(function(){
		$(this).fadeOut();
	});
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




// 标签页
$(function(){
	$('.tabs').each(function() {
		// 显示
		var $active = $(this).find('.active');
		var index = $(this).find('.tab').index($active);
		// 如果没有 .active 则显示第一个
		if ($active.length == 0) {
			$(this).find('.tab').first().addClass('active');
			$(this).next('.tabs-body').find('.tab-content').eq(0).fadeIn();
		}else{
			$(this).next('.tabs-body').find('.tab-content').eq(index).fadeIn();
		}
	});

	// 点击
	$('.tab').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		//显示对应的 .tab-content
		var index = $(this).closest('.tabs').find('.tab').index($(this));
		$(this).closest('.tabs').next('.tabs-body').find('.tab-content')
			.hide()
			.eq(index).fadeIn();
	});
});




// 菜单
$(function(){
	$('.menu-toggle').click(function(){
		$(this).next().slideToggle('fast');
		return false;
	});
});





// 关闭
$(function() {

	$('.wuijs-close').click(function() {
		$(this).parent().fadeTo('normal', 0, function() {
			$(this).slideUp(function() {
				$(this).remove();
			});
		});
		return false;
	});

});




// 折叠
$(function() {

	$('.wuijs-collapse').click(function() {
		$(this).next().slideToggle();
		return false;
	});

});





// 下拉框
$(function() {

	$('.dropdown').click(function(){
		$(this).toggleClass('open');
		return false;
	});
	$('body').click(function(){
		$('.dropdown').removeClass('open');
	});
	$('.dropdown-body').click(function(e){
		e.stopPropagation();
	})

});