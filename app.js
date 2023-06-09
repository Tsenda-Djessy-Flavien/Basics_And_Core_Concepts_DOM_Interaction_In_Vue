const { createApp } = Vue

const app = createApp({
   data() {
    return {
       courseGoalA: 'Finish the course and to learn Vue',
       courseGoalB: 'Master Vue and build amazing app!', 
       textHtml: '<h3>Vue Course</h3>',
       vueLink: 'https://vuejs.org/',
    }
   },
   methods: {
    outputGoal() {
        const numberRandom = Math.random();
        if (numberRandom < 0.5) {
            return this.courseGoalA
        } else {
            return this.courseGoalB
        }
    }
   },
})

app.mount('#user-goal');