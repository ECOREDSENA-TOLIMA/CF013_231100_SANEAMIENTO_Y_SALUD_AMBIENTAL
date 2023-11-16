<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
  
  
      .row.align-items-center.my-3.col-lg-12.m-0        
        p.mb-2.py-1(style="overflow-x: hidden !important") Los componentes ambientales son elementos fundamentales que constituyen el entorno natural. Comprenden factores bióticos, como la flora y la fauna, así como factores abióticos, como el agua, el aire, el suelo y el clima. Estos componentes interactúan de manera compleja y delicada para mantener el equilibrio ecológico en el planeta. La salud y la calidad de vida de los seres vivos, incluyendo a los seres humanos, dependen en gran medida de la integridad de estos componentes. La conservación y la gestión sostenible de los recursos naturales son cruciales para preservar la biodiversidad y garantizar un ambiente saludable para las generaciones futuras.
  
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com//embed/fVcNyFnnm_8" title="Video Huella Hidrica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
      
  
  
  
  
      
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
