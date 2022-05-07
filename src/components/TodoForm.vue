<template>
  <form @submit.prevent="addTodoItem">
    <label for="title" class="form-label">Title</label>
    <input id="title" class="form-control" type="text" v-model="todoitem.title"><br>
    <label for="description" class="form-label">Description</label>
    <textarea id="description" class="form-control" cols="30" rows="10" v-model="todoitem.description"></textarea><br>
    <label for="duedate" class="form-label">Due Date</label>
    <input id="duedate" class="form-control" type="date" v-model="todoitem.duedate"><br>
    <button class="btn btn-primary">add</button>
  </form>
</template>

<script>
import TodoDataService from "../services/TodoDataService.js"

export default {
  name: "TodoForm",
  data() {
    return {
      todoitem : {
        title : "",
        description: "",
        duedate: new Date().toISOString().slice(0, 10),
        done: false
      },
    }
  },
  methods: {
    addTodoItem() {      
      TodoDataService.create(this.todoitem)
        .then(() => {
          console.log("New todoitem created in firestore")
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style>
</style>
