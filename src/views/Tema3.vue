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

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10  
        .row.align-items-center.my-5.col-lg-12.m-auto  
          .col-sm-12.col-lg-12
            .titulo-sexto.mb-0.color-acento-contenido.mb-1
              p.mb-0 #[b Tabla 2.] 
                i Clasificación normativa ambiental
        .tabla-b.color-acento-contenido( alt='')
          table
            thead
              tr
              th(style="background-color:#FFAE7E") Clasificación
              th(style="background-color:#FFAE7E") Concepto
              th(style="background-color:#FFAE7E") Factores
             
            tbody    
            tr
              td Protección del ambiente
              td Son todas aquellas normas que tienen como propósito la prevención, reducción y eliminación de contaminaciones o afectaciones al medio ambiente. 
              td Se tienen en cuenta el cambio de procesos para prevenir emisiones atmosféricas y a su vez controles y mediciones en laboratorios especializados.  
            tr
              td Gestión de aguas residuales  
              td Estas normas están encaminadas en la prevención hacia la contaminación de aguas superficiales.  
              td Las redes de transporte de aguas y el tratamiento de sus residuos. 
            tr
              td Gestión de residuos
              td Se refiere a las actividades que tienen como objetivo prevenir la generación de residuos y así poder disminuir las afectaciones que tiene al ambiente. 
              td La recolección y transporte de los residuos es clave en este proceso, así mismo lo es el tratamiento y eliminación de residuos peligrosos. 
            tr
              td Protección y recuperación de suelos, aguas subterráneas y aguas superficiales
              td Son todas aquellas medidas para prevenir las filtraciones de contaminantes en los suelos y cuerpos de agua. 
              td Se usan para limpiar el suelo y cuerpos de agua de contaminantes que puedan traer repercusiones en la salud humana.
            tr
              td Atenuación de ruidos y vibraciones
              td Son las medidas que tienden a controlar los ruidos y vibraciones en su mayoría generadas por procesos industriales. 
              td Se realizan modificaciones preventivas de los procesos en la fuente, como lo son instalaciones de sistemas anti ruido y vibraciones. 
            tr
              td Protección de la biodiversidad y de los paisajes
              td Se refiere a aquellas actividades destinadas a la conservación y rehabilitación de especies de fauna y flora. 
              td Es la protección y rehabilitación de hábitat y especies que han sido intervenidos. 
            tr
              td Protección contra las radiaciones
              td Son todas aquellas normas que mediante mediciones pretenden reducir las consecuencias negativas que trae consigo las radiaciones. 
              td Se tiene en cuenta el tratamiento y transporte que tienen los residuos radiactivos. 
           
    Separador.mt-5  

    .cont_2_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_3_1 3.1 Recursos naturales      
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/3/2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los recursos naturales son la columna vertebral de nuestro planeta, ya que proveen los componentes esenciales para mantener la vida en la Tierra. Desde la energía que nos brinda calor y luz hasta los alimentos que sustentan nuestras vidas, estos recursos son la base de la existencia humana. Van desde el sol radiante y el aire limpio hasta los minerales y las materias primas enterradas en la tierra. Sin embargo, en un mundo donde la demanda crece sin cesar y la explotación excesiva amenaza su sostenibilidad, la gestión responsable de estos recursos se ha convertido en una preocupación crítica. Los recursos naturales se dividen en dos categorías principales según su origen y su capacidad de regeneración:



    p.pb-3 Se deben establecer las relaciones de causa y efecto entre aspectos y sus impactos, ya que esto ayuda a identificar cuáles son significativos y, por lo tanto, requieren atención y gestión prioritaria. La identificación de aspectos ambientales significativos y sus impactos asociados es fundamental para la toma de decisiones y la planificación de acciones de gestión ambiental.






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
