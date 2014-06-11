/*

2014年5月16日 17:51:26

*/

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
		var dialog = $('<div class="wui"></div>');
		if (data['title']) {
			dialog.append('<div class="wui-item wui-header">' + data['title'] + '</div>');
		};
		if (data['content']) {
			dialog.append('<div class="wui-item">' + data['content'] + '</div>');
		};
		if (data['img']) {
			dialog.append($(this).clone().css({width:'100%', height:'auto', float:'none'}));
			dialog.removeClass('wui');
		};
		// 自定义内容
		if (data['id']) {
			var el = $('#'+data['id']);
			// 标记一下它原本在哪里
			var flag = $('<i style="display:none"></i>');//标记
			el.after(flag);

			var elDisplay = el.css('display');
			if (elDisplay == 'none') {
				el.show();
			};
			dialog.append(el).removeClass('wui');
		};

		// 关闭
		var dialogClose = $('<div class="wui-close"></div>');

		function close() {
			//如果是自定义内容，将它放回原处
			if (data['id']) {
				flag.after(el.css('display',elDisplay)).remove();
			};

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
			position: 'fixed',
			'min-width': '200px',
			'max-width': '600px',
			'max-height': '100%',
			'overflow': 'auto',
			'_width': '400px',
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