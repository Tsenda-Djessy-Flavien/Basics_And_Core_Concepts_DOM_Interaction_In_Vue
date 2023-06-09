const { createApp } = Vue

const app = createApp({
   data() {
    return {
       courseGoal: 'Finish the course and to learn Vue', 
       vueLink: 'https://vuejs.org/',
    }
   },
   methods: {
    outputGoal() {
        const numberRandom = Math.random();
        if (numberRandom < 0.5) {
            return 'Learn Vue'
        } else {
            return 'Master Vue'
        }
    }
   },
})

app.mount('#user-goal');