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
	$('.js-collapse').click(function() {
		$(this).next().slideToggle();
		return false;
	});




	// 下拉框
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