import $ from "../libs/$";

var container = $('<div class="toast-list">').appendTo('body')

class Toast {
  constructor(content, duration = 3000) {
    this.content = content
    this.duration = duration

    this.$el = $('<div class="toast">')
      .html(content)
      .addClass('hide')
      .appendTo(container)

    setTimeout(() => {
      this.$el.removeClass('hide')
    }, 1);

    setTimeout(() => {
      this.$el.addClass('hide')

      var delay = this.$el.css('transition-duration') || ''
      delay = delay.replace('s', '') * 1000
      setTimeout(() => {
        this.$el.remove()
      }, delay);
    }, duration);

  }
}

function toast(content, duration) {
  new Toast(content, duration)
}


export default toast
