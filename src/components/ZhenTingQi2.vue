
<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
</template>


<script >
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      loading: false
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion, oldQuestion) {
      console.log("newQuestion:"+newQuestion)
      console.log("oldQuestion:"+oldQuestion)
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
    ,answer(newAns, oldQAns) {
      console.log("newAns:"+newAns)
      console.log("oldQAns:"+oldQAns)
      if (newAns.includes('?')) {
        console.log("qqq:")

        // this.getAnswer()
      }
    }

  },
  methods: {
    async getAnswer() {
      this.loading = true
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      } finally {
        this.loading = false
      }
    }
  }
}

</script>

<style scoped>

</style>