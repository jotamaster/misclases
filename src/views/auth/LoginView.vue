<template>
    <div>
        <h1>login</h1>
        <button @click="login">entrar</button>
    </div>
</template>
<script>

export default {
    name:'LoginView',
    methods:{
        login(){
            this.$store.dispatch('login',{username:'eljajas',password:'nosenah'})
            console.log('quepaza')
        }
    }
}
</script>
