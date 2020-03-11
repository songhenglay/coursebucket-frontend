<template>
    <div>
        <v-container class="programming">
            <v-card class="ma-3" width="170" v-for="(course,i) in courses" :key="i">
                <v-img height="150" :src="course.img"></v-img>
                <v-card-title class="body-2">{{course.name}}</v-card-title>
                <v-card-subtitle class="caption pb-4">{{course.role}}</v-card-subtitle>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'TopicCards',
    data(){
        return{
            course:[
                { name:'Python', role:'Programming'},
            ]
        }
    }
}
</script>