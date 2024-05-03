<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">О нас</h2>
      <div class="content">
        <p>Компания "Kazan Techno" - молодая и динамичная команда профессионалов в сфере информационных технологий. Мы стремимся к инновациям и качеству во всем, что делаем.</p>
        <p>Наша цель - создать уникальные и актуальные решения для наших клиентов, помогая им достигать своих целей и успешно развиваться в цифровом мире.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  width: 100%;
  padding: 80px 0;
  background-color: #FFF;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  color: #111F22;
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
}

.content {
  max-width: 1100px;
  margin: 0 50px;
  font-size: 22px;
  line-height: 1.6;
  text-align: center;
}
</style>

