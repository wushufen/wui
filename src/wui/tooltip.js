import $ from "../libs/$";

var tooltip = $('<div class="tooltip"></div>').appendTo('body').hide()
var target = null

function setPos() {
  if (!target) {
    return
  }

  var offset = target.getBoundingClientRect()

  tooltip.css({
    left: offset.left + (offset.width - tooltip[0].offsetWidth) / 2,
    top: offset.top - tooltip[0].offsetHeight
  })
}


$('[title]')
  .on('mouseenter', function (e) {
    target = e.target
    if (target.title) {
      $(this).attr('tooltip', target.title)
      target.title = ''
    }

    var title = $(this).attr('tooltip')

    if (title) {
      tooltip.html(title).show()
      setPos()
    }

  })
  .on('mouseleave', function (e) {
    tooltip.hide()
    target = null
  })


$('body')
  .on('scroll', function (e) {
    setPos()
  })
