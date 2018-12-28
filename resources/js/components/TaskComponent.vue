<template>
   <div class="col-md-8 mt-4">
    <div class="card">
        <div class="card-header">Creado el {{task.created_at}}</div>

        <div class="card-body">
            {{task.description}}
        </div>

        <div class="card-footer">
            <button class="btn btn-default">
                Editar
            </button>
            <button class="btn btn-danger">
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
                
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
