export const test = {
  data() {
    return {
      testMix: 'hello Vue'
    }
  },
  created() {
    console.log('这是混入对象的created')
  },
  methods: {
    mixinsFun() {
      this.testMix = this.testMix.split('').reverse().join('')
    }
  },
  computed: {
    testMix2() {
      return this.test + '：这是混入对象计算结果。'
    }
  },
  watch: {
    testMix(newVal, oldVal) {
      console.log('混入对象的watch', newVal, oldVal)
    }
  }
}
