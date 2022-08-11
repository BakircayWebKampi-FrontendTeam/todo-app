<template>
  <div class="logo">LOGO</div>
  <div class="progress">
    <ul>
      <li>
        <button @click="filterProgress(0)" type="button">Başlanmamış</button>
      </li>
      <li><button @click="filterProgress(1)" type="button">Süreçte</button></li>
      <li>
        <button @click="filterProgress(2)" type="button">Tamamlanmış</button>
      </li>
    </ul>
  </div>

  <div class="todos">
    <slot />
  </div>

  <div class="add-todo">
    <form @submit.prevent="addTodo">
      <input
        type="text"
        placeholder="Yeni hatırlatma ekle"
        name="todo"
        ref="todoMessage"
        required
      />
      <input type="date" name="todo-date" ref="todoDate" required />
      <button>Ekle</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  methods: {
    addTodo() {
      this.$store.state.todos.push({
        message: this.$refs.todoMessage.value,
        date: this.$refs.todoDate.value,
        id: Date.now(),
        isDone: false,
        progress: 0, // 0 -> Başlanmamış, 1 -> Süreçte, 2 -> Tamamlanmış
      });
      this.resetInputs();
      // this.postTodo();
    },
    // postTodo() {},
    resetInputs() {
      console.log(this.$refs.todoMessage.value);
      this.$refs.todoMessage.value = this.$refs.todoDate.value = null;
      this.$refs.todoMessage.focus();
    },
    filterProgress(count) {
      const todos = this.$store.state.todos;

      for (let i = 0; i < todos.length; i++) {
        if (todos[i].progress == count) {
          // Console ekranında filtreleme kusursuz çalışıyor, ekrana gösterme çalışmıyor
          console.log(todos[i].message);
        }
      }
    },
  },
  computed: {},
};
</script>

<style></style>
