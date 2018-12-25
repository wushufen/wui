import $ from "../libs/$";

$('body').on('DOMNodeInserted', function (e) {
  $('input[type="date"]').attr('type', '_date')

  if (!$(e.target).closest('.console').length) {
    console.log(e)
  }
})
