import $ from "../libs/$";
import attrtpl from "../libs/attrtpl";

var self = {
  $el: $('<div class="_options">').appendTo($('<div>').appendTo('body')),
  flat: document.createComment('select'),
  select: null,
  isShow: false,
  show() {
    self.isShow = true
    self.$el.html('')

    // 复制 option
    $(self.select.children).each(function (i, option) {
      if (option.tagName.match(/optgroup/i)) {
        $(option.children).each(function (i, option) {
          self.cloneOption(option)
        })
      } else {
        self.cloneOption(option)
      }
    })

    self.$el.show()
    self.resize()
    self.scroll()
  },
  hide() {
    self.isShow = false
    self.$el.hide()
  },
  cloneOption(option) {
    var $opton = $(option.outerHTML.replace(/^<option/i, '<div').replace(/option>$/i, 'div>'))
      .addClass('_option')
      .html(option.innerHTML)
      .appendTo(self.$el)

    if (option.selected) {
      $opton.addClass('selected')
    }
    if (option.disabled) {
      $opton.addClass('disabled')
    }

    var _option = $opton[0]
    _option.option = option
  },
  resize() {
    if (!self.isShow) return
    var offset = self.select.getBoundingClientRect()

    self.$el.css({
      left: offset.left,
      top: offset.top + offset.height,
      minWidth: offset.width
    })
  },
  scroll() {
    var offsetTop = 0
    var optionHeight = 0

    $('._option').each(function () {
      if (this.option.selected && !offsetTop) {
        offsetTop = this.offsetTop
      }
      var height = $(this).css('height')
      if (height != 'auto') {
        optionHeight = parseFloat(height) || 0
      }
    })

    self.$el[0].scrollTop = offsetTop - optionHeight
  }
}


$('select')
  .on('mousedown', function (e) {
    console.log('mousedown')
    var _this = this
    var parent = this.parentNode

    // 去掉默认下拉列表
    if (!this.multiple) {
      e.preventDefault()
      // parent.insertBefore(self.flat, this)
      // parent.removeChild(this)

      // parent.insertBefore(this, self.flat)

      setTimeout(() => {
        // parent.insertBefore(this, self.flat)
        // parent.removeChild(self.flat)
        _this.focus()
      }, 41);
    }

  }).on('focus', function () {
    self.select = this
    self.show()

  }).on('blur', function () {
    if (!self.isHover) {
      self.hide()
    }
  }).on('change', function (e) {
    if (!e.multiple) {
      self.show()
    }
  })


$('._option')
  .on('click', function () {
    // disabled
    if (this.option.disabled) {
      return
    }

    var event = document.createEvent('Event')
    event.initEvent('change', true, true)

    if (!self.select.multiple) {
      self.select.selectedIndex = this.option.index
      self.select.dispatchEvent(event)
      self.hide()
    } else {
      this.option.selected = !this.option.selected
      if (this.option.selected) {
        $(this).addClass('selected')
      } else {
        $(this).removeClass('selected')
      }
      event.multiple = true
      self.select.dispatchEvent(event)
    }


  }).on('mouseenter', function () {
    self.isHover = true

  }).on('mouseleave', function () {
    self.isHover = false

  })


$('body')
  .on('scroll', function (e) {
    self.resize()
  })
