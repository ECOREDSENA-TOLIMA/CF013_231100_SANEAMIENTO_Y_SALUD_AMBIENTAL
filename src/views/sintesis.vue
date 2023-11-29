<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-adicional-2.mb-5
      h2 Saneamiento y salud ambiental
      i Síntesis: Componentes ambientales 


    p.mb-5 A continuación, se describe el tema principal del componente formativo Componentes ambientales, que se consideran elementos vitales que configuran nuestro entorno natural. Incluyen la atmósfera con su mezcla de gases, la hidrosfera con sus océanos y cuerpos de agua, la geosfera con su diversidad de suelos y rocas, y la biosfera, hogar de una asombrosa variedad de formas de vida. Estos componentes interactúan en un delicado equilibrio, influyendo en el clima, la biodiversidad y la sustentabilidad. La preservación y protección de estos componentes son cruciales para asegurar un planeta saludable para las generaciones futuras. La comprensión de sus interacciones es esencial para abordar los desafíos ambientales actuales y promover un futuro sostenible.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestran los diferentes temas del componente formativo entre los que están: aspectos, impactos, normativas, promotoría, educación, programas y participación comunitaria.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
