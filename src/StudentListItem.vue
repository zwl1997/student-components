<template>
    <div>
        <li> 
            <p>{{student.id}} {{student.name}} {{student.classname}} {{student.studentno}} <button v-on:click="removal">删除</button></p> 
        </li>
    </div>
</template>

<script>
export default {
    name:"student-list-item",
    props: ['student'],
    methods:{
        removal(){
            this.$emit('remove');
        }        
    }
}
</script>

<style scoped>

</style>
