<template>
  <section class="contact">
    <div class="container">
      <h2 class="section-title">Контакты</h2>
      <div class="content">
        <p>Общество с ограниченной ответственностью
          «Казан Техно» (ООО «Казан Техно»)</p>
        <p>Адрес: 420015, Республика Татарстан,
          г. Казань, ул. Жуковского, зд. 30, пом. 26</p>
        <p>Телефон: <a href="tel:+7(965)580-37-65">+7(965)580-37-65</a></p>
        <p>Email: <a href="mailto:kazan.techno@mail.ru">kazan.techno@mail.ru</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact {
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
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
}
</style>


