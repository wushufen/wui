// toggle="selecter: class"
// toggle="<selecter: class"
$(function() {
    $(document.body).on('click', '[addClass]', function() {
        var value = $(this).attr('addClass');
        if (value) {
            var s_c = value.split(':');
            var s = s_c[0];
            if (s.match(/^\s*</)) {
                $(this).closest(s.replace(/^\s*</, '')).addClass(s_c[1])
            } else {
                $(s).addClass(s_c[1]);
            }
        }
    });
    $(document.body).on('click', '[toggleClass]', function() {
        var value = $(this).attr('toggleClass');
        if (value) {
            var s_c = value.split(':');
            var s = s_c[0];
            if (s.match(/^\s*</)) {
                $(this).closest(s.replace(/^\s*</, '')).toggleClass(s_c[1])
            } else {
                $(s).toggleClass(s_c[1]);
            }
        }
    });
    $(document.body).on('click', '[removeClass]', function() {
        var value = $(this).attr('removeClass');
        if (value) {
            var s_c = value.split(':');
            var s = s_c[0];
            if (s.match(/^\s*</)) {
                $(this).closest(s.replace(/^\s*</, '')).removeClass(s_c[1])
            } else {
                $(s).removeClass(s_c[1]);
            }
        }
    });
});

// sidebar
$(function() {
    // toggle sidebar
    var $sidebarToggle = $('.sidebar-toggle');
    var $sidebarToggleClassEl = $('html');
    var sClass = 'sidebar-open';
    $sidebarToggle.click(function(e) {
        $sidebarToggleClassEl.toggleClass(sClass);
    });
    // 点击非 .sidebar 时关闭
    var $html = $('html');
    var $sidebar = $('.sidebar');
    $html.click(function(e) {
        if ($(e.target).closest($sidebar).length) return;
        $sidebarToggleClassEl.removeClass(sClass);
    });
    // menu
    // active and open
    $sidebar.find('a').each(function(i, el) {
        if (el.href === location.href && $(el).attr('href') !== '') {
            $(this).addClass('active');
        }
        if ($(this).hasClass('active')) {
            $(this).closest('ul').closest('li').addClass('open');
        }
    });
    // sidebar menu toggle
    var mClass = 'open';
    var $mToggle = $('ul.sidebar-menu ul').closest('li');
    $mToggle.click(function(e) {
        if ($(e.target).closest($('ul.sidebar-menu ul')).length) return;
        e.preventDefault();
        e.stopPropagation();
        var $toggleClassEl = $(this).closest('li');
        $toggleClassEl.children('ul').slideToggle('fast');
        $toggleClassEl.toggleClass(mClass);
    });
});
