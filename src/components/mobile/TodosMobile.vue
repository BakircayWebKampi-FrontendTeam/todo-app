<template>
  <div v-for="todo in todos" :key="todo.id" class="todo">
    <div class="todo-input">
      {{ todo.message }}
    </div>
    <small class="todoDate">{{ todo.date }}</small>

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
};
</script>

<style></style>
