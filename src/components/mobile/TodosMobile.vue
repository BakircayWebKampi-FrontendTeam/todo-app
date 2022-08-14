<template>
  <div v-for="(todo, index) in todos" :key="todo.id" class="todo">
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
          <button @click="remove(index)" type="button">
            <i class="fa-solid fa-trash-can"></i>
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
    },
    remove(id) {
      this.todos.splice(id, 1);
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
