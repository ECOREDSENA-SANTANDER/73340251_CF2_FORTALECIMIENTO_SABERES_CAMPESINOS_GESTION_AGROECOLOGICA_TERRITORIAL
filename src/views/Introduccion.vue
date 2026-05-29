<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-7
        .row.justify-content-center.mb-3
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/2.svg', alt='')
          .col-sm-12.col-lg-10
              p.mb-0 La producción agropecuaria constituye el eje central de la economía campesina, al garantizar la seguridad alimentaria, la generación de ingresos y la permanencia de las familias en el territorio. En este contexto, el conocimiento detallado del sistema productivo se convierte en un elemento fundamental para comprender su funcionamiento, identificar sus limitaciones y reconocer sus potencialidades.
        p.mb-0 Los sistemas productivos rurales están conformados por múltiples componentes que interactúan entre sí, como los cultivos, el suelo, el clima, los recursos disponibles y las prácticas de manejo implementadas por los productores. Estas interacciones determinan el desempeño productivo, la sostenibilidad y la capacidad de adaptación frente a cambios ambientales y económicos. Por ello, es necesario realizar procesos de caracterización que permitan analizar de manera integral la realidad del predio.
    p.mb-5 El diagnóstico participativo se posiciona como una herramienta clave en este proceso, ya que facilita la recolección de información desde la experiencia del productor, promoviendo la identificación de problemáticas y oportunidades de mejora. A través del uso de técnicas participativas, como el mapeo del predio, la observación directa y el diálogo de saberes, se logra una comprensión más precisa y contextualizada del sistema productivo.


    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        p.mb-5 A partir de esta caracterización, se hace posible la formulación de planes de mejora orientados a optimizar la producción, fortalecer la organización del predio y reducir los riesgos asociados a factores climáticos, fitosanitarios y económicos. Estos planes permiten establecer acciones concretas, priorizadas y viables, que contribuyen al mejoramiento continuo del sistema productivo.  Asimismo, el seguimiento mediante indicadores y la articulación con actores del territorio fortalecen la sostenibilidad de las acciones implementadas, facilitando la toma de decisiones informadas y la adaptación a las condiciones cambiantes del entorno.
        .bg-color-2.px-5.py-4
          p.mb-0 Este componente formativo tiene como propósito desarrollar en el aprendiz competencias para analizar, interpretar y transformar sistemas productivos, a partir de procesos de caracterización, planificación y evaluación. De esta manera, se promueve la construcción de propuestas productivas más eficientes, resilientes y sostenibles, contribuyendo al desarrollo rural y al bienestar de las comunidades campesinas.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/3.png', alt='')

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
