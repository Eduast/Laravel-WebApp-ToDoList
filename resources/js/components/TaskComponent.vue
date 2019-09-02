<template>
   <div class="col-md-8 mt-4">
    <div class="card">
        <div class="card-header">Creado el {{task.created_at}}</div>

        <div class="card-body">
            
            <input v-if="editMode" type="text" class="form-control" name="" id="" aria-describedby="helpId" v-model="task.description">
            
            <p v-else>{{task.description}}</p>

        </div>

        <div class="card-footer">
            <button v-if="editMode" class="btn btn-success" v-on:click="onClickUpdate()">
                Guardar
            </button>
            <button v-else class="btn btn-default" v-on:click="onClickEdit()">
                Editar
            </button>
            <button class="btn btn-danger" v-on:click="onClickDelete()">
                Eliminar
            </button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: ['task'],
        data() {
            return {
                editMode: false
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            onClickDelete(){
                this.$emit('delete');
            },
            onClickEdit(){
                this.editMode = true;
            },
            onClickUpdate(){
                this.editMode = false;
                this.$emit('update',task);
            }
        },
    }
</script>
