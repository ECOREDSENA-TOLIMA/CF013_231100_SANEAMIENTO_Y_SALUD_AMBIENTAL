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
              h4 Ley 99 de 1993: 
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

    .cont_3_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_3_1 3.1 Recursos naturales      
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/3/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los recursos naturales son la columna vertebral de nuestro planeta, ya que proveen los componentes esenciales para mantener la vida en la Tierra. Desde la energía que nos brinda calor y luz hasta los alimentos que sustentan nuestras vidas, estos recursos son la base de la existencia humana. Van desde el sol radiante y el aire limpio hasta los minerales y las materias primas enterradas en la tierra. Sin embargo, en un mundo donde la demanda crece sin cesar y la explotación excesiva amenaza su sostenibilidad, la gestión responsable de estos recursos se ha convertido en una preocupación crítica. Los recursos naturales se dividen en dos categorías principales según su origen y su capacidad de regeneración:

    .tarjeta--container.row.my-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/3/3.svg', alt='')
          
        h2.text-center Renovables
        p Son aquellos que se encuentran disponibles de manera constante, ya que se generan a una velocidad superior a la que se consumen. Esto significa que, a pesar de su explotación y uso, estos recursos no se agotan fácilmente. Sin embargo, es importante destacar que, si la tasa de utilización supera significativamente la tasa de generación, estos recursos podrían estar en peligro de agotarse en el futuro.
        p Por ejemplo: agua, viento, radiación solar, madera, biocombustibles. 
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/3/11.svg', alt='')
          
        h2.text-center No renovables
        p Son elementos de la naturaleza que se encuentran en cantidades limitadas y cuyo ciclo de renovación es extremadamente lento en comparación con las tasas de extracción y explotación. A diferencia de los recursos renovables, estos no pueden ser producidos por el ser humano y, una vez agotados, no pueden ser fácilmente reemplazados en un plazo de tiempo humano razonable.
        p Por ejemplo: petróleo, gas natural, carbón, oro, metales.

    Separador.mt-5  

    .cont_3_2(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_3_2 3.2 Conservación ambiental    

    .row.align-items-center.my-3.col-lg-12.mb-4 
      .col-4
        figure
          img(src='@/assets/curso/temas/3/4.png').m-auto(data-aos="fade-right")            
      .col-8.pt-4
        p.mb-4(style="overflow-x: hidden !important") La conservación ambiental surge como respuesta a los problemas recurrentes que afectan tanto a la salud humana como a la de otros seres vivos en el planeta. Esta conservación debe ser profunda y genuina para minimizar los impactos humanos en el entorno y despertar la conciencia de un modelo de desarrollo sostenible que satisfaga las necesidades actuales sin comprometer las de las generaciones futuras. Por esta razón, han surgido movimientos sociales con el propósito de preservar los recursos naturales.

        p.mb-4(style="overflow-x: hidden !important") El conservacionismo se enfoca en la protección del medio ambiente a través de un movimiento social que aboga por políticas y leyes ecológicas. Sus valores fundamentales incluyen la biodiversidad, el equilibrio biótico y la armonía paisajística, entre otros. Es importante señalar que el conservacionismo difiere de las posturas de los ecologistas, ya que estos últimos abogan por la no explotación de los recursos naturales, mientras que los conservacionistas promueven una explotación responsable y sostenible en términos económicos, sociales y ambientales.

    p.py-3 La conservación del medio ambiente se fundamenta en diversas razones: 

    .tarjeta.tarjeta--azul.p-4.my-5(data-aos="fade-right" style="background-color:#E7FFD1")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones científicas <br>
            p.mb-5 Respaldan la necesidad de preservar la biodiversidad genética para mantener la vida en la Tierra. Los daños ecológicos actuales pueden tener consecuencias químicas y biológicas irreversibles que ponen en riesgo la salud humana y la supervivencia de las especies en el futuro. La variabilidad genética es crucial para que las especies se adapten a cambios ambientales, lo que afecta la evolución y la resiliencia de los ecosistemas, así como la seguridad alimentaria y la salud de la humanidad. La pérdida de diversidad genética podría limitar la capacidad de las especies para enfrentar amenazas como enfermedades y el cambio climático.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/5.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones económicas
            p La explotación sustentable de los recursos naturales es fundamental por razones económicas, ya que permite que estos recursos tengan el tiempo necesario para regenerarse y, por lo tanto, sean más rentables a largo plazo. La no destrucción de los hábitats en los que se encuentran contribuye a mantener la biodiversidad y preservar los ecosistemas, lo que a su vez respalda la estabilidad económica a largo plazo. La sobreexplotación y la degradación de los recursos naturales pueden tener costos significativos a nivel económico, lo que resalta la importancia de una gestión responsable y sostenible de estos recursos para garantizar su disponibilidad en el futuro.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/6.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones culturales <br>
            p.mb-5 Son un aspecto esencial de la conservación ambiental, ya que muchos territorios en los que se explotan los recursos naturales tienen un valor cultural y tradicional significativo para diversas comunidades. Estos lugares pueden no solo ser atractivos desde una perspectiva turística, sino que también representan sitios de importancia mística y cultural para las poblaciones locales y para la identidad de cada país. La preservación de estos lugares no solo conserva la biodiversidad y los recursos naturales, sino que también protege el patrimonio cultural y espiritual de las comunidades, promoviendo la diversidad y la riqueza de las tradiciones y las creencias en todo el mundo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/7.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones éticas <br>
            p.mb-5 Son fundamentales en la conservación ambiental, ya que se basan en la obligación moral de proteger el bien común de todos los habitantes de la Tierra. La conservación de los recursos naturales y la biodiversidad no solo es una cuestión de interés propio, sino una responsabilidad hacia las generaciones futuras y hacia todas las formas de vida en el planeta. La ética ambiental reconoce que el ser humano está interconectado con la naturaleza y tiene la responsabilidad de preservarla para las generaciones presentes y futuras. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/8.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones sociales
            p La explotación descontrolada de los recursos naturales suele tener un impacto negativo en la sociedad, afectando especialmente a comunidades vulnerables que enfrentan la pobreza y condiciones de trabajo precarias. Esto puede resultar en enfermedades y agravar aún más su situación. La conservación ambiental se convierte en una cuestión social crucial para proteger a estas comunidades y mejorar sus condiciones de vida, al mismo tiempo que se preservan los recursos naturales y se fomenta un desarrollo más sostenible.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/9.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones legales <br>
            p.mb-5 El cumplimiento de las leyes y regulaciones ambientales es esencial para garantizar que los derechos humanos sean respetados y que las personas puedan vivir en un entorno saludable y seguro. Las leyes a nivel local, nacional e internacional desempeñan un papel fundamental en la protección de la salud y el bienestar de las personas al establecer estándares para la conservación de los recursos naturales y la prevención de daños ambientales. Esto contribuye a mantener un equilibrio entre el desarrollo económico y la protección del entorno, asegurando que se satisfagan las necesidades básicas de las generaciones actuales y futuras.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/3/10.png', alt='')



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
