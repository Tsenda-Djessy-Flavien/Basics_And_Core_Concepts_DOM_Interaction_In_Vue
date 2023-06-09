const { createApp } = Vue

const app = createApp({
   data() {
    return {
       courseGoal: 'Finish the course and to learn Vue'  
    }
   },
})

app.mount('#user-goal');