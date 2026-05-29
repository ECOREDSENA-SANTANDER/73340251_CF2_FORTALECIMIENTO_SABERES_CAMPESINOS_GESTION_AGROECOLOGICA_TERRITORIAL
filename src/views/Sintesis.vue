<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La comprensión y caracterización del sistema productivo campesino constituye un proceso fundamental para el diseño e implementación de planes de mejora orientados al fortalecimiento de la producción rural. El reconocimiento de las condiciones del predio, los recursos disponibles, las prácticas productivas y los saberes campesinos permite identificar las dinámicas que influyen en el funcionamiento del sistema, así como sus principales problemáticas y potencialidades.

    p Este análisis integral requiere una visión sistémica que articule los componentes productivos, ambientales, sociales y económicos del territorio, permitiendo comprender las relaciones existentes entre ellos. A partir de esta caracterización, es posible establecer diagnósticos pertinentes que orienten la toma de decisiones y la formulación de acciones concretas, viables y ajustadas a las condiciones reales del productor.

    p Asimismo, la implementación de metodologías participativas fortalece la recolección y análisis de la información, promoviendo la vinculación activa de los actores del territorio en la identificación de necesidades y en la construcción de soluciones. Este enfoque favorece la apropiación de los procesos, el intercambio de conocimientos y la generación de propuestas acordes con el contexto local.

    p Finalmente, este componente formativo contribuye al desarrollo de competencias que permiten al aprendiz analizar, interpretar y mejorar los sistemas productivos campesinos mediante la formulación de planes de mejora estructurados. De esta manera, se promueve la optimización de los recursos, el incremento de la productividad y la sostenibilidad de las actividades agropecuarias, en coherencia con las dinámicas del territorio y las necesidades del sector rural.


    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
