import firebase  from "../firebase"

const collTodoItems = firebase.collection('/todoItems')


class TodoDataService {
  getAll() {
    return collTodoItems
  }
  create(todoitem) {
    return collTodoItems.doc().set(todoitem)
  }
  update(key, value){
    return collTodoItems.child(key).update(value)
  }
  delete(key){
    return collTodoItems.child(key).remove()
  }
  deleteAll(){
    return collTodoItems.remove()
  }
}

export default new TodoDataService()