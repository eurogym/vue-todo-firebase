<template>
  <form action="">
    <label for="">Title</label>
    <input type="text" v-model="todoitem.title"><br>
    <label for="">Description</label>
    <textarea id="" cols="30" rows="10" v-model="todoitem.description"></textarea><br>
    <label for="">Due Date</label>
    <input type="date" v-model="todoitem.duedate"><br>
    <button>add</button>
    <button>cancel</button>
  </form>
</template>

<script>
import TodoDataService from "../components/TodoForm.vue"

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
  methodes: {
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
