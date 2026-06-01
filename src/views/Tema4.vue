<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Seguimiento, articulación y sostenibilidad
      
      img.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t4/1.png', alt='')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Este componente orienta al aprendiz en la comprensión de los procesos necesarios para garantizar la continuidad, evaluación y mejora del sistema productivo. A través del seguimiento, la articulación con actores del territorio y la aplicación de principios de sostenibilidad, se busca fortalecer la capacidad de adaptación del predio y asegurar resultados a largo plazo.
      p.mb-0(data-aos='fade-right') El análisis continuo del sistema productivo permite tomar decisiones oportunas, optimizar recursos y mantener el equilibrio entre productividad, bienestar familiar y conservación de los recursos naturales.
      
      
      
      
      
      
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Indicadores agroecológicos
      
      
      .bloque-texto-g.bloque-texto-g.color-adiconoal-3.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/2.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-5
          p.mb-3 Los indicadores agroecológicos son herramientas de medición que permiten evaluar el estado, funcionamiento y evolución del sistema productivo desde una perspectiva integral. Estos indicadores no solo consideran aspectos productivos, sino también ambientales y sociales, facilitando una visión más completa del predio.
          p.mb-0 Su selección debe responder a las características específicas del sistema productivo, al tipo de cultivo o actividad desarrollada y a los objetivos planteados por el productor.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
         p.mb-0  #[b Tabla 16.] Tipos de indicadores agroecológicos
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 Indicador
              th Descripción
              th Ejemplo práctico
          tbody
            tr
              td Indicadores ambientales
              td Evalúan el estado y conservación de los recursos naturales del predio, considerando la calidad del suelo, la disponibilidad y uso del agua, así como la biodiversidad presente. Permiten identificar prácticas sostenibles o problemas como degradación, erosión o contaminación.
              td Análisis de fertilidad del suelo (pH, materia orgánica), presencia de lombrices, cobertura vegetal en el terreno, conservación de fuentes de agua, diversidad de cultivos y árboles.

            tr
              td Indicadores productivos
              td Miden el desempeño del sistema productivo en términos de rendimiento, eficiencia y estabilidad de la producción. Permiten evaluar si las prácticas implementadas están generando resultados adecuados en cantidad y calidad.
              td Producción por hectárea (kg/ha), cantidad de cosechas al año, eficiencia en el uso de insumos (fertilizantes, agua), porcentaje de pérdidas por plagas o enfermedades.

            tr
              td Indicadores económicos
              td Analizan la viabilidad financiera del sistema productivo, considerando costos, ingresos y rentabilidad. Facilitan la toma de decisiones para mejorar la sostenibilidad económica del predio.
              td Costos de producción (insumos, mano de obra), ingresos por venta de productos, margen de ganancia, relación costo-beneficio, diversificación de fuentes de ingreso.

            tr
              td Indicadores sociales
              td Evalúan el impacto del sistema productivo en la calidad de vida de la familia y la comunidad, incluyendo aspectos de participación, organización y acceso a recursos.
              td Nivel de bienestar familiar, acceso a alimentos, participación en asociaciones, acceso a asistencia técnica, equidad en la distribución de labores dentro de la familia.
      
      p.mb-0(data-aos='fade-right') La aplicación de los indicadores agroecológicos se realiza de acuerdo con las necesidades específicas del predio, permitiendo su adaptación a las condiciones del sistema productivo. Su medición se lleva a cabo mediante la observación directa, el registro de información y el seguimiento periódico, lo que posibilita comparar resultados a lo largo del tiempo y analizar la evolución del sistema. De esta manera, se convierten en una herramienta clave para la toma de decisiones fundamentadas en información real y contextualizada.
      
      
      
      
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Seguimiento y evaluación del sistema productivo
      
      
      .bloque-texto-g.bloque-texto-g--inverso.color-adiconoal-4.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/3.png')})` }")
        
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-3 El seguimiento es un proceso continuo que permite verificar el cumplimiento de las actividades planificadas y analizar el comportamiento del sistema productivo en el tiempo. A través de este proceso, se identifican avances, dificultades y posibles desviaciones frente a lo planificado.
          p.mb-0 La evaluación, por su parte, implica valorar los resultados obtenidos, comparándolos con los objetivos establecidos y los indicadores definidos, con el fin de determinar la efectividad de las acciones implementadas.
      
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
         p.mb-0  #[b Tabla 17.] Elementos del seguimiento
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.w-25 Elemento
              th Descripción
          tbody
            tr
              td.py-4 Control de actividades
              td.py-4 Verificación del cumplimiento de las labores programadas en el plan de mejora y en la planificación del cultivo.

            tr
              td.py-4 Registro de información
              td.py-4 Recolección sistemática de datos relacionados con producción, manejo del cultivo y uso de recursos.

            tr
              td.py-4 Análisis de resultados
              td.py-4 Interpretación de la información obtenida para identificar tendencias y resultados.

            tr
              td.py-4 Ajuste de acciones
              td.py-4 Modificación de estrategias o actividades según las necesidades identificadas.
      
      p.mb-0(data-aos='fade-right') La importancia del seguimiento y la evaluación radica en que permiten mejorar la eficiencia del sistema productivo mediante el control y análisis continuo de las actividades, facilitan la identificación oportuna de problemas y desviaciones, apoyan la toma de decisiones basadas en evidencia y contribuyen al mejoramiento continuo del predio, fortaleciendo su sostenibilidad y capacidad de adaptación.
      
      
      
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Articulación de actores
      
      
      .bloque-texto-g.bloque-texto-g.color-adiconoal-2.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/4.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-5
          p.mb-3 La articulación de actores es un proceso que busca fortalecer el sistema productivo mediante la interacción y cooperación entre diferentes participantes del territorio. Estos actores pueden incluir productores, asociaciones, instituciones públicas, entidades de formación, técnicos y mercados.
          p.mb-0 El trabajo conjunto permite compartir conocimientos, optimizar recursos y generar oportunidades que de manera individual serían más difíciles de alcanzar.
      
      
      p.mb-5(data-aos='fade-right') Los actores involucrados en el sistema productivo incluyen a los productores y sus familias campesinas, quienes son el eje central de las actividades; las asociaciones y organizaciones comunitarias que fortalecen el trabajo colectivo; las entidades gubernamentales que brindan apoyo institucional; las instituciones educativas y técnicas que aportan conocimiento y asistencia; y los comercializadores y mercados, que facilitan la distribución y venta de los productos.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
         p.mb-0  #[b Tabla 18.] Formas de articulación
      .tabla-a.color-acento-contenido.mb-0(data-aos='fade-right')
        table
          thead
            tr
              th Forma de articulación
              th Descripción
              th Ejemplos
              th Beneficios / Importancia
          tbody
            tr
              td Alianzas estratégicas
              td Acuerdos formales o informales entre productores, organizaciones, instituciones o empresas para trabajar de manera conjunta en el logro de objetivos comunes, compartiendo recursos, conocimientos y responsabilidades.
              td Asociación de productores que se une con una cooperativa para comercializar café; convenio entre agricultores y una alcaldía para proyectos productivos.
              td Permiten fortalecer capacidades, acceder a recursos, mejorar la comercialización y aumentar la competitividad.

            tr
              td Redes de apoyo
              td Espacios de cooperación e interacción donde diferentes actores comparten experiencias, conocimientos, tecnologías y soluciones, fomentando el aprendizaje colectivo.
              td Grupos de agricultores que intercambian semillas y conocimientos; redes campesinas o grupos de WhatsApp para resolver problemas productivos.
              td Favorecen el aprendizaje continuo, la innovación y la solidaridad entre productores.

            tr
              td Asistencia técnica
              td Acompañamiento brindado por profesionales, técnicos o instituciones para mejorar los procesos productivos mediante asesoría, capacitación y seguimiento.
              td Visitas de un ingeniero agrónomo, capacitaciones del SENA, asesoría de entidades agrícolas.
              td Mejora la productividad, optimiza prácticas agrícolas y facilita la adopción de tecnologías sostenibles.

            tr
              td Encadenamientos productivos
              td Integración de las diferentes etapas del proceso productivo, desde la producción hasta la transformación y comercialización, generando valor agregado.
              td Producción de leche → elaboración de queso → venta en mercado local; cultivo de frutas → procesamiento en mermeladas.
              td Incrementa ingresos, reduce intermediarios y fortalece la economía local.

            tr
              td Organización comunitaria
              td Asociación de productores o comunidades para trabajar de manera conjunta en actividades productivas, sociales o económicas.
              td Cooperativas, asociaciones campesinas, juntas de acción comunal.
              td Facilita la gestión de proyectos, mejora el acceso a recursos y fortalece la participación.

            tr
              td Acceso a mercados locales
              td Vinculación directa con espacios de comercialización cercanos al territorio.
              td Ferias campesinas, mercados locales, venta directa en finca.
              td Mejora ingresos, reduce intermediarios y fortalece la economía regional.

            tr
              td Articulación institucional
              td Relación entre productores y entidades públicas o privadas que brindan apoyo técnico, financiero o logístico.
              td Programas gubernamentales, proyectos productivos financiados, apoyo de ONG.
              td Facilita acceso a recursos, capacitación y oportunidades de desarrollo.
              
      
      
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.4 Sostenibilidad aplicada al predio
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/5.png')})` }")
        
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 La sostenibilidad aplicada al predio requiere un enfoque integral que permita analizar su funcionamiento desde diferentes aspectos que influyen en su permanencia y desarrollo. Para ello, se abordan tres componentes fundamentales, las dimensiones de la sostenibilidad, que permiten comprender el sistema desde lo ambiental, económico y social; las estrategias para la sostenibilidad, orientadas a la implementación de acciones que fortalezcan el sistema productivo; y la evaluación de la sostenibilidad, que facilita el seguimiento y análisis de los resultados obtenidos. Estos elementos, en conjunto, permiten orientar la gestión del predio hacia un desarrollo equilibrado y sostenible.


      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Dimensiones de la sostenibilidad
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/6.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-0 Para comprender de manera integral la sostenibilidad en el sistema productivo, es necesario analizarla desde diferentes perspectivas que permitan evaluar su equilibrio y permanencia en el tiempo. Estas perspectivas se agrupan en dimensiones que orientan la gestión del predio, facilitando la identificación de aspectos clave que influyen en su desempeño y en la toma de decisiones. A continuación, se presentan las principales dimensiones que permiten valorar la sostenibilidad del sistema productivo en el contexto rural.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t4/7.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/8.svg", alt="alt").img100
              .col
                h5 Ambiental
                p.mb-0 Se orienta a la conservación y uso responsable de los recursos naturales, garantizando la protección del suelo, el agua y la biodiversidad mediante prácticas sostenibles. Incluye acciones como el manejo adecuado de residuos, la protección de fuentes hídricas, la cobertura vegetal y la implementación de técnicas que favorezcan la regeneración natural de los ecosistemas.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/9.svg", alt="alt").img100
              .col
                h5 Económica
                p.mb-0 Se enfoca en la generación de ingresos estables y en la rentabilidad del sistema productivo, asegurando la viabilidad económica del predio a largo plazo. Implica una adecuada gestión de costos, optimización del uso de recursos, acceso a mercados y fortalecimiento de procesos de comercialización que permitan mejorar la competitividad.
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/10.svg", alt="alt").img100
              .col
                h5 Social
                p.mb-0 Busca la mejora de la calidad de vida de la familia campesina, promoviendo condiciones de equidad, bienestar y participación. Incluye el fortalecimiento de la organización comunitaria, el acceso a servicios básicos, la seguridad alimentaria y el reconocimiento de los saberes locales como parte fundamental del desarrollo rural.


      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias para la sostenibilidad
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            p.mb-0 Para fortalecer la sostenibilidad del sistema productivo, es necesario definir acciones orientadas a mejorar el manejo de los recursos, optimizar los procesos productivos y responder de manera adecuada a las condiciones del entorno. Estas acciones se organizan en estrategias que permiten orientar la gestión del predio hacia un equilibrio entre productividad, conservación y bienestar. A continuación, se presentan algunas estrategias que contribuyen al logro de sistemas productivos sostenibles.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/11.png', alt='')

      SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos='fade-right')
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-5
            .col-5
              img.wcus-3(src='@/assets/curso/temas/t4/13.svg' alt='')
          h4.text-center Uso eficiente de los recursos naturales 
          p.mb-0.text-center  Aprovechamiento adecuado del suelo, el agua y la biodiversidad, evitando el deterioro y promoviendo su conservación. 
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-5
            .col-5
              img.wcus-3(src='@/assets/curso/temas/t4/14.svg' alt='')
          h4.text-center  Implementación de prácticas agroecológicas
          p.mb-0.text-center  Aplicación de técnicas sostenibles que reduzcan el uso de insumos externos y favorezcan el equilibrio del sistema productivo. 
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-5
            .col-5
              img.wcus-3(src='@/assets/curso/temas/t4/15.svg' alt='')
          h4.text-center  Diversificación productiva
          p.mb-0.text-center  Integración de diferentes actividades agrícolas y pecuarias que permitan reducir riesgos y mejorar la estabilidad económica. 
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-5
            .col-5
              img.wcus-3(src='@/assets/curso/temas/t4/16.svg' alt='')
          h4.text-center  Reducción de impactos ambientales negativos
          p.mb-0.text-center  Disminución de prácticas que afecten el entorno, como el uso excesivo de agroquímicos o la degradación del suelo. 
        .tarjeta.bg-color-7.p-4
          .row.justify-content-center.mb-5
            .col-5
              img.wcus-3(src='@/assets/curso/temas/t4/18.svg' alt='')
          h4.text-center  Fortalecimiento de capacidades del productor
          p.mb-0.text-center  Desarrollo de conocimientos, habilidades y competencias que permitan mejorar la gestión del sistema productivo. 

      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias para la sostenibilidad
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/12.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-0 La sostenibilidad se evalúa de manera continua, integrando diferentes fuentes de información que permiten analizar el desempeño del sistema productivo en sus dimensiones ambiental, económica y social. Este proceso facilita la identificación de avances, limitaciones y oportunidades de mejora.
            p.mb-3 Para su evaluación se tienen en cuenta:
            ul.lista-ul--color.p-2
              li.d-flex
                i.fas.fa-thread
                p.mb-0 Los resultados obtenidos en el seguimiento del sistema productivo. 
              li.d-flex
                i.fas.fa-thread
                p.mb-0 La información generada a partir de los indicadores agroecológicos. 
              li.d-flex
                i.fas.fa-thread
                p.mb-0 El análisis de las condiciones económicas y sociales del predio.




  </template>

<script>
export default {
  name: 'Tema1',
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
