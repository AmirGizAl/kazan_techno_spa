<template>
  <section class="services">
    <div class="container">
      <h2 class="section-title">Наши услуги</h2>
      <div class="services-grid">
        <div class="service">
          <h3>Веб-разработка</h3>
          <p>Мы создаем красивые и функциональные веб-приложения для наших клиентов.</p>
        </div>
        <div class="service">
          <h3>Мобильная-разработка</h3>
          <p>Мы создаем современные мобильные приложения для iOS и Android, которые сочетают в себе высокую производительность, удобство использования и красивый дизайн.</p>
        </div>
        <div class="service">
          <h3>Дизайн</h3>
          <p>Наша команда дизайнеров поможет вам создать уникальный дизайн для вашего проекта.</p>
        </div>
        <div class="service">
          <h3>Аналитика</h3>
          <p>Мы проводим детальное изучение бизнес-процессов вашей компании, выявляем потребности и цели, а также формулируем требования к программному обеспечению для их достижения.</p>
        </div>
        <div class="service">
          <h3>Парсинг данных</h3>
          <p>Мы предоставляем услуги по парсингу данных с веб-сайтов, а также их структурированию и анализу для использования в вашем проекте.</p>
        </div>
        <div class="service">
          <h3>OutStaff</h3>
          <p>Мы предлагаем услуги по предоставлению высококвалифицированных IT-специалистов для работы на удаленной основе (OutStaff).</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesPage'
}
</script>

<style scoped>
.services {
  width: 100%;
  padding: 50px 0;
  background-color: #6b7d87;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  color: #111F22;
  font-size: 40px;
  margin-bottom: 60px;
  text-align: center;
}

.services-list li {
  margin: 0 20px 20px 0;
  padding: 15px 20px;
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
}

.services-list li:hover {
  transform: translateY(-5px);
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.service {
  width: calc(33.3333% - 20px);
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
}

.service h3 {
  font-size: 24px;
}

.service p {
  font-size: 16px;
  text-indent: 1em; /* Добавим красную строку */
}
</style>


