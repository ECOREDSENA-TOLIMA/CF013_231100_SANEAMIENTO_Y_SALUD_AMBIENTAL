<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Impactos ambientales

    .row.align-items-center.my-5.col-lg-12.m-auto  
      .cajon.color-primario.p-0.mt-0.col-lg-12.m-auto(style="background-color:#E7FFD1;")
        p.mb-0.py-3(data-aos="fade-up") Los impactos ambientales se refieren a las alteraciones, cambios o efectos que resultan de las actividades humanas, proyectos, acciones o eventos en el entorno natural. Estos impactos pueden ser positivos o negativos y pueden manifestarse en diversos aspectos del medio ambiente, como el aire, el agua, el suelo, la biodiversidad, la salud humana y otros componentes ecológicos.
    
    .row.align-items-center.my-3.col-lg-12.mb-4 
      .col-5
        figure
          img(src='@/assets/curso/temas/2/1.png').m-auto(data-aos="fade-right")            
      .col-7.pt-4
        p.mb-4(style="overflow-x: hidden !important") La identificación de impactos ambientales desempeña un papel fundamental en la gestión ambiental y busca evaluar y valorar los efectos resultantes de las actividades, productos o servicios de una organización en el entorno natural. La evaluación de impactos ambientales es esencial para comprender el alcance y la magnitud de estos impactos y, a su vez, encontrar soluciones para prevenir, mitigar o controlarlos, lo que contribuye a la sostenibilidad y la responsabilidad ambiental.

        p.mb-4(style="overflow-x: hidden !important") Es importante mencionar que los impactos ambientales se pueden clasificar en diversos tipos, lo que permite una evaluación más detallada de sus efectos. Algunos ejemplos comunes de tipos de impactos ambientales incluyen: 

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="min-height: 580px;")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b El aprovechamiento de recursos naturales

          p.text-center Abarca la utilización de recursos renovables, como la madera y la energía solar, que pueden ser gestionados de manera sostenible sin agotarlos, así como recursos no renovables, como el petróleo y el carbón, cuya extracción es finita y requiere una gestión responsable para minimizar impactos ambientales. La clave radica en equilibrar la satisfacción de las necesidades presentes con la conservación de estos recursos para las generaciones futuras, promoviendo así la sostenibilidad y la responsabilidad ambiental.


      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="min-height: 580px;")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Contaminación
          p.text-center Se refiere a la introducción de sustancias dañinas o alteraciones perjudiciales en el aire, el suelo, el agua u otros componentes del entorno natural. Estas sustancias contaminantes pueden provenir de diversas fuentes, como la emisión de gases a la atmósfera o la contaminación de suelos y cuerpos de agua a través de vertimientos.


      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="min-height: 580px;")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Ocupación del territorio

          p.text-center Se refiere a proyectos o acciones que involucran la modificación de las condiciones biológicas y geográficas de un área determinada. Estas modificaciones pueden ser el resultado de actividades como la extracción de recursos naturales, la urbanización, la construcción de infraestructuras, la agricultura u otras acciones que afectan la disposición y el uso de la tierra. La ocupación del territorio puede tener un impacto significativo en el entorno natural, incluyendo la pérdida de hábitats, la fragmentación de paisajes, la degradación del suelo y la alteración de ecosistemas. 

    p.my-4(style="overflow-x: hidden !important") Dentro de los impactos ambientales, se pueden encontrar distintas clasificaciones de acuerdo con diversas propiedades o características, como se muestra a continuación:





</template>

<script>
export default {
  name: 'Tema2',
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
