<template>
  <h1>Todos</h1>
  <div class="todo-section">
    <div class="baslanmamis">
      <h3>Başlanmamış</h3>
      <div class="baslanmamis-todos">
        <div v-for="todo in todos" :key="todo.id" class="todo">
          <div class="todo-info">
            <p>
              {{ todo.data }}
            </p>
            <small class="date">{{ todo.date }}</small>
          </div>
          <div class="todo-buttons">
            <button>...</button>
          </div>
        </div>
      </div>
    </div>

    <div class="surec">
      <h3>Süreçte</h3>
      <div class="surec-todos">
        <div class="buraya-surukle">
          <p>Buraya sürükle...</p>
        </div>
      </div>
    </div>

    <div class="tamamlanmis">
      <h3>Tamamlanmış</h3>
      <div class="tamamlanmis-todos">
        <div v-for="todo in todos" :key="todo.id" class="todo">
          <div class="todo-info">
            <p>
              {{ todo.data }}
            </p>
            <small class="date">{{ todo.date }}</small>
          </div>
          <div class="todo-buttons">
            <button>...</button>
          </div>
        </div>
        <div class="buraya-surukle">
          <p>Buraya sürükle...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [{ id: null, data: null, date: null }],
    };
  },
};
</script>
