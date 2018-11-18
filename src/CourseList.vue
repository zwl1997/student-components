<template>
    <div class="course-list">
        <h2>{{title}}</h2>
        {{log}}
        <form v-on:submit="sub">
            <input v-model="postData.name">
            <input v-model="postData.time">
            <input v-model="postData.type">
            <button type="submit">Submit</button>
        </form>
        {{work}}
        <ul>
            <course-list-item @remove="remove(i,course.id)" v-for="(course,i) in theCourses" :course="course" :key="course.id">

            </course-list-item>
        </ul>
    </div>
</template>

<script>
import CourseListItem from "./CourseListItem"
export default {
    name:"course-list",
    props:['title'],
    components:{
        'course-list-item':CourseListItem
    },
    data(){
        return{
            log:"",
            postData:{
                id:"",
                name:"",
                time:"",
                type:""
            },
            work:"",
            theCourses:[]  
        }
    },
    methods:{
        remove(i,id){
            $.ajax({
                url: `http://localhost:8080/courses/${id}`,
                type: 'DELETE',
                //courses:"test",
                statusCode:{
                    204:function(){
                        alert("Cannot delete!")
                    },
                    200: () => {
                        //console.log(this.courses) //console "test"
                        this.theCourses.splice(i,1);
                    }
                } 
            });     
        },
        sub(event){
            if(this.postData.name==""||this.postData.time==""||this.postData.type==""){
                this.log="请输入";
                event.preventDefault();
            }
            else{
                var self=this;
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/courses",
                    data: JSON.stringify(this.postData),
                    //data:this.postData,
                    success: function(){
                        self.work="post successfully"
                        $.getJSON('http://localhost:8080/courses/MaxId')
                        .done(data=>{
                            console.log(data)
                            console.log(self.postData)
                            self.postData.id=data;
                            //Here push(self.postData), all new will reference to the same address with the same value. 
                            //so copy values to a new postData.
                            self.theCourses.push({
                                id:self.postData.id,
                                name:self.postData.name,
                                time:self.postData.time,
                                type:self.postData.type
                            })
                        })
                    },
                    //dataType: "json",
                    contentType: 'application/json',
                    });

            }
        }
    },
    created:function(){
        $.getJSON('http://localhost:8080/courses')
        .done(data=>{
            this.theCourses=data;
        })
    }
}
</script>

<style scoped>

</style>
