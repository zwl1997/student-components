<template>
    <div>
        <li> 
            <p>{{course.id}} {{course.name}} {{course.time}} {{course.type}} <button v-on:click="removal">删除</button></p> 
        </li>
    </div>
</template>

<script>
export default {
    name:"course-list-item",
    props: ['course'],
    methods:{
        removal(){
            this.$emit('remove');
        }        
    }
}
</script>

<style scoped>

</style>
