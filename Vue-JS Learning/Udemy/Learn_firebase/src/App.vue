<template>
    <div class="container">
        <header>
            <h2 class="text-center my-3">Learn Firebase</h2>
            <form @submit.prevent="submitData">
                <div class="row">
                    <div class="col-11">
                      <input type="text" class="inputField" placeholder="Add works" v-model="inputData">
                    </div>
                    <div class="col-1">
                      <button class="btn btn-primary addBtn" :disabled="!inputData">Add +</button>
                    </div>
                </div>
            </form>
        </header>
        <div class="card mt-5">
            <div class="card-body" v-for="todo in todos" :key="todo.id" :class="{'card-bg' : todo.done}">
              <div class="row">
                <div class="col-11">
                  <p class="mb-0 mt-2" :class="{'text-success text-line-through' : todo.done}">{{ todo.content }}</p>
                </div>
                <div class="col-1">
                  <button class="btn btn-light" :class="todo.done ? 'btn-success':'btn-light'" @click="markDone(todo.id)">&check;</button>
                  <button class="btn btn-danger" @click="deleteData(todo.id)">&cross;</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { 
      collection, onSnapshot, addDoc,
      doc, deleteDoc, updateDoc,
      query, orderBy
    } from 'firebase/firestore';
  import {db} from './firebase/index.js'

  export default {
    data() {
      return {
        inputData: '',
        todos: [],
      }
    },
    methods: {
      submitData() {
        addDoc(collection(db, 'todos-list'), {
          content: this.inputData,
          done: false,
          date: Date.now()
        });
        this.inputData = '';
      },
      deleteData(id) {
        deleteDoc(doc(db, 'todos-list', id))
      },
      markDone(id) {
        const index = this.todos.findIndex(todo => todo.id == id)

        updateDoc(doc(db, 'todos-list', id), {
          done: !this.todos[index].done
        });
      },
      fetchData() {
        onSnapshot(query(collection(db, 'todos-list'), orderBy('date', 'asc')), (querySnapshot) => {
          let todoArray = [];
          querySnapshot.forEach((doc) => {
            const todo = {
              id: doc.id,
              content: doc.data().content,
              done: doc.data().done
            }
            todoArray.push(todo);
          });
          this.todos = todoArray;
        });
      }
    },
    mounted() {
      this.fetchData();
    },
  }
  // onMounted(async () => {
  //   const querySnapshot = await getDocs(collection(db, 'todos-list'))
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data())
  //     });
  // });

</script>

<style scoped>
    .inputField{
      padding: 5px 15px;
      width: 100%;
      border: 1px solid gray;
      border-radius: 5px;
    }
    .text-line-through{
      text-decoration: line-through !important;
    }
    .btn-success{
      background-color: green !important;
      color: white !important;
    }
    .card-bg{
      background-color: rgba(0, 128, 0,0.3);
    }
</style>