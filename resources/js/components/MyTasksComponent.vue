 <template>
   
     <div class="row justify-content-center">
        <div class="col-md-8">
            <form-component @new="addTask"></form-component>
        </div>    

        
            
            <task-component 
                v-for="task in tasks" 
                :key="tasks.id" 
                :task="task">
            
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
            }
        },
    }
</script>