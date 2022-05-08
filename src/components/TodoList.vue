<template>

    <table class="table">
       <thead>
        <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Due Date</th>
            <th scope="col">Done</th>
            <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="todoitem in todoitems"
                :key="todoitem.id"
          >
              <td>{{ todoitem.title }}</td>
              <td>{{ todoitem.description }}</td>
              <td>{{ todoitem.duedate }}</td>
              <td>{{ todoitem.done }}</td>
              <td>
                  <button class="btn btn-success" @click="setItemDone(todoitem)">done</button>
                  <button class="btn btn-danger" @click="delItem(todoitem)">del</button>
              </td>
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
    methods: {
        setItemDone(item){
            TodoDataService.update(item.id, {done: !item.done})
        },
        delItem(item){
            if (confirm("Are you sure you want to delete this item?")) {
                TodoDataService.delete(item.id)
            }
        }
    },
    mounted() {
        TodoDataService.getAll()
            .orderBy('duedate')
            .onSnapshot(data => {
                this.todoitems = data.docs.map(doc => ({id: doc.id, ...doc.data()
            }))
        })
    }

}
</script>

<style>

</style>