<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Promotoría ambiental

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/4/1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La promotoría ambiental desempeña un papel fundamental en la promoción de la conciencia y el cuidado del medio ambiente, contribuyendo a la construcción de un futuro basado en modelos de desarrollo sostenible. Los promotores ambientales son actores clave en la educación ambiental y lideran proyectos y programas destinados a proteger el medio ambiente y fomentar la sensibilización y la educación en sus comunidades. Su labor se enmarca en la participación ciudadana, lo que incluye supervisar la gestión ambiental y organizar a las comunidades para abordar problemas ambientales. Entre sus funciones se encuentran:


    .row.justify-content-center.mb-5
      .col-lg-11.position-relative

        .crd.py-1
          .row.align-items-center
            .col-1
              figure
                img(src="@/assets/curso/temas/4/2.svg", alt="alt").img150
            .col.m-1
              .titulo-principal.color-acento-botones.pt-4  Conocer y difundir todas las políticas referentes a la educación ambiental para dar a conocer al público sus diferentes estrategias y objetivos. 
        
        .crd.py-1 
          .row.align-items-center
            .col-1
              figure
                img(src="@/assets/curso/temas/4/3.svg", alt="alt").img150
            .col.m-1
              .titulo-principal.color-acento-botones.pt-4 El desarrollo de los diferentes procesos de gestión para lograr sensibilizar, educar y capacitar a la comunidad. 

        .crd.py-1
          .row.align-items-center
            .col-1
              figure
                img(src="@/assets/curso/temas/4/4.svg", alt="alt").img150
            .col.m-1
              .titulo-principal.color-acento-botones.pt-4 Articular las organizaciones con índoles sociales a los procesos ambientales, bien sea locales o regionales. 

        .crd.py-1
          .row.align-items-center
            .col-1
              figure
                img(src="@/assets/curso/temas/4/5.svg", alt="alt").img150
            .col.m-1
              .titulo-principal.color-acento-botones.pt-4  Estará encargado de estimular la participación ciudadana para garantizar que las comunidades se organicen en pro de satisfacer sus necesidades. 
        
        .crd.py-1  
          .row.align-items-center
            .col-1
              figure
                img(src="@/assets/curso/temas/4/6.svg", alt="alt").img150
            .col.m-1
              .titulo-principal.color-acento-botones.pt-4  Ser un intermediario de la comunidad y las instituciones.

    p.py-3 En Colombia, el Ministerio de Ambiente y Desarrollo Sostenible, ha implementado el “Programa Promotores Ambientales Comunitarios”, como parte de la Política Nacional de Educación Ambiental "Formación de Educadores y Dinamizadores Ambientales", con el objetivo de fomentar y mejorar la participación ciudadana en la planificación, gestión y seguimiento de políticas, planes, programas y proyectos que promuevan el desarrollo sostenible y la educación ambiental a nivel local y regional. Las funciones de los promotores ambientales comunitarios incluyen:

    PasosA.color-acento-contenido.mb-5(tipo="l")
      div
        p Conocer y difundir la Política Nacional de Educación Ambiental y sus estrategias.
      div
        p Adelantar los procesos que sean necesarios para una correcta gestión de la sensibilización, educación y capacitación de las comunidades.
      div
        p Articular las organizaciones sociales con los procesos ambientales que se realicen a nivel local y regional. 
      div
        p Fortalecer la participación ciudadana y la capacidad que tienen para organizarse y tomar decisiones. 
      div
        p Ser el intermediario entre la comunidad y las instituciones territoriales.
      div
        p Participar de los procesos de planeación de la gestión ambiental. 


</template>

<script>
export default {
  name: 'Tema3',
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
