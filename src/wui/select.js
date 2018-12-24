import $ from "../libs/$";

var flat = document.createComment('select')

var options = $(document.createElement('options'))

$('select').on('mousedown', function () {
  console.log('mousedown')
  var parent = this.parentNode

  parent.insertBefore(flat, this)
  parent.removeChild(this)
  parent.insertBefore(this, flat)
  parent.removeChild(flat)

}).on('focus', function () {
  console.log('focus')
  var self = $(this)

  var offset = this.getBoundingClientRect()
  options.css({
    left: offset.left + 'px',
    top: offset.top + offset.height + 'px',
    minWidth: offset.width + 'px'
  })
    .html(self.html())
    .appendTo('body').show()

}).on('blur', function () {
  console.log('blur')
  options.hide()

})