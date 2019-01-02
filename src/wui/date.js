import $ from "../libs/$"
import attrtpl from "../libs/attrtpl"

class View {
  constructor(options) {
    Object.assign(this, options, options.data)

    this.el = $('<div wui>')[0]
    this.render = attrtpl(options.tpl)

    this.oncreate()
  }
  update() {
    this.el.innerHTML = this.render(this)
  }
  show(target) {
    this.target = target
    this.date = new Date(target.value)

    this.onshow()

    this.update()
    $(this.el).appendTo('body').show()
    this.reposition()
  }
  reposition() {
    if (!this.target) {
      return
    }

    var offset = this.target.getBoundingClientRect()
    $(this.el).css({
      position: 'fixed',
      left: offset.left,
      top: offset.top + offset.height,
    })
  }
  hide() {
    setTimeout(() => {
      $(this.el).hide()//.remove()
    }, 100);
  }
  oncreate() { }
  onshow() { }
  onhide() { }
}

var datepicker = new View({
  tpl: `
<div class="datepicker">
  <div class="year">
    <ul>
      <li>年</li>
    </ul>
    <ol>
      <li v-for="item in ys" class="{{y==item?'current':''}}">{{item}}</li>
    </ol>
  </div>
  <div class="month">
    <ul>
      <li>月</li>
    </ul>
    <ol>
      <li v-for="item in Ms" class="{{M==item?'current':''}}">{{item+1}}</li>
    </ol>
  </div>
  <div class="day">
    <ul>
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <ol>
      <li v-for="item in ds">{{item}}</li>
    </ol>
  </div>
  <div class="hour">
    <ul>
      <li>时</li>
    </ul>
    <ol>
      <li v-for="item in hs" class="{{y==item?'current':''}}">{{item}}</li>
    </ol>
  </div>
  <div class="minute">
    <ul>
      <li>分</li>
    </ul>
    <ol>
      <li v-for="item in ms" class="{{y==item?'current':''}}">{{item}}</li>
    </ol>
  </div>
  <div class="second">
    <ul>
      <li>秒</li>
    </ul>
    <ol>
      <li v-for="item in ss" class="{{y==item?'current':''}}">{{item}}</li>
    </ol>
  </div>
</div>`,
  data: {
    y: 2018,
    M: 0,
    d: 1,
    h: 0,
    m: 0,
    s: 0,
    ys: [],
    Ms: [],
    ds: [],
    hs: [],
    ms: [],
    ss: [],
  },
  oncreate() {
    var self = this
    $('.datepicker').on('mouseenter', function (e) {
      self.IsEditing = true
      self.target.focus()
    })
    $('.datepicker .year li').on('click', function (e) {
      console.log($(this).index())
    })
  },
  onshow() {
    var date = new Date(this.target.value)
    if (isNaN(date)) {
      date = new Date
    }

    this.y = date.getFullYear()
    this.M = date.getMonth()
    this.d = date.getDate()
    this.h = date.getHours()
    this.m = date.getMinutes()
    this.s = date.getSeconds()

    this.ys = Array(10).fill(1).map((item, i) => this.y + i - 5)
    this.Ms = Array(12).fill(1).map((item, i) => i)
    this.ds = Array(30).fill(1).map((item, i) => i + 1)
    this.hs = Array(24).fill(1).map((item, i) => i)
    this.ms = Array(60).fill(1).map((item, i) => i)
    this.ss = Array(60).fill(1).map((item, i) => i)

  },
  onhide() {

  }
})


$('input[type="date"],input[type="_date"]')
  .on('focus', function (e) {
    datepicker.show(this)
  })
  .on('blur', function (e) {
    if (!datepicker.IsEditing) {
      datepicker.hide()
    }
  })

$('body')
  .on('scroll', function (e) {
    datepicker.reposition()
  })

$('body').on('DOMNodeInserted', function (e) {
  $('input[type="date"]').attr('type', '_date')
})


