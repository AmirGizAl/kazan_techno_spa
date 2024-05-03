<template>
  <div id="app">
    <Header/>
    <About/>
    <Services/>
    <Contact/>
  </div>
  <footer>
    <div class="footer">
      <p>&copy; 2024 ООО "Казан Техно".</p>
    </div>
  </footer>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Services,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Titillium Web', sans-serif; /* Добавим шрифт Montserrat */
  color: #111F22;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}
</style>
