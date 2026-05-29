export default {
  global: {
    Name: 'Caracterización del sistema productivo campesino y diseño de planes de mejora.',
    Description: 'Este componente formativo aborda la caracterización del sistema productivo campesino mediante el diagnóstico participativo, integrando la economía familiar, el análisis del territorio y el uso de herramientas comunitarias. Asimismo, orienta la formulación de planes de mejora con enfoque agroecológico, considerando indicadores, sostenibilidad y articulación de actores para fortalecer la producción y el desarrollo rural.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      }
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agroecosistema',
      significado: 'sistema productivo que integra elementos naturales y actividades humanas en el predio.',
    },
    {
      termino: 'Articulación',
      significado: 'proceso de vinculación entre actores para fortalecer el sistema productivo.',
    },
    {
      termino: 'Autoconsumo',
      significado: 'producción destinada al consumo de la familia campesina.',
    },
    {
      termino: 'Cartografía social',
      significado: 'herramienta participativa para representar el territorio desde la visión de la comunidad.',
    },
    {
      termino: 'Diagnóstico participativo',
      significado: 'proceso de análisis colectivo para identificar problemas y oportunidades del predio.',
    },
    {
      termino: 'Diversificación',
      significado: 'estrategia que consiste en producir diferentes cultivos o actividades para reducir riesgos.',
    },
    {
      termino: 'Dofa',
      significado: 'herramienta de análisis que identifica debilidades, oportunidades, fortalezas y amenazas.',
    },
    {
      termino: 'Indicadores agroecológicos',
      significado: 'variables que permiten evaluar el estado y desempeño del sistema productivo.',
    },
    {
      termino: 'Mapa del predio',
      significado: 'representación gráfica de la distribución de recursos, cultivos y áreas del terreno.',
    },
    {
      termino: 'Plan de mejora',
      significado: 'conjunto de acciones organizadas para fortalecer el sistema productivo.',
    },
    {
      termino: 'Planificación del cultivo',
      significado: 'organización de actividades agrícolas según condiciones del predio.',
    },
    {
      termino: 'Seguimiento',
      significado: 'proceso continuo de verificación del cumplimiento de actividades y resultados.',
    },
    {
      termino: 'Sostenibilidad',
      significado: 'equilibrio entre producción, conservación ambiental y bienestar social.',
    },
    {
      termino: 'Territorio',
      significado: 'espacio donde se desarrollan actividades productivas, sociales y ambientales.',
    },
    {
      termino: 'Unidad productiva familiar',
      significado: 'sistema donde la familia gestiona actividades agrícolas, pecuarias y domésticas.',
    },
  ],
  referencias: [
    {
      referencia: 'Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR). (2024). Herramienta de ACNUR para el diagnóstico participativo: Guía práctica.',
    },
    {
      referencia: 'BASF. (2023). Planificación y productividad en la gestión rural.',
    },
    {
      referencia: 'StudySmarter. (2024). Planificación agrícola: Técnicas y producción.',
    },
    {
      referencia: 'Valdiviezo Maldonado, B. N., Echeverría Mantuano, C. A., & Márquez Bravo, Y. J. (2025). Gestión social y su articulación a los Objetivos de Desarrollo Sostenible. Prohominum. Revista de Ciencias Sociales y Humanas, 7(3), 344–359.',
    },
    {
      referencia: 'Vargas, A. (1987). Economía campesina. Cuadernos de Economía. Universidad Nacional de Colombia.',
    },
    {
      referencia: 'WWF (World Wide Fund for Nature). (2024). Plegable digital: Proyecto Norad.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
