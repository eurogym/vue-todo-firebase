<template>
  <form @submit.prevent="addTodo">
    <MDBInput type="text" v-model="newTodo" placeholder="Add a todo" />
    <MDBBtn color="primary">Add</MDBBtn>
  </form>
</template>

<script>
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit';

export default {
  components: {
    MDBInput,
    MDBBtn
  },
}
</script>

<style>

</style>