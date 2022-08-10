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
    <form>
      <input
        type="text"
        placeholder="Yeni hatırlatma ekle"
        name="todo"
        required
      />
      <button>Ekle</button>
    </form>
  </div>
</template>

<script></script>

<style></style>
