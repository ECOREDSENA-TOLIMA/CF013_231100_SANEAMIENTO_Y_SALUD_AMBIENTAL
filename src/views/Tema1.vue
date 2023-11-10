<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aspectos ambientales

    .row.align-items-center.my-3.col-lg-12.mb-4 
      .col-5
        figure
          img(src='@/assets/curso/temas/1/1.png').m-auto(data-aos="fade-right")            
      .col-7.p-2
        p.mb-4(style="overflow-x: hidden !important") Es necesario comprender que un aspecto ambiental es un elemento de las actividades, productos o servicios de una actividad que puede interactuar de manera positiva o negativa con el medio ambiente. Existe una relación de causa y efecto, donde la causa son los aspectos ambientales y el efecto son los impactos ambientales generados por las acciones humanas hacia el medio ambiente.

        p.mb-4(style="overflow-x: hidden !important") El equilibrio en el medio ambiente puede verse afectado con el tiempo, ya sea por causas naturales o por la influencia humana. Aunque todos los elementos del ambiente pueden adaptarse a nuevas condiciones ambientales, los límites de tolerancia pueden verse comprometidos si no se permite el tiempo adecuado para aclimatarse.

    
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
