 <template>
   
    <div class="card">
        <div class="card-header">Que tareas tienes por hacer?</div>

        <div class="card-body">
            
            <form action="" v-on:submit.prevent="newTask()">
                <div>
                    <label for="task">Ingresar tareas pendientes:</label>
                    <input type="text" class="form-control" name="task" v-model="description">
                </div>   
                <button type="submit" class="btn btn-primary mt-2">
                    Guardar
                </button>                 
            </form>
        </div>
    </div>
            
</template>

<script>
    export default {

        data() {
            return {
                description:''
            }
        },

        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newTask(){
                let task = {
                    id: 2,
                    description: this.description,
                    created_at: '12/12/12'
                }
                this.$emit('new', task);
            }
        },
    }
</script>
