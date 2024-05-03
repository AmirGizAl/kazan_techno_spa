<template>
  <header class="header">
    <div class="container">
      <img src="/public/logo_t.jpeg" alt="Kazan Techno" class="logo" @mouseover="increaseLogo" @mouseleave="resetLogo">
      <h1 class="slogan">
        <p class="first-slogan">Инновации, качество, прогресс</p>
        <p class="second-slogan">Мы воплощаем вашу идею в программное решение!</p>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    increaseLogo() {
      this.$refs.logo.style.transform = 'scale(1.1)';
    },
    resetLogo() {
      this.$refs.logo.style.transform = 'scale(1)';
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 20px 0;
  background-color: #F1F8FE;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  width: 320px; /* Увеличим размер логотипа */
  transition: transform 0.3s ease-in-out; /* Добавим анимацию при изменении размера */
}

.slogan {
  color: #111F22;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  text-indent: 2em; /* Добавим красную строку */
  margin: 10px 30px;
}

.first-slogan {
  font-size: 45px; /* Увеличиваем размер шрифта первого абзаца */
}

.second-slogan {
  font-size: 35px; /* Уменьшаем размер шрифта второго абзаца */
  margin-left: 200px;
}

.slogan:hover {
  opacity: 1;
}

.logo:hover {
  transform: scale(1.1);
}

</style>



