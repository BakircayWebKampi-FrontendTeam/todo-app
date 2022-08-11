<template>
  <div class="logo">LOGO</div>
  <div class="progress">
    <ul>
      <li><button type="button">Başlanmamış</button></li>
      <li><button type="button">Süreçte</button></li>
      <li><button type="button">Tamamlanmış</button></li>
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
export default {
  methods: {
    addTodo() {
      this.$store.state.todos.push({
        message: this.$refs.todoMessage.value,
        date: this.$refs.todoDate.value,
        id: Date.now(),
      });
    },
  },
};
</script>

<style></style>
