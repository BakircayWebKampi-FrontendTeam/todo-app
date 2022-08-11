<template>
  <div v-for="todo in todos" :key="todo.id" class="todo">
    <div
      @click="toggleState(todo)"
      class="todo-data"
      :class="{ done: todo.isDone }"
    >
      <div class="todo-input">
        {{ todo.message }}
      </div>
      <small class="todoDate">{{ todo.date }}</small>
    </div>

    <div class="buttons">
      <ul>
        <li>
          <button type="button">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </li>
        <li>
          <button type="button">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>
        <li>
          <button @click="changeProgress(todo)" type="button">
            <i class="fa-solid fa-spinner"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: this.$store.state.todos,
    };
  },
  methods: {
    toggleState(todo) {
      todo.isDone = !todo.isDone;
      if (todo.isDone == false) {
        todo.progress = 0;
      } else if (todo.isDone == true) {
        todo.progress = 2;
      }
    },
    changeProgress(todo) {
      todo.isDone = false;
      if (todo.progress != 1) {
        todo.progress = 1;
      } else {
        todo.progress = 0;
      }
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}

/* 
todo renkleri:
başlanmamış - kırmızı
süreçte - sarı
tamamlanmış - yeşil
*/
</style>
