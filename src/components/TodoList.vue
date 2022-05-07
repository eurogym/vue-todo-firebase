<template>
  <table class="table">
      <thead>
          <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Due Date</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="todoitem in todoitems"
                :key="todoitem.id"
          >
              <td>{{ todoitem.title }}</td>
              <td>{{ todoitem.description }}</td>
              <td>{{ todoitem.duedate }}</td>
          </tr>
      </tbody>
  </table>
</template>

<script>
import TodoDataService from "../services/TodoDataService.js"

export default {
    name: "TodoList",
    data() {
        return {
            todoitems: [],
        }
    },
    mounted() {
        TodoDataService.getAll().onSnapshot(data => {
            this.todoitems = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        })
    }

}
</script>

<style>

</style>