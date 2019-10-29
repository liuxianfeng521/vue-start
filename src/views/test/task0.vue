<template>
  <div>
    <el-table v-loading="rollLoading" :data="roll" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="95" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { bringRoll } from '@/api/took'

export default {
  name: 'Task0',
  data() {
    return {
      roll: null,
      rollLoading: true
    }
  },

  created() {
    this.bringRoll()
  },
  methods: {
    bringRoll() {
      this.rollLoading = false
      bringRoll().then(response => {
        this.roll = response.data
        this.rollLoading = false
      })
    }

  }
}
</script>
