import VM from '../libs/vm'
import $ from '../libs/$'


var tpl = `
<div
  v-show="input"
  class="datepicker"
  :style="{position:'fixed', left:left+'px', top:top+'px'}"
  @mouseenter="mouseenter"
  @mouseleave="mouseleave"
>
  <div class="year">
    <ul>
      <li>年</li>
    </ul>
    <ol>
      <li
        v-for="item in ys"
        :class="{current:y==item}"
        @click="setYear(item)"
      >
        {{item}}
      </li>
    </ol>
  </div>
  <div class="month">
    <ul>
      <li>月</li>
    </ul>
    <ol>
      <li v-for="item in Ms" :class="{current:M==item}">{{item+1}}</li>
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
      <li v-for="item in ds" :class="{current:d==item}">{{item}}</li>
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
</div>
`
var vm = new VM({
  template: tpl,
  data: {
    input: null,
    left: 0,
    top: 0,
    isEditing: false,
    hideTimer: null,
    date: new Date,
    y: 2018,
    M: 0,
    d: 1,
    h: 0,
    m: 0,
    s: 0,
    ys: [2018],
    Ms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    ds: [],
    hs: [],
    ms: [],
    ss: [],
  },
  computed: {
    c() {
      return 0
    }
  },
  methods: {
    focus(input) {
      this.input = input
      this.updatePostion()
      this.update()
    },
    blur() {
      if (!this.isEditing) {
        this.input = null
      }
    },
    mouseenter() {
      this.isEditing = true
      clearTimeout(this.hideTimer)
    },
    mouseleave() {
      this.isEditing = false
      this.hideTimer = window.setTimeout(() => {
        this.input.blur()
        this.input = null
      }, 500)
    },
    update() {
      var date = new Date(this.input.value)
      if (isNaN(date)) {
        date = new Date
      }
      this.date = date

      var y = this.y = date.getFullYear()
      var M = this.M = date.getMonth()
      var d = this.d = date.getDate()
      var h = this.h = date.getHours()
      var m = this.m = date.getMinutes()
      var s = this.s = date.getSeconds()

      this.ys = Array(101).fill(1).map((item, i) => {
        return i + y - 50
      })


      this.input.focus()
    },
    updatePostion() {
      var offset = this.input.getBoundingClientRect()
      this.left = offset.left
      this.top = offset.top + offset.height
      this.$foceUpdate()
    },
  },
  mounted() {
  },
})


window.datepicker = vm


var view = $('<div>').appendTo('body')[0]
vm.$mount(view)


$('input[type="date"],input[type="_date"]')
  .on('focus', function (e) {
    vm.focus(e.target)
  })
  .on('blur', function (e) {
    vm.blur()
  })


$('body').on('scroll', function (e) {
  if (vm.input) {
    vm.updatePostion()
  }
})


$('body').on('DOMNodeInserted', function (e) {
  $('input[type="date"]').attr('type', '_date')
})
