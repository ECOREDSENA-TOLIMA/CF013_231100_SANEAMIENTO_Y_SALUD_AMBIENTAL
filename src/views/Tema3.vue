<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normatividad ambiental

    p.py-5 Colombia, considerado el segundo país más megadiverso del mundo debido a su riqueza en ecosistemas y biodiversidad, cuenta con una amplia normativa ambiental para garantizar la conservación y preservación de estos recursos naturales valiosos. Las principales normativas ambientales en Colombia son las siguientes: 

    .row
      .col-4.align-items-center
        figure.pt-5.mt-5.align-items-center
          img.align-items-center(src='@/assets/curso/temas/3/1.svg', alt='Texto que describa la imagen')
      .col-8
        LineaTiempoE.color-acento-contenido
          .row(titulo="1979")
            .col-lg-12.mb-0.mb-lg-0
              h4 Ley 9 de 1979: 
              p Esta ley establece normas sobre el uso, manejo y conservación de los recursos naturales renovables y la protección del medio ambiente.
          .row(titulo="1991")
            .col-lg-12.mb-0.mb-lg-0
              h4 Constitución Política de 1991: 
              p Esta ley establece el Sistema Nacional Ambiental (SINA) y define los principios y objetivos para la conservación, protección y restauración del ambiente y los recursos naturales en Colombia.
          .row(titulo="1993")
            .col-lg-12.mb-0.mb-lg-0
              h4 Ley 99 d e 1993: 
              p Las personas con discapacidad incluyen a aquellas que tengan deficiencias físicas, mentales, intelectuales o sensoriales a largo plazo que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.
          .row(titulo="")
            .col-lg-12.mb-0.mb-lg-0
              h4 Acuerdos internacionales:
              p  Colombia es parte de acuerdos internacionales relacionados con la conservación del medio ambiente y la biodiversidad, como el Convenio sobre la Diversidad Biológica.
          .row(titulo="2001")
            .col-lg-12.mb-0.mb-lg-0
              h4 Ley 685 de 2001:
              p  Regula la exploración y explotación de recursos minerales en Colombia, incluyendo la protección del entorno y las comunidades locales.
          .row(titulo="2009")
            .col-lg-12.mb-4.mb-lg-0
              h4 Ley 1333 de 2009:
              p Esta ley regula las sanciones y procedimientos administrativos en materia ambiental. Establece las infracciones y sanciones por incumplimiento de las normativas ambientales.
          .row(titulo="2013")
            .col-lg-12.mb-0.mb-lg-0
              h4 Resolución 494 de 2013:
              p Regula los permisos de emisiones atmosféricas y las normas de calidad del aire.            
          .row(titulo="2015")
            .col-lg-12.mb-0.mb-lg-0
              h4 Decreto 1076 de 2015:
              p Regula la elaboración de Estudios de Impacto Ambiental (EIA) y la obtención de licencias ambientales para proyectos que puedan tener un impacto significativo en el entorno.
          .row(titulo="")
            .col-lg-12.mb-0.mb-lg-0
              h4 Resolución 631 de 2015:
              p Establece los requisitos técnicos para la formulación del Plan de Gestión Ambiental (PGA) en el marco de los EIA.
          .row(titulo="2016")
            .col-lg-12.mb-0.mb-lg-0
              h4 Resolución 668 de 2016:
              p Esta resolución establece el procedimiento para la evaluación y seguimiento de los EIA y la formulación de Planes de Manejo Ambiental (PMA).
          .row(titulo="")
            .col-lg-12.mb-0.mb-lg-0
              h4 Normas sectoriales:
              p Existen normativas específicas para diferentes sectores, como minería, energía, agua, biodiversidad, entre otros. Estas normas detallan los requisitos ambientales para cada sector.

       

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
