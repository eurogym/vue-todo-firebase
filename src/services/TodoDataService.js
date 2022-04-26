import firebase from "../firebase"
const db = firebase.ref("/todoitems")

class TodoDataService {
  getAll() {
    return db;
  }
  create(todoitem) {
    return db.push(todoitem)
  }
  update(key, value){
    return db.child(key).update(value)
  }
  delete(key){
    return db.child(key).remove()
  }
  deleteAll(){
    return db.remove()
  }
}

export default new TodoDataService()
