import $ from "../libs/$";

var flat = document.createComment('select')
var options = $(document.createElement('options'))
options.update = function () {
  var select = this._select

  options
    .html(select.innerHTML)
    .appendTo('body')
    .show()
    .resize()
}
options.resize = function () {
  if (!this._select) {
    return
  }

  var select = this._select
  var offset = select.getBoundingClientRect()

  options.css({
    left: offset.left + 'px',
    top: offset.top + offset.height + 'px',
    minWidth: offset.width + 'px'
  })
}

$('select').on('mousedown', function () {
  console.log('mousedown')
  var parent = this.parentNode

  // 去掉默认下拉列表
  parent.insertBefore(flat, this)
  parent.removeChild(this)
  parent.insertBefore(this, flat)
  parent.removeChild(flat)

}).on('focus', function () {
  console.log('focus')
  options._select = this
  options.update()

}).on('blur', function () {
  console.log('blur')
  options.hide()
  options._select = null
})

$('body').on('scroll', function (e) {
  options.resize()
})