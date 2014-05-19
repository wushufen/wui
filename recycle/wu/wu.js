//alert('wu.js')
/*
2014年4月14日 10:50:43

wui
by wushufen
2014.02.26
*/

/**
 * 返回历史上一页
 * .wuijs-back
 */
$(function(){
	$('.wuijs-back').click(function(){
		history.go(-1);
		return false;
	});
});


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



/*
对话框
*/
$(function(){
	$('[data-dialog]').click(function(){
		//参数
		var data = $(this).attr('data-dialog');
		data = eval('('+data+')');
		var title = data['title']||'消息';
		var content = data['content']||'内容';


		//遮罩层
		var overlay = $('<div class="_overlay"></div>');
		overlay.css({
			position: 'absolute',
			background: '#000',
			top: 0,
			left: 0,
			opacity: 0.5,
			width: '100%',
			height: $(document).height()
		});
		$('body').append(overlay);
		overlay.hide().fadeIn();

		//对话框
		var dialog = $('<div class="dialog"><div class="dialog-header"><h3 class="dialog-title">'+title+'</h3></div><div class="dialog-body">'+content+'</div><div class="dialog-footer"><button class="button _dialogClose">关闭</button></div></div>');
		dialog.addClass('fixed');
		$('body').append(dialog);

		//对话框定位
		// $(window).height(); ie6 无效
		var top=$(window).height()/2-dialog.height()/2;
		var left=$(document).width()/2-dialog.width()/2;
		dialog.css({
			left: left//,
			// top: top
		});

		//body不滚动, ie7 下恢复有问题
		$('body').css({
			// overflow: 'hidden'
		});
	});

	// 关闭
	$('body').on('click', '._dialogClose', function(){

		$(this).closest('.dialog')
			.remove();
		$('._overlay')
			.fadeOut(function(){
				$(this).remove();
			});
		// $('body').css({
		// 	overflow: 'auto'
		// })
	});
});