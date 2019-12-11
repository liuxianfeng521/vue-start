<template>
  <div>
    <input v-model="test2" />
    <div>请输入您的成绩查看分数等级：{{ test }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test2: ''
    }
  },
  computed: {
    test() {
      return this.gradeToLevel(this.test2)
    }
  },
  methods: {
    gradeToLevel(grade) {
      let res = ''
      if (!grade) { res = '' } else if (grade < 0) { res = '成绩不能为负值' } else if (grade < 30) { res = '极差' } else if (grade >= 30 && grade < 50) { res = '差' } else if (grade >= 50 && grade < 60) { res = '不及格' } else if (grade >= 60 && grade < 80) {
        res = '良'
      } else if (grade >= 80 && grade <= 100) {
        res = '优'
      } else if (grade > 100) {
        res = '最高分为100'
      }
      return res
    },
    gradeToLevel2(row) {
      let res = ''
      if (row < 30) {
        res = '极差'
      }
      if (row >= 30 && row < 50) { res = '差' }
      if (row >= 50 && row < 60) { res = '不及格' }
      if (row >= 60 && row < 80) { res = '良' }
      if (row >= 80) { res = '优' }
      return res
    }
  }
}

</script>
