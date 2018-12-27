import $ from "../libs/$";

var timer = null

$('body').on('load DOMNodeInserted', function (e) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    $('input[type="date"]').attr('type', '_date')

    if (!$(e.target).closest('console').length) {
      console.log(e)
    }
  }, 1);
})
