import $ from '../libs/$'

class Tooltip {
  constructor() {
    var self = this
    this.target = null
    this.$el = $('<div class="tooltip"></div>').appendTo('body').hide()
  }
  show(text) {
    if (!text) {
      return
    }

    this.$el.html(text).addClass('hide').show()
    this.setPos()
    setTimeout(() => {
      this.$el.removeClass('hide')
    }, 1)
  }
  hide() {
    this.$el.addClass('hide')

    var delay = this.$el.css('transition-duration') || ''
    delay = delay.replace('s', '') * 1000
    setTimeout(() => {
      this.$el.hide()
    }, delay)
  }
  setPos() {
    if (!this.target) {
      return
    }

    var offset = this.target.getBoundingClientRect()

    this.$el.css({
      left: offset.left + (offset.width - this.$el[0].offsetWidth) / 2,
      top: offset.top - this.$el[0].offsetHeight
    })
  }
}

var tooltip = new Tooltip()

$('[title]')
  .on('mouseenter', function (e) {
    var target = e.target
    tooltip.target = target

    if (target.title) {
      $(this).attr('tooltip', target.title)
      target.title = ''
    }

    var title = $(this).attr('tooltip')
    tooltip.show(title)
  })
  .on('mouseleave', function (e) {
    tooltip.hide()
  })

$('body')
  .on('scroll', function (e) {
    tooltip.setPos()
  })