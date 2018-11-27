<style lang="less" scoped>
html {
  background: #f5f5f5;
}
.header {
  position: relative;
  z-index: 1;
  background: #fff;
  height: 50px;
  box-shadow: 3px 3px 10px rgba(225, 225, 225, 0.4);
}
.sidebar {
  width: 250px;
  background: #333;
  color: #fff;
}
.content {
  padding: 1em;
}
.footer {
  background: #eee;
}
</style>

<template>
  <div class="layout">
    <div class="header">

    </div>
    <div class="layout-row">
      <div class="sidebar">
        <ul class="menu">
          <li>
            <div> layout </div>
          </li>
          <li>
            <div>menu</div>
            <i class="menu-arrow icon-down"></i>
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
      <div class="layout-content">
        <div class="container">
          <div class="panel">
            <div class="button-group">
              <button>button</button>
              <button>button</button>
              <button>button</button>
            </div>
          </div>
          <div class="path mgt">
            <a>home</a>
            <a>page</a>
          </div>
          <div class="panel">
            <input type="text">
            <button>button</button>
          </div>
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
                <td>xxxxxxxx@xx.xxx</td>
                <td>xxxx</td>
                <td>xxxxxx</td>
                <td>xx</td>
                <td>xxx-xxxx-xxxx</td>
                <td></td>
              </tr>
              <tr>
                <td>xxxxxxxx@xx.xxx</td>
                <td>xxxx</td>
                <td>xxxxxx</td>
                <td>xx</td>
                <td>xxx-xxxx-xxxx</td>
                <td></td>
              </tr>
            </table>
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
          <div class="row">
            <div class="col-12">
              <div class="panel">
                panel
              </div>
            </div>
            <div class="col-12">
              <div class="panel">
                panel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer"> footer </div> -->
  </div>
</template>

<script>
var vm;
export default {
  data() {
    vm = this;
    return {
      data: {},
    };
  },
  methods: {
    load() {},
  },
  mounted() {
    vm.load();
  },
};
</script>
