<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Planificación del sistema productivo
      
      img.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t3/1.png', alt='')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') La planificación del sistema productivo es un proceso fundamental que permite organizar de manera estratégica las actividades del predio, orientando el uso eficiente de los recursos y la toma de decisiones informadas. A partir del análisis previo del diagnóstico, se establecen acciones concretas que buscan mejorar la productividad, la sostenibilidad y la rentabilidad del sistema.
      p.mb-5 Este proceso integra aspectos técnicos, económicos y ambientales, permitiendo al productor anticiparse a posibles dificultades, optimizar tiempos de trabajo y garantizar una mejor organización de las actividades agrícolas.
      
      
      
      
      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Plan de mejora
      
      .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/2.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-5
          p.mb-0 El plan de mejora es una herramienta de gestión fundamental que permite organizar, priorizar y orientar acciones estratégicas encaminadas al fortalecimiento del sistema productivo del predio. Se constituye como un instrumento de planificación que articula el diagnóstico, la toma de decisiones y la ejecución de actividades, con el propósito de mejorar la productividad, la sostenibilidad y las condiciones de vida del productor y su familia.
      
      
      .bg-full-width.mb-0.bg-fondo-2(data-aos='fade-right').align-items-end
        .p-full-width
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-8
              p.mb-5 Su formulación parte de los resultados obtenidos en el diagnóstico participativo, donde se identifican las principales problemáticas, limitaciones y potencialidades del sistema productivo. A partir de este análisis, se priorizan aquellas situaciones que requieren intervención inmediata o que generan mayor impacto en el desempeño del predio, permitiendo enfocar los esfuerzos de manera eficiente y evitar la dispersión de recursos.
              .bg-color-6.p-5.mb-0
                p.mb-0 El plan de mejora no se limita a la identificación de problemas, sino que establece de manera estructurada soluciones concretas, viables y adaptadas a las condiciones reales del contexto. Esto implica definir objetivos claros, actividades específicas, responsables, tiempos de ejecución y recursos necesarios, lo que facilita su implementación y seguimiento.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/3.png', alt='')
      
      p.mb-5(data-aos='fade-right') Además, este plan promueve un enfoque de mejoramiento continuo, ya que no se trata de una acción puntual, sino de un proceso dinámico que se ajusta a medida que cambian las condiciones del entorno o se obtienen nuevos resultados. En este sentido, permite evaluar periódicamente los avances, realizar ajustes y fortalecer las estrategias implementadas.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-4 Otro aspecto relevante es su carácter participativo, ya que involucra al productor y, en muchos casos, a la comunidad en la definición de acciones y en la toma de decisiones. Esto favorece la apropiación del proceso, incrementa el compromiso y mejora la sostenibilidad de las soluciones planteadas.
          p.mb-0 Finalmente, el plan de mejora se convierte en una herramienta clave para la planificación agropecuaria, ya que facilita la organización del predio, optimiza el uso de los recursos disponibles y contribuye al desarrollo de sistemas productivos más eficientes, resilientes y sostenibles, en armonía con el entorno y las necesidades del territorio.

      p.mb-5(data-aos='fade-right') Se invita al aprendiz a explorar el siguiente recurso, que permite comprender sobre #[b el plan de mejora: transformando el diagnóstico en acción sostenible.]

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t3/5.png')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-3.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: el plan de mejora: transformando el diagnóstico en acción sostenible."
              :audio="podcast"
          )

      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos del plan de mejora
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-7
            p.mb-0 Se presentan los componentes que estructuran la formulación del plan de mejora, permitiendo organizar de manera lógica y coherente las acciones orientadas al fortalecimiento del sistema productivo. Estos elementos facilitan la planificación, ejecución y seguimiento de las actividades, asegurando que las intervenciones sean pertinentes, medibles y ajustadas a las condiciones del predio.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')
      
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
         p.mb-0  #[b Tabla 14.] Elementos del plan de mejora
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th Elemento
              th Descripción
              th Ejemplo
              th Importancia
          tbody
            tr
              td Identificación de problemáticas
              td Reconocimiento y análisis de las principales limitaciones del sistema productivo, considerando aspectos técnicos, ambientales, económicos y sociales. Se basa en el diagnóstico participativo.
              td Baja fertilidad del suelo, presencia de plagas, falta de agua, bajos rendimientos, dificultades de comercialización.
              td Permite enfocar las acciones en los problemas más relevantes.

            tr
              td Definición de acciones
              td Establecimiento de actividades concretas, viables y adaptadas al contexto, orientadas a solucionar o mejorar las condiciones identificadas.
              td Implementar compostaje, mejorar riego, diversificar cultivos, capacitar en manejo de plagas.
              td Facilita la intervención directa sobre los problemas detectados.

            tr
              td Asignación de responsables
              td Determinación de las personas o actores encargados de ejecutar cada actividad, promoviendo organización y compromiso.
              td Productor, familia, técnico agrícola, asociación campesina.
              td Garantiza el cumplimiento de las actividades y la distribución de tareas.

            tr
              td Recursos necesarios
              td Identificación de los insumos, herramientas, mano de obra, conocimientos y recursos económicos requeridos.
              td Semillas, herramientas agrícolas, abonos orgánicos, capacitación técnica.
              td Permite planificar y asegurar la viabilidad de las acciones.

            tr
              td Cronograma de ejecución
              td Organización de las actividades en el tiempo, definiendo fechas de inicio, duración y secuencia de las acciones.
              td Siembra en marzo, fertilización en abril, cosecha en julio.
              td Facilita el seguimiento y evita retrasos o desorden en la ejecución.

            tr
              td Seguimiento y evaluación
              td Proceso de revisión periódica de avances, resultados e impactos, permitiendo ajustes y mejoras continuas.
              td Evaluar crecimiento del cultivo, comparar producción antes y después de la intervención.
              td Asegura el logro de objetivos y mejora la toma de decisiones.

            tr
              td Objetivos del plan
              td Definición clara de lo que se desea lograr con la implementación del plan de mejora.
              td Aumentar la productividad del cultivo en un 20 % o mejorar la fertilidad del suelo.
              td Da dirección al proceso y permite medir resultados.

            tr
              td Indicadores de seguimiento
              td Parámetros que permiten medir el cumplimiento de las acciones y los resultados obtenidos.
              td Rendimiento por hectárea, reducción de plagas, aumento de materia orgánica en el suelo.
              td Facilitan la evaluación objetiva del plan.

            tr
              td Priorización de acciones
              td Organización de las actividades según su nivel de importancia, urgencia o impacto.
              td Atender primero el problema de agua antes que ampliar el área cultivada.
              td Optimiza recursos y mejora la eficiencia del plan.

            tr
              td Resultados esperados
              td Cambios o mejoras que se esperan obtener tras la implementación del plan.
              td Suelos más fértiles, mayor producción, reducción de costos.
              td Permite visualizar los beneficios del proceso.


      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia del plan de mejora
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-0 Se destaca el valor del plan de mejora como instrumento de gestión para orientar acciones que fortalezcan el sistema productivo. Su implementación permite dar dirección al proceso de intervención, facilitando la organización de actividades y la toma de decisiones con base en criterios técnicos y contextuales. También permite priorizar acciones según su impacto, mejora la eficiencia en el uso de los recursos y promover la mejora continua del sistema productivo. 
      
      
      Separador
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-cus
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
            h2 3.2 Análisis DOFA aplicado al predio
          p.mb-3 El análisis DOFA es una herramienta estratégica que permite comprender de manera integral la situación del sistema productivo, facilitando la toma de decisiones fundamentadas. Su principal aporte radica en organizar la información obtenida del diagnóstico, permitiendo identificar relaciones entre factores internos y externos que inciden en el desempeño del predio.
          p.mb-0 Más allá de la identificación de variables, el análisis DOFA orienta la formulación de estrategias, promoviendo un enfoque proactivo que permite al productor anticiparse a escenarios, optimizar sus capacidades y adaptarse a las condiciones del entorno.
        .col-sm-12.col-lg-6
          img(src='@/assets/curso/temas/t3/8.svg', alt='')
      
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Componentes del análisis DOFA

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-brown")
            .row.justify-content-center.mb-0.align-items-end(titulo="Fortalezas (Factores internos positivos)")
              .col-12
                p.mb-4 Corresponden a los recursos, capacidades y condiciones favorables con las que cuenta el predio. Estas pueden incluir la experiencia del productor, la fertilidad del suelo, la disponibilidad de agua, la diversidad de cultivos o el uso de prácticas sostenibles.
                p.mb-0 #[b NOTA:] Su identificación permite potenciar lo que ya funciona adecuadamente.
            .row.justify-content-center.mb-0.align-items-end(titulo="Debilidades (Factores internos a mejorar)")
              .col-12
                p.mb-4 Son limitaciones dentro del sistema productivo que afectan su desempeño. Pueden estar relacionadas con deficiencias técnicas, baja productividad, falta de infraestructura, escasa planificación o limitaciones en el acceso a insumos.
                p.mb-0 #[b NOTA:] reconocerlas es clave para priorizar acciones de mejora.
            .row.justify-content-center.mb-0.align-items-end(titulo="Oportunidades (Factores externos favorables)")
              .col-12
                p.mb-4 Son condiciones del entorno que pueden ser aprovechadas para mejorar el sistema productivo, como programas de apoyo institucional, acceso a nuevos mercados, avances tecnológicos o condiciones climáticas favorables.
                p.mb-0 #[b NOTA:] permiten ampliar las posibilidades de crecimiento y desarrollo.
            .row.justify-content-center.mb-0.align-items-end(titulo="Amenazas (Factores externos de riesgo)")
              .col-12
                p.mb-4 Son situaciones externas que pueden afectar negativamente el predio, como variabilidad climática, plagas y enfermedades, fluctuación de precios o dificultades en la comercialización.
                p.mb-0 #[b NOTA:] su identificación permite anticipar riesgos y diseñar estrategias de mitigación. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png', alt='')
      
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación en el predio
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-3 En el ámbito rural, esta herramienta se adapta a las características del predio, considerando aspectos como la disponibilidad de recursos naturales, el conocimiento del productor, las condiciones del mercado y los factores climáticos.
            p.mb-0 Su aplicación permite interpretar el sistema productivo como un conjunto dinámico, donde cada elemento influye en los resultados obtenidos. El análisis DOFA permite:
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-6.col-xl-3.mb-cus
          .tarjeta-numerada.color-primario.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 1
            p.text-center.fw-bold.mb-0 Diseñar estrategias para fortalecer las capacidades existentes. 
        .col-sm-12.col-md-6.col-lg-6.col-xl-3.mb-cus
          .tarjeta-numerada.color-secundario.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 2
            p.text-center.fw-bold.mb-0 Reducir o mitigar las debilidades identificadas. 
        .col-sm-12.col-md-6.col-lg-6.col-xl-3.mb-cus
          .tarjeta-numerada.color-acento-contenido.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 3
            p.text-center.fw-bold.mb-0 Aprovechar oportunidades del entorno. 
        .col-sm-12.col-md-6.col-lg-6.col-xl-3.mb-cus
          .tarjeta-numerada.color-acento-botones.p-5.hcard-1
            .tarjeta-numerada__numero
              .h2 4
            p.text-center.fw-bold.mb-0 Prevenir o enfrentar posibles riesgos. 
      
      
      
      
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Planificación del cultivo
      
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/11.png')})` }")
        
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 La planificación del cultivo es un proceso técnico que orienta la producción agrícola de manera organizada, considerando las condiciones específicas del predio y los objetivos del productor. Implica definir de manera anticipada las actividades necesarias para el establecimiento, manejo y cosecha de los cultivos.   Este proceso permite optimizar el uso del suelo, mejorar la productividad y reducir la incertidumbre en la producción.

      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aspectos clave de la planificación
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/12.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-3 Se presentan los elementos esenciales que orientan la organización y desarrollo de la planificación del cultivo dentro del sistema productivo. Estos aspectos permiten estructurar de manera lógica las decisiones relacionadas con la producción, facilitando la articulación entre los recursos disponibles, las condiciones del predio y los objetivos del productor.
            p.mb-0 Su comprensión contribuye a mejorar la eficiencia en la ejecución de las actividades agrícolas, optimizar el uso de insumos y fortalecer la capacidad de anticipación frente a posibles dificultades, favoreciendo un manejo más ordenado y sostenible del proceso productivo. 


      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
         p.mb-0  #[b Tabla 15.] Aspectos claves para la planificación
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 Aspecto
              th Descripción
          tbody
            tr
              td.py-4 Selección del cultivo
              td.py-4 Elección de especies y variedades adecuadas según las condiciones del suelo, clima y disponibilidad de recursos.

            tr
              td.py-4 Definición de metas productivas
              td.py-4 Establecimiento de objetivos claros y alcanzables en términos de producción y calidad.

            tr
              td.py-4 Organización de labores agrícolas
              td.py-4 Programación de actividades como preparación del terreno, siembra, fertilización, riego, control de plagas y cosecha.

            tr
              td.py-4 Manejo de recursos
              td.py-4 Uso eficiente de insumos, mano de obra y herramientas disponibles en el predio.

            tr
              td.py-4 Calendario agrícola
              td.py-4 Distribución de las actividades en el tiempo, teniendo en cuenta ciclos productivos y condiciones climáticas.

            tr
              td.py-4 Prevención de riesgos
              td.py-4 Identificación de posibles factores que puedan afectar el cultivo y definición de estrategias para minimizarlos.


      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia de la planificación del cultivo
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            p.mb-3 Se reconoce el valor de la planificación del cultivo como un proceso fundamental para organizar de manera anticipada las actividades agrícolas, permitiendo al productor orientar sus acciones de forma eficiente y acorde con las condiciones del predio. Su aplicación contribuye a mejorar la coordinación de las labores, optimizar el uso de los recursos disponibles y reducir la improvisación en el manejo del cultivo.
            p.mb-0 Asimismo, fortalece la capacidad de respuesta frente a factores que pueden afectar la producción, favoreciendo el logro de mejores resultados en términos de rendimiento, calidad y sostenibilidad del sistema productivo.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/13.png', alt='')







  </template>

<script>
import podcast from '@/assets/actividad/audio/success.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    podcast: podcast,
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
