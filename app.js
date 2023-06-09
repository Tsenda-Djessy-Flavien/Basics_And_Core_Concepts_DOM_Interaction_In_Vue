const { createApp } = Vue

const app = createApp({
   data() {
    return {
       courseGoal: 'Finish the course and to learn Vue', 
       vueLink: 'https://vuejs.org/',
    }
   },
})

app.mount('#user-goal');