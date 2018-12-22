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
              <div
                class="container"
                style="width:100%"
              >
                <div class="row">
                  <div
                    v-for="i in 24"
                    :key="i"
                    class="col xs-8 sm-4 md-2"
                  >{{i}}</div>
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
                  <div>
                    <input
                      v-model="input"
                      placeholder="input"
                    >
                  </div>
                </div>
                <div class="row">
                  <label>textarea</label>
                  <div>
                    <textarea
                      xrows="2"
                      placeholder="textarea"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <label>loooooooooong label</label>
                  <div>
                    <select>
                      <option value="1">select</option>
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
                      <select>
                        <option value="1">select</option>
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
                      <label><input type="checkbox">checkbox</label>
                      <label><input type="checkbox">checkbox</label>
                      <label><input type="checkbox">checkbox</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>radio</label>
                  <div>
                    <div class="radio-group">
                      <label><input type="radio" name="radio">radio</label>
                      <label><input type="radio" name="radio">radio</label>
                      <label><input type="radio" name="radio">radio</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>switch</label>
                  <div>
                    <div class="checkbox-group">
                      <label><input type="checkbox" switch>switch</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label>button</label>
                  <div>
                    <button>button</button>
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
            <table class="table">
              <tr>
                <th>账号</th>
                <th>角色</th>
                <th>姓名</th>
                <th>性别</th>
                <th>手机</th>
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
            <div class="tac">
              <div class="pagination">
                <span class="icon-left"></span>
                <span>1</span>
                <span
                  class="active"
                  title="1000条/ (10条/页) = 999页"
                >5</span>
                <span>999</span>
                <span class="icon-right"></span>
              </div>
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
      input: ""
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
