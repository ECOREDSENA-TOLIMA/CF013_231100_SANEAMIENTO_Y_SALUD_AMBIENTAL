<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Educación ambiental

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12          
        .row 
          .bloque-texto-g.color-primario.p-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/5/1.png')})`}"
            )
            .bloque-texto-g__texto.p-4.my-3
              p.pt-1.pb-3 La educación ambiental se concibe como un proceso educativo integral y continuo, destinado a proporcionar habilidades y conocimientos que permiten comprender la naturaleza y su equilibrio ecológico. Este proceso abarca todas las etapas de la vida, desde la infancia hasta la vejez, con el propósito de prevenir y resolver los problemas ambientales presentes y futuros. La educación ambiental no solo se centra en la explicación de los problemas naturales, sino también en los aspectos sociales y transformados que manifiestan las diferentes responsabilidades de los sectores sociales. Para abordar estos desafíos, se requieren acciones inmediatas y a largo plazo y la apropiación de los componentes importantes de la educación ambiental.

    .row.justify-content-center.my-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b  Figura 2.] 
            i  Componentes de la educación ambiental

        .row
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/5/2.svg' alt='En la figura 2 se muestran los componentes de la educación ambiental, para un proceso integral y continuo.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/5/3.svg" data-aos="zoom-in-up")

    .row.align-items-center.my-3.col-lg-12.mb-3            
      .col.p-0.m-0(style="background:#E7FFD1")
        p.mb-0.px-4.py-0(style="overflow-x: hidden !important") La década de los 70 presenció el surgimiento de la educación ambiental en respuesta a la creciente preocupación global por el deterioro evidente de los recursos naturales causado por la actividad humana. Este deterioro puso en tela de juicio la sostenibilidad del paradigma de desarrollo industrial de la época, llevando a países de todo el mundo a reconocer la urgente necesidad de realizar cambios significativos en sus actividades y enfoques. En este contexto, las ciencias de la educación emergieron como una estrategia pedagógica fundamental en los procesos de aprendizaje, destinada a facilitar la comprensión de la realidad ambiental en niveles locales, regionales y nacionales.

        p.p-4.mb-0(style="background:#fff") La educación ambiental se convirtió en un enfoque que aborda el creciente problema medioambiental desde la perspectiva de formar individuos responsables y comprometidos con su entorno. Se promueve un sentido de pertenencia y cuidado del espacio que ocupan, con el objetivo de garantizar su conservación y sostenibilidad. La educación ambiental se convierte en una respuesta concreta al deterioro continuo del entorno, preparando a las personas desde temprana edad para interactuar de manera positiva con su entorno, transformarlo de acuerdo a sus necesidades, y contribuir a su preservación a largo plazo.
      .col-auto
        figure
          img(src='@/assets/curso/temas/5/4.png').m-auto(data-aos="fade-right")

    p.py-5 A continuación, se presentan los principales hitos históricos en la evolución de la educación ambiental:

    .row.justify-content-center.my-5(data-aos="fade-right")
      .col-lg-10 
        .titulo-sexto.mb-0.color-acento-contenido.mb-4
          p.mb-0 #[b  Figura 3.] 
            i  Línea de tiempo desarrollo de la educación ambiental

        .row
          figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
            img.mb-1(src='@/assets/curso/temas/5/5.svg' alt='En la figura 3 se representa una línea de tiempo sobre el desarrollo educativo ambiental incluyendo acontecimientos de los años 1972 al 2015.').m-auto(data-aos="fade-right")
          figure.movil.mt-0
            .row.justify-content-center.d-lg-none.d-md-none        
              img(src="@/assets/curso/temas/5/6.svg" data-aos="zoom-in-up")

    Separador.mt-5  

    .cont_5_1(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_5_1  5.1 Capacitación   

    p.py-3 La capacitación se refiere a un conjunto de actividades educativas diseñadas para ampliar el conocimiento y las habilidades en un tema específico. Es una herramienta fundamental para transmitir información de manera efectiva, ya sea en contextos individuales o grupales. La capacitación es un proceso que facilita la adaptación a diversas circunstancias y la capacidad de responder eficazmente a ellas, requiriendo el desarrollo de habilidades a través del aprendizaje. A continuación, se presentan los diferentes tipos de capacitación:

    .tarjeta.tarjeta--azul.p-4.my-5(data-aos="fade-right" style="background-color:#E7FFD1")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Aprendizaje pasivo <br>
            p.mb-5 El participante es el objeto receptor pasivo de los conocimientos que está impartiendo el instructor, ya sea de manera directa o indirecta. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/7.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Aprendizaje activo
            p Le exige al participante actuar y pensar para que logre descubrir el conocimiento. El instructor y los medios didácticos juegan un papel que consiste en facilitar, guiar y estimular al aprendiz.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/8.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Capacitación grupal <br>
            p.mb-5 Esta capacitación es brindada a un grupo de participantes y se genera una enseñanza colectiva.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/9.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Capacitación individual <br>
            p.mb-5 Es una capacitación adaptada directamente a las características individuales de cada participante, en la cual se consideran sus potenciales y limitaciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/10.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Razones sociales
            p La explotación descontrolada de los recursos naturales suele tener un impacto negativo en la sociedad, afectando especialmente a comunidades vulnerables que enfrentan la pobreza y condiciones de trabajo precarias. Esto puede resultar en enfermedades y agravar aún más su situación. La conservación ambiental se convierte en una cuestión social crucial para proteger a estas comunidades y mejorar sus condiciones de vida, al mismo tiempo que se preservan los recursos naturales y se fomenta un desarrollo más sostenible.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/11.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Capacitación asertiva <br>
            p.mb-5 Esta es aplicada cuando existen dificultades de comunicación entre los líderes y sus colaboradores, cuando las tareas no son debidamente elaboradas por la falta de comprensión de las reglas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/12.png', alt='')

    Separador.mt-5  

    .cont_5_2(style="position:relative;")
      .titulo-segundo.color-acento-contenido(style="position:relative")
        h2#t_5_2   5.2 Técnicas educativas 

    p.py-3 La educación, como cualquier otra actividad humana, requiere la aplicación de técnicas específicas por parte del educador. Estas técnicas se dirigen al manejo efectivo del aula, la organización de los contenidos, la interacción entre el educador y los alumnos para facilitar la construcción del conocimiento, y la evaluación de los resultados. La preparación profesional del educador es fundamental en el proceso de evaluación. A continuación, se resumen las técnicas educativas:


    .tarjeta.tarjeta--azul.p-4.my-5(data-aos="fade-right" style="background-color:#E7FFD1")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Técnicas para el aprendizaje asistido <br>
            p.mb-2 ● Entrevista.
            p.mb-2 ● Estudio dirigido exegética.
            p.mb-2 ● Exposición didáctica.
            p.mb-2 ● Redescubrimiento.
            p.mb-2 ● Resolución de problemas.
            p.mb-2 ● Seminario.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/13.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Técnicas para el aprendizaje colaborativo
            p.mb-2 ● Argumentación (interrogatorio). 
            p.mb-2 ● Debate. 
            p.mb-2 ● Entrevista. 
            p.mb-2 ● Foro abierto.
            p.mb-2 ● Discusión dirigida.
            p.mb-2 ● Lluvia de ideas. 
            p.mb-2 ● Mesa redonda. 
            p.mb-2 ● Panel Phillips 6-6.
            p.mb-2 ● Simposio. 
            p.mb-2 ● Sociodrama. 
            p.mb-2 ● Taller.



          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/14.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Técnicas para el aprendizaje de aplicación
            p.mb-2 ● Cuestionario o encuesta. 
            p.mb-2 ● Estudio de caso.
            p.mb-2 ● Experiencia directa.
            p.mb-2 ● Lista de cotejo.
            p.mb-2 ● Observación.
            p.mb-2 ● Redescubrimiento.
            p.mb-2 ● Registro anecdótico.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/15.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Técnicas para el aprendizaje autónomo
            p.mb-2 ● Analogía biográfica.
            p.mb-2 ● Bosquejo esquemático. 
            p.mb-2 ● Cadena de secuencias.
            p.mb-2 ● Cuadro sinóptico.
            p.mb-2 ● Diagrama jerárquico.
            p.mb-2 ● Estudio dirigido.
            p.mb-2 ● Investigación bibliográfica. 
            p.mb-2 ● Mapa conceptual. 
            p.mb-2 ● Mapa de un cuento.
            p.mb-2 ● Mapa del carácter. 
            p.mb-2 ● Mapa mental. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/5/16.png', alt='')



        
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
