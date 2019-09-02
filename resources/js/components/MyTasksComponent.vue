 <template>
   
     <div class="row justify-content-center">
        <div class="col-md-8">
            <form-component @new="addTask"></form-component>
        </div>    
     
        <task-component 
            v-for="(task, index) in tasks" 
            :key="tasks.id" 
            :task="task"
            @update="updateTask(index, ...arguments)"
            @delete="deleteTask(index)">
        
        </task-component>
        
    </div>
            
</template>

<script>
    export default {
        data() {
            return {
                tasks: [{
                    'id': 1,
                    'description': 'abc',
                    'created_at': '28/12/18'
                }]
            }
        },
        mounted() {
            console.log('Component mounted.')
        },

        methods: {
            addTask(task){
                this.tasks.push(task);            
            },
            deleteTask(index){
                this.tasks.splice(index,1);
            },
            updateTask(index,task){
                this.tasks[index] = task;
            }
        },
    }
</script>