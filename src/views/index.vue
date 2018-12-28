<style>
html {
  background: #f7f7f7;
}
</style>

<style lang="less" scoped>
.layout-header {
  position: relative;
  z-index: 1;
  background: #fff;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
}
.logo {
  color: #0af;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
}

.example {
  display: block;
  padding: 1em;
  border-radius: 3px;
  // background: #f7f7f7;
  color: #555;
  margin: 1em 0;
}

.layout-example {
  height: 200px;
  line-height: 3.5em;
  text-indent: 1em;
  .layout-header {
    background: #d0e0ff;
    border-radius: 5px;
  }
  .layout-sidebar {
    background: #d0f0ff;
    border-radius: 5px;
  }
  .layout-content {
    background: #d0fff4;
    border-radius: 5px;
  }
}
.container-example {
  .col {
    line-height: 3;
    text-align: center;
    background: #e4d0ff;
    border-radius: 5px;
  }
}
</style>

<template>
  <div class="layout index">
    <div class="layout-row">
      <div class="layout-sidebar">
        <div class="layout-header">
          <div class="logo">WUI</div>
        </div>
        <ul class="menu">
          <li>
            <div>layout</div>
          </li>
          <li>
            <div>menu</div>
            <ul>
              <li>
                <div>sub-menu</div>
              </li>
              <li>
                <div>sub-menu</div>
                <ul>
                  <li>
                    <div>sub3-menu</div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="layout">
        <div class="layout-header">
          <div class="path mgt">
            <a>home</a>
            <a>page</a>
          </div>
        </div>
        <div class="layout-content">
          <h3>datepicker</h3>
          <div class="panel">
            <div class="date">
              <div class="year">
                <ul>
                  <li>年</li>
                </ul>
                <ol>
                  <li v-for="item in 99" :key="item">{{'20'+item}}</li>
                </ol>
              </div>
              <div class="month">
                <ul>
                  <li>月</li>
                </ul>
                <ol>
                  <li v-for="item in 30" :key="item">{{item}}</li>
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
                  <li v-for="item in 30" :key="item">{{item}}</li>
                </ol>
              </div>
              <div class="hour">
                <ul>
                  <li>时</li>
                </ul>
                <ol>
                  <li v-for="item in 24" :key="item">{{item}}</li>
                </ol>
              </div>
              <div class="minute">
                <ul>
                  <li>分</li>
                </ul>
                <ol>
                  <li v-for="item in 60" :key="item">{{item}}</li>
                </ol>
              </div>
              <div class="second">
                <ul>
                  <li>秒</li>
                </ul>
                <ol>
                  <li v-for="item in 60" :key="item">{{item}}</li>
                </ol>
              </div>
            </div>
          </div>
          <h3>tooltip</h3>
          <div class="panel">
            <div class="tooltip" style="position:relative">tooltip example</div>
            <button title="this is a button">button</button>
          </div>
          <h3>toast</h3>
          <div class="panel">
            <div class="toast">this is a toast</div>
          </div>
          <h3>layout</h3>
          <div class="panel">
            <div class="row">
              <div class="col-12 md-24">
                <div class="example layout-example">
                  <div class="layout">
                    <div class="layout-header">header</div>
                    <div class="layout-content">content</div>
                  </div>
                </div>
              </div>
              <div class="col-12 md-24">
                <div class="example layout-example">
                  <div class="layout-row">
                    <div class="layout-sidebar">sidebar</div>
                    <div class="layout-content">content</div>
                  </div>
                </div>
              </div>
              <div class="col-12 md-24">
                <div class="example layout-example">
                  <div class="layout">
                    <div class="layout-header">header</div>
                    <div class="layout-row">
                      <div class="layout-sidebar">sidebar</div>
                      <div class="layout-content">content</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 md-24">
                <div class="example layout-example">
                  <div class="layout-row">
                    <div class="layout-sidebar">sidebar</div>
                    <div class="layout">
                      <div class="layout-header">header</div>
                      <div class="layout-content">content</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 md-24 none">
                <div class="example layout-example">
                  <div class="layout">
                    <div class="layout-header">header</div>
                    <div class="layout-row">
                      <div class="layout-sidebar">sidebar</div>
                      <div class="layout-content">content</div>
                      <div class="layout-sidebar">sidebar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>grid</h3>
          <div class="panel">
            <div class="example container-example">
              <div class="container" style="width:100%">
                <div class="row">
                  <div v-for="i in 24" :key="i" class="col xs-8 sm-4 md-2">{{i}}</div>
                </div>
              </div>
            </div>
          </div>
          <h3>form</h3>
          <div class="panel">
            <div class="example">
              <div class="form">
                <div class="row">
                  <label>label</label>
                  <div>text</div>
                </div>
                <div class="row">
                  <label>input</label>
                  <div>
                    <input v-model="value" placeholder="input">
                  </div>
                </div>
                <div class="row">
                  <label>date</label>
                  <div>
                    <input type="date" v-model="value" placeholder="date">
                  </div>
                </div>
                <div class="row">
                  <label>color</label>
                  <div>
                    <input type="color" v-model="value" placeholder="color">
                  </div>
                </div>
                <div class="row">
                  <label>textarea</label>
                  <div>
                    <textarea rows="2" placeholder="textarea"></textarea>
                  </div>
                </div>
                <div class="row">
                  <label>select</label>
                  <div>
                    <select v-model="value" xmultiple>
                      <option value hidden>请选择</option>
                      <option v-for="i in 10" :key="i">option {{i}}</option>
                      <optgroup label="German Cars">
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <label>input-group</label>
                  <div>
                    <div class="input-group">
                      <span>span</span>
                      <input placeholder="input">
                      <button>button</button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>input-group</label>
                  <div>
                    <div class="input-group">
                      <select placeholder="select">
                        <option value="0">select</option>
                        <!-- <option v-for="i in 10" :key="i" value="0">option {{i}}</option> -->
                      </select>
                      <select>
                        <option value="1">select</option>
                      </select>
                      <select>
                        <option value="1">select</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>checkbox</label>
                  <div>
                    <div class="checkbox-group">
                      <label>
                        <input type="checkbox" checked>checkbox
                      </label>
                      <label>
                        <input type="checkbox">checkbox
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>radio</label>
                  <div>
                    <div class="radio-group">
                      <label>
                        <input type="radio" name="radio" checked>radio
                      </label>
                      <label>
                        <input type="radio" name="radio">radio
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>switch</label>
                  <div>
                    <div class="checkbox-group">
                      <label>
                        <input type="checkbox" switch checked>checkbox
                      </label>
                      <label>
                        <input type="checkbox" switch>checkbox
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>button</label>
                  <div>
                    <button>button</button>
                  </div>
                </div>
                <div class="row none">
                  <label>file</label>
                  <div>
                    <label class="button">
                      <input type="file">
                      上传文件
                    </label>
                  </div>
                </div>
                <div class="row">
                  <label>button-group</label>
                  <div>
                    <div class="button-group">
                      <button>button</button>
                      <button>button</button>
                      <button>button</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>table</h3>
          <div class="panel">
            <div class="ova">
              <table class="table">
                <tr>
                  <th>账号</th>
                  <th>角色</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>手机号码</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>oooooooo@oo.ooo</td>
                  <td>oooo</td>
                  <td>oooooo</td>
                  <td>oo</td>
                  <td>ooo-oooo-oooo</td>
                  <td></td>
                </tr>
                <tr>
                  <td>oooooooo@oo.ooo</td>
                  <td>oooo</td>
                  <td>oooooo</td>
                  <td>oo</td>
                  <td>ooo-oooo-oooo</td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div class="tac">
              <div class="pagination">
                <span class="icon-left"></span>
                <span>1</span>
                <span class="active" title="1000条/ (10条/页) = 999页">5</span>
                <span>999</span>
                <span class="icon-right"></span>
              </div>
            </div>
          </div>
          <h3>progress</h3>
          <div class="panel">
            <div class="progress">
              <div style="width:50%">50%</div>
            </div>
          </div>
        </div>
        <!-- <div class="footer"> footer </div> -->
      </div>
    </div>
  </div>
</template>

<script>
var vm;
export default {
  data() {
    vm = this;
    return {
      input: "",
      value: ""
    };
  },
  methods: {
    load() {}
  },
  mounted() {
    vm.load();
    window.vue = this;
  }
};
</script>
