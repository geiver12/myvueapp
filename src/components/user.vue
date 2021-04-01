<template>
    <div class="users">
        
     <h1>User Component</h1>
     <ul>
    <li v-for="user of users">
         <div class="container text-white text-right m-4">{{user.name}} => {{user.email}} <button class="btn btn-danger" v-on:click="deleteUser(user)">Delete</button></div>
    </li>
</ul>
<hr>
<form v-on:submit.prevent="addUser">
    <input type="text" v-model="newUser.name" placeholder="name">
    <input type="email" v-model="newUser.email" placeholder="email">
    <button type="submit">Add</button>
</form>
    </div>
</template>

<script>

export default {
data(){
    return{
        users:[
            {name:'Josemir' , email:'jose@mail.com',contact:false       },
            {name:'Amadeo' , email:'mad@mail.com',contact:true      },
            {name:'Mozart' , email:'moz12@mail.com',contact:true     },
            {name:'Pavarotti' , email:'pava@mail.com',contact:false       }
        ],
        newUser:{
     
        }
    }
},
methods:{
    addUser(){
        this.users.push(this.newUser)
        this.newUser={}
        console.log('add user')
    },
    deleteUser(user){
        this.users.splice(this.users.indexOf(user),1);
    }
},created(){
     this.$http.get('https://jsonplaceholder.typicode.com/users').then(res =>this.users=res.body)
}
}
</script>
<style>
 .users{
     background: #333;
     color: aliceblue;
 }
 .users li{
     list-style: none;
 }
</style>
