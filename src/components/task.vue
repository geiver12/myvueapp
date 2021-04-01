<template>
   <div class="container">
       <form v-on:submit="Addtask"> 
           <input type="text" v-model="tasks.title">
           <input type="submit" value="Add Task" class="btn btn-primary">
       </form>

       <div class="col-sm-8 offset-sm-2">
        <table class="table"> 
        <thead>
            <tr>
                <th>Relased</th>
                <th>Task</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="task of tasks">
                <td>
                    <input type="checkbox" v-model="task.done">
                </td>
                <td :class="{taskdone: task.done}">
                    {{task.title}}
                </td>
                <td>
                        <button class="btn btn-danger" v-on:click="Deletetask(task)">
                            Delete!
                        </button>
                </td>
            </tr>
        </tbody>
    </table>
       </div>
   </div>
</template>
<script>
export default {
    data(){ 
        return{
        tasks:[
         {            title:'Biology',            done:true        },
         {            title:'Mecanic',            done:true        },
         {            title:'Phisical',           done:false        },
         {            title:'Anatomy',            done:true        },
         {            title:'Theory',             done:false       }]
        }
    },methods:{
        Deletetask(task){
            this.tasks.splice(this.tasks.indexOf(task),1 )
        },
        Addtask(e){
            
            e.preventDefault()
            this.tasks.push({
                title:this.tasks.title,
                done:false
            })
            this.tasks.title="";
        }
        }    
}
</script>
<style>
.taskdone{
    text-decoration: line-through;
}
</style>