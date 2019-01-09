<template>
   <div class="col-md-8 mt-4">
    <div class="card">
        <div class="card-header">Creado el {{task.created_at}}</div>

        <div class="card-body">
            <p>{{task.description}}</p>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
             
        </div>

        <div class="card-footer">
            <button class="btn btn-default" v-on:click="onClickEdit()">
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
                editMode: false;
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
                this.$emit('edit');
            }
        },
    }
</script>
