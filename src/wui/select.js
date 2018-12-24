import $ from "../libs/$";
console.log($)


var flat = document.createComment('select')

select = $0
select.addEventListener('mousedown', function () {
  var parent = select.parentNode

  parent.insertBefore(flat, select)
  parent.removeChild(select)
  parent.insertBefore(select, flat)
  parent.removeChild(flat)

})