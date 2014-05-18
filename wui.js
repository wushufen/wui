//alert('wu.js')
/*
2014年4月14日 10:50:43

wui
by wushufen
2014.02.26
*/

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
});



/**
 * 选项卡
 * .tabs ([hover]用鼠标悬浮切换)
 * .tabs ul li*N 标签、点击
 * .tabs div*N 内容
 * .tabs div.active 显示
 */
$(function() {

	//用this推算相关元素，而不直接用选择器，因为同页中可有多个此控件
	$('.tabs').children('ul').children('li').click(function() {
		//移除其它选择
		$(this).parent('ul').children('li')
			.removeClass('active');
		//再选择这个
		$(this).addClass('active');

		var tabsBody = $(this).closest('.tabs').children('.tabs-body');
		//显示对应的div
		var index = $(this).index();
		tabsBody.children('.tab')
			.removeClass('active')
			.hide();
		var curTab = tabsBody.children('.tab').eq(index);
		curTab
			.addClass('active')
			.fadeIn();
	});

	//默认显示第1个
	$('.tabs').each(function() { //同页允许多个
		$(this).children('ul').children('li')
			.addClass('noSelect')
			.first().click();
	});

	//.hover鼠标悬浮切换
	$('.tabs.hover li').hover(function() {
		$(this).click();
	});
});



/*
对话框
*/
$(function() {
	$('[data-dialog]').click(function() {
		//参数
		var data = $(this).attr('data-dialog');
		data = eval('(' + data + ')');

		//遮罩层
		var overlay = $('<div class="_overlay"></div>');
		overlay.css({
			position: 'absolute',
			background: '#000',
			top: 0,
			left: 0,
			opacity: 0.5,
			width: '100%',
			height: $(document).height(),
			zIndex: 9999
		});
		$('body').append(overlay);
		overlay.hide().fadeIn();

		//对话框
		var dialog = $('<div class="dialog"></div>');
		if (data['title']) {
			dialog.append('<div class="dialog-header">' + data['title'] + '</div>');
		};
		if (data['content']) {
			dialog.append('<div class="dialog-body">' + data['content'] + '</div>');
		};

		// 关闭
		var dialogClose = $('<div class="dialog-close"></div>');

		function close() {
			dialog.remove();
			overlay.fadeOut(function() {
				$(this).remove();
			});
		}
		if (data['close'] !== 'undefinded' && data['close'] != 0) {
			dialog.prepend(dialogClose);
			dialogClose.click(function() {
				close();
			});
		} else {
			$(overlay).on('click', function() {
				close();
			});
		};

		dialog.css({
			zIndex: 99999
		});
		$('body').append(dialog);

		//对话框定位
		// $(window).height(); ie6 无效
		var top = $(window).height() / 2 - dialog.height() / 2;
		var left = $(document).width() / 2 - dialog.width() / 2;
		dialog.css({
			left: left,
			top: top
		});

		//body不滚动, ie7 下恢复有问题
		// $('body').css({
		// 	overflow: 'hidden'
		// });

	});

});