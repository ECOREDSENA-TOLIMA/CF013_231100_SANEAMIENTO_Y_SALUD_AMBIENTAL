export default {
  global: {
    componenteFormativo: 'Componentes ambientales',
    descripcionCurso:
      'Se abordarán temas que permitirán tener una concepción clara de los componentes ambientales, cómo determinarlos y evaluarlos, la manera de participar comunitariamente para defenderlos conociendo las leyes que los abarcan, así mismo obtendrá conocimientos sobre las técnicas educativas para transmitir este conocimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aspectos ambientales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Impactos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normatividad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Valoración de aspectos e impactos ambientales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Matriz de Leopold',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Recursos naturales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conservación ambiental',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Promotoría ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Educación ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: ' Capacitación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas educativas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Programa ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Norma ISO 14001',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Plan de acción',
            hash: 't_6_1',
          },
          {
            numero: '6.3',
            titulo: 'Gestión documental',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Participación comunitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Niveles',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Mecanismos constitucionales',
            hash: 't_7_2',
          },
        ],
      },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: '1. Aspectos Ambientales',
      referencia: 'Lina Bejarano, 2018. Componentes Ambientales. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_jl2o3uk5P8',
    },
    {
      tema: '2. Aspectos Ambientales',
      referencia:
        'UNESCO en español, Los Objetivos de Desarrollo Sostenible - qué son y cómo alcanzarlos, YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MCKH5xk8X-g',
    },
    {
      tema: '3. Normatividad Ambiental',
      referencia:
        'Esteban Correa, Introducción a la Normatividad Ambiental en Colombia (Sonido Mejorado), YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XPeC4Fw_T10',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'actividades humanas que tienen influencia sobre el entorno en donde se desarrollan.',
    },
    {
      termino: 'Componentes ambientales',
      significado:
        'elementos, factores o recursos naturales que presentan interacciones entre sí, lo cual permite que se genere la vida en nuestro planeta.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'consecuencias de las actividades humanas que repercuten sobre el medio ambiente generando un impacto ambiental en el entorno en el cual operan ya sea positivo o negativo, el cual incluye el aire, el agua, el suelo, la flora, la fauna, los seres humanos y sus interrelaciones.',
    },
    {
      termino: 'Leyes ambientales',
      significado:
        'corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales.',
    },
    {
      termino: 'Matriz aspectos e impactos',
      significado:
        'base fundamental para la toma de decisiones frente a los impactos ambientales que se determinen y evalúen dentro de la organización.',
    },
    {
      termino: 'Resolución ambiental',
      significado:
        'lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Ibagué. (s.f.). (2022). Lección 1: Concepto de participación comunitaria. En Participación comunitaria.',
      link:
        'https://ibague.gov.co/portal/admin/archivos/formacionVirtual/participacioncomunitaria/contenido/pdf/Unidad1Leccion1.pdf',
    },
    {
      referencia:
        'Alfonso Ávila, N. Z. H. (2014). Principales normas ambientales colombianas. Universidad EAN.',
      link: 'https://files.core.ac.uk/pdf/1162/74477868.pdf',
    },
    {
      referencia:
        'Carrillo Roa, J. D. y Cacua Peñaloza, S. C. (2019). Educación ambiental en Colombia: hacia un óptimo desarrollo sostenible. Dialéctica, 15(1)',
      link: 'http://portal.amelica.org/ameli/jatsRepo/88/88741012/html/',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe. (s.f.). (2022). Acerca de desarrollo sostenible. Naciones Unidas.',
      link:
        'https://www.cepal.org/es/temas/desarrollo-sostenible/acerca-desarrollo-sostenible',
    },
    {
      referencia:
        'Decreto 1791 de 1996. Por medio del cual se establece el régimen de aprovechamiento forestal.4 de octubre de 1996. D.O. No. 42894.',
      link: '',
    },
    {
      referencia:
        'Decreto 2820 de 2010. Por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales. 5 de agosto de 2010. D.O. No. 47792.',
      link: '',
    },
    {
      referencia:
        'Delgado Álvarez, C. y Palacios Peña, P. (s.f.).(2022). Técnicas educativas. Universidad del Azuay.',
      link:
        'https://www.uazuay.edu.ec/sites/default/files/public/TECNICAS-EDUCATIVAS.pdf',
    },
    {
      referencia:
        'Ley 134 de 1994. Por la cual se dictan normas sobre mecanismos de participación ciudadana. 31 de mayo de 1994. D.O. No. 41373.',
      link: '',
    },
    {
      referencia:
        'Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones. 22 de diciembre de 1993. D.O. No. 41146.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). (2022). Programa Nacional de Promotoría Ambiental Comunitaria. Minambiente.',
      link:
        'https://archivo.minambiente.gov.co/index.php/ordenamiento-ambiental-territorial-y-coordinacion-del-sina/educacion-y-participacion/programa-nacional-de-promotoria-ambiental-comunitaria',
    },
    {
      referencia:
        'Resolución 1023 de 2005. Por la cual se adoptan guías ambientales como instrumento de autogestión y autorregulación. 4 de agosto de 2005. D.O. No. 45990.',
      link: '',
    },
    {
      referencia:
        'Resolución 1447 de 2018. Por la cual se reglamenta el sistema de monitoreo, reporte y verificación de las acciones de mitigación a nivel nacional de que trata el artículo 175 de la Ley 1753 de 2015, y se dictan otras disposiciones. 2 de agosto de 2018. D.O. No. 50673.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila ',
          cargo: 'Experto Temático ',
          centro: '"Regional Tolima - Centro Agropecuario la Granja. "',
        },
        {
          nombre: 'Gustavo Santis Mancipe ',
          cargo: 'Diseñador Instruccional ',
          centro:
            '"Regional Distrito Capital - Centro de Gestión Industrial. "',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Equipo Desarrollo Curricular ',
          centro:
            '"Regional Santander - Centro Industrial del Diseño y la Manufactura. "',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Asesora Metodológica ',
          centro:
            '"Regional Distrito Capital - Centro de Diseño y Metrología. "',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda ',
          cargo: 'Corrección de Estilo ',
          centro:
            '"Regional Distrito Capital - Centro de Diseño y Metrología. "',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova ',
          cargo: 'Experta Temática ',
          centro:
            '"Regional Putumayo - Centro Agroforestal y Acuícola Arapaima. "',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional ',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Desarrollador Fullstack',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: '"Regional Tolima - Centro de Comercio y Servicios"',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
