<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar el sistema productivo mediante herramientas como el DOFA y el diagnóstico participativo, con el fin de proponer estrategias de mejora acordes al contexto.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'La economía campesina se caracteriza principalmente por:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción a gran escala para exportación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso exclusivo de maquinaria industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organización basada en la unidad familiar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dependencia total de insumos externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 2,
          texto:
            'El autoconsumo dentro de la economía campesina hace referencia a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Venta de productos en mercados internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción para el consumo familiar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compra de alimentos en tiendas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Producción industrial.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 3,
          texto: 'La diversificación productiva permite:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el uso de agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir riesgos y mejorar la seguridad alimentaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar cultivos tradicionales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Disminuir la producción.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 4,
          texto: 'Un predio agroecológico se caracteriza por:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso intensivo de químicos.', esCorrecta: false },
            { id: 'b', texto: 'Monocultivo permanente.', esCorrecta: false },
            { id: 'c', texto: 'Exclusión de animales.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Prácticas sostenibles y biodiversidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 5,
          texto: 'La soberanía alimentaria se refiere a:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar alimentos importados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Depender del mercado externo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reducir la producción.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Producir alimentos propios de manera autónoma.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 6,
          texto: 'El diagnóstico participativo permite:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomar decisiones sin información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar la realidad con participación comunitaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la participación de la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo recolectar datos técnicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 7,
          texto: 'El DRP significa:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollo Rural Productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagnóstico Regional Productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagnóstico Rural Participativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseño de Recursos Productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 8,
          texto: 'El mapeo participativo permite:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer cálculos matemáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representar gráficamente el territorio.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Vender productos.', esCorrecta: false },
            { id: 'd', texto: 'Medir la producción.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 9,
          texto: 'La línea del tiempo se utiliza para:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar cambios a lo largo del tiempo.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Medir el suelo.', esCorrecta: false },
            { id: 'c', texto: 'Dibujar mapas.', esCorrecta: false },
            { id: 'd', texto: 'Calcular costos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 10,
          texto: 'El mapa del predio sirve para:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visualizar la distribución de recursos y cultivos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Decorar el predio.', esCorrecta: false },
            { id: 'c', texto: 'Reducir la producción.', esCorrecta: false },
            { id: 'd', texto: 'Eliminar información.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 11,
          texto: 'La técnica llave permite:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medir el clima.', esCorrecta: false },
            { id: 'b', texto: 'Abrir terrenos.', esCorrecta: false },
            { id: 'c', texto: 'Registrar datos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Identificar un elemento clave del sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 12,
          texto: 'El plan de mejora se construye a partir de:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La intuición del productor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diagnóstico participativo.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'La compra de insumos', esCorrecta: false },
            { id: 'd', texto: 'El mercado internacional.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 13,
          texto: 'El análisis DOFA permite:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vender productos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Identificar factores internos y externos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Medir el clima.', esCorrecta: false },
            { id: 'd', texto: 'Preparar el suelo.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 14,
          texto: 'Las fortalezas en la matriz DOFA son:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores externos negativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores externos positivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factores internos negativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factores internos positivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 15,
          texto: 'Las amenazas en el DOFA corresponden a:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores internos positivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores externos negativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factores internos negativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factores externos positivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 16,
          texto: 'La planificación del cultivo permite:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Improvisar actividades.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Organizar la producción agrícola.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Reducir la eficiencia.', esCorrecta: false },
            { id: 'd', texto: 'Eliminar recursos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 17,
          texto: 'Los indicadores agroecológicos sirven para:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Preparar el terreno.', esCorrecta: false },
            { id: 'b', texto: 'Comprar insumos.', esCorrecta: false },
            { id: 'c', texto: 'Vender productos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Evaluar el sistema productivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 18,
          texto: 'El seguimiento del sistema productivo permite:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ignorar problemas.', esCorrecta: false },
            { id: 'b', texto: 'Reducir información.', esCorrecta: false },
            { id: 'c', texto: 'Eliminar registros.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Verificar el cumplimiento de actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 19,
          texto: 'La articulación de actores busca:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Trabajar de forma aislada.', esCorrecta: false },
            { id: 'b', texto: 'Reducir participación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Fortalecer el sistema mediante cooperación.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Eliminar alianzas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
        {
          id: 20,
          texto: 'La sostenibilidad en el predio busca:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equilibrar producción, ambiente y bienestar.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Reducir la producción.', esCorrecta: false },
            { id: 'c', texto: 'Aumentar costos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Eliminar recursos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caracterización del sistema productivo campesino y diseño de planes de mejora.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la Caracterización del sistema productivo campesino y diseño de planes de mejora.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
