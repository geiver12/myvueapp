<template>
<div class="test">
<h1>Hello world</h1>
<p>This is a test!!</p>

<h1>{{user}}</h1> 
<span v-if="showname"><div v-html="myhtml"></div></span>
<span v-else> The title not found!!</span>
<hr>
<ul>
    <li v-for="task of tasks">
         {{task.title}}
    </li>
</ul>
<hr>
<input type="text" v-model="user.firstname" >
<button class="button" name="button" v-on:click="greet(user.firstname)">Click Me!</button>
<hr>
<input type="text" v-on:keyup="typing" v-on:keyup.enter="typingEnter">
<hr>
{{fullname}}
<br>
{{message}}
</div>
</template>

<script>
export default {
       data(){
            return{
                title: 'Hello Vue.js',
                user:{
                    firstname:"Joe",
                    lastname:'Black '
                },
                myhtml:"<h3>this is a title in english, fine man</h3>",
                showname:true,
                tasks:[
                    { title:'eat'},
                    { title:'tea'},
                    { title:'juice'},
                    { title:'sandwich'},
                    { title:'breadfast'},
                    { title:'dinner'},
                    { title:'sugar'}
                    ]
            }
        },
          methods: {
            greet(name){ // funciones del componente
                alert('Hello User: '+ name)
            },
            typing(e){
                console.log(e.target.value)
            },
             typingEnter(e){
                console.log('Enter pulse!')
            }
        },
        computed:{
            fullname(){
                return this.user.firstname+ ' '+  this.user.lastname
            }
        },
        props:{
            message:{
                type:String,
                default:'No have Message yet!'
            }
        }

}
</script>

<style >
.test{
    background: #eee;
    margin: 10px 20px;
}
</style>