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
    return collTodoItems.doc(key).update(value)
  }
  delete(key){
    return collTodoItems.doc(key).delete()
  }
  deleteAll(){
    return collTodoItems.deleteAll()
  }
}

export default new TodoDataService()