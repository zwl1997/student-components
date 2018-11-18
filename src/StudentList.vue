<template>
    <div class="student-list">
        <h2>{{title}}</h2>
        {{log}}
        <form v-on:submit="sub">
            <input v-model="postData.name">
            <input v-model="postData.classname">
            <input v-model="postData.studentno">
            <button studentno="submit">Submit</button>
        </form>
        {{work}}
        <ul>
            <student-list-item @remove="remove(i,student.id)" v-for="(student,i) in theStudents" :student="student" :key="student.id">

            </student-list-item>
        </ul>
    </div>
</template>

<script>
import studentListItem from "./StudentListItem"
export default {
    name:"student-list",
    props:['title'],
    components:{
        'student-list-item':studentListItem
    },
    data(){
        return{
            log:"",
            postData:{
                name:"",
                classname:"",
                studentno:""
            },
            work:"",
            theStudents:[]  
        }
    },
    methods:{
        remove(i,id){
            $.ajax({
                url: `http://localhost:8080/students/${id}`,
                type: 'DELETE',
                //students:"test",
                statusCode:{
                    204:function(){
                        alert("Cannot delete!")
                    },
                    200: () => {
                        //console.log(this.students) //console "test"
                        this.theStudents.splice(i,1);
                    }
                } 
            });     
        },
        sub(event){
            if(this.postData.name==""||this.postData.classname==""||this.postData.studentno==""){
                this.log="请输入";
                event.preventDefault();
            }
            else{
                var self=this;
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/students",
                    data: JSON.stringify(this.postData),
                    //data:this.postData,
                    success: function(){
                        self.work="post successfully"
                        self.theStudents.push(self.postData)
                    },
                    //datatype: "json",
                    contentType: 'application/json',
                    });
            }
        }
    },
    created:function(){
        $.getJSON('http://localhost:8080/students')
        .done(data=>{
            this.theStudents=data;
    })  
    }
}
</script>

<style scoped>

</style>