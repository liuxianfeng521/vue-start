<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="表格" name="first">
        <el-table
          :data="tableData4"
          style="width: 100%"
          max-height="100%"
        >
          <el-table-column
            prop="name"
            label="姓名"
            width="120"
          />
          <el-table-column
            prop="province"
            label="省份"
            width="120"
          />
          <el-table-column
            prop="city"
            label="市区"
            width="120"
          />
          <el-table-column
            prop="address"
            label="地址"
            width="300"
          />
          <el-table-column
            prop="zip"
            label="邮编"
            width="150"
          />
          <el-table-column
            prop="date"
            label="日期"
            width="150"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="对话框" name="second">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog></el-tab-pane>
      <el-tab-pane label="图片" name="third">
        <el-row>
          <el-col v-for="(o, index) in 2" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="mmmmmmmmmmmmmmmmmm" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      currentDate: new Date(),
      dialogVisible: false,
      tableData4: [{
        id: 1,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-01'
      }, {
        id: 2,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-02'
      }, {
        id: 3,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-03'
      }, {
        id: 4,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-04'
      }, {
        id: 5,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-05'
      }, {
        id: 6,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-06'
      }, {
        id: 7,
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        date: '2016-05-07'
      }],
      activeName: 'fourth'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
