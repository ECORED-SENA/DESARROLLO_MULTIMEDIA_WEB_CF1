export default {
  global: {
    componenteFormativo: 'Conceptualización del desarrollo multimedia y web',
    descripcionCurso:
      'Este componente es una introducción al uso de la multimedia como medio de comunicación, utilizando las herramientas tecnológicas que provee el entorno para el desarrollo de propuestas visuales que impacten y produzcan una reacción en el público objetivo. Se tratan los conceptos básicos para el inicio de la formulación de un proyecto multimedia abordando los aspectos claves para su desarrollo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos que conforman la multimedia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Áreas de aplicación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Hipermedia, producción multimedia y áreas de diseño',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aplicaciones móviles',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tipos de Aplicaciones móviles',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Aplicaciones móviles más importantes del mercado',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Tecnologías más utilizadas para crear aplicaciones móviles',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas para el diseño y desarrollo multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de la producción multimedia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Software</i> de diseño multimedia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Internet',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Navegador <i>web</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de navegadores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Dominios',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sitios <i>web</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Etapas para el diseño y desarrollo de sitios <i>web</i>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Qué es una estrategia <i>web</i>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Página <i>web</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de páginas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Código',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Lenguajes <i>web</i>',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Sitios para crear páginas <i>web</i>',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Finalidad para crear un sitio <i>web</i>',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Realidad aumentada ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Características de la realidad aumentada',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tipos de realidad aumentada',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Beneficios de la realidad aumentada',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Aplicaciones de la realidad aumentada',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Bartolomé Pina, A. R. (1994). Multimedia interactivo y sus posibilidades en educación superior. <i>Pixel-Bit</i>. Revista de Medios y Educación, 1, 5-14. ',
      link:
        'https://idus.us.es/bitstream/handle/11441/45417/file_1.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'BambuMobile. (2021). Tecnologías clave para el desarrollo de Apss. ',
      link:
        'https://www.bambu-mobile.com/tecnologias-clave-para-el-desarrollo-de-apps/',
    },
    {
      referencia:
        'Cadenas, R. (2019). ¿Qué necesito? <i>web</i> <i>Apss</i>, <i>App</i> Nativa o <i>App</i> Hibrida. ',
      link:
        'https://www.gsoft.es/articulos/que-necesito-web-apps-app-nativa-o-app-hibrida/',
    },
    {
      referencia:
        'Casado, E. (2015). Fundamentos y evolución de la multimedia. ',
      link:
        'http://multimedia.uoc.edu/blogs/fem/es/produccion-multimedia-conceptos-basicos-fases-y-metodos/',
    },
    {
      referencia:
        'Mena, J. (2018). Proyectos multimedia educativos y etapas para su desarrollo. ',
      link:
        'https://www.eumed.net/rev/atlante/2018/08/proyectos-multimedia-educativos.html ',
    },
    {
      referencia: 'EcuRed. (2019). Diseño Multimedia. ',
      link: 'https://www.ecured.cu/Dise%C3%B1o_multimedia',
    },
    {
      referencia: 'Herazo, L. (2019). Tecnología – Aplicación Móvil. ',
      link: 'https://anincubator.com/que-es-una-aplicacion-movil/',
    },
    {
      referencia: 'MDN contributors. (2019). ¿Qué es un servidor <i>web</i>? ',
      link:
        'https://developer.mozilla.org/es/docs/Learn/Common_questions/What_is_a_web_server',
    },
    {
      referencia:
        'Montero, J. (2019). Por qué aprender C#. <i>OpenWebinars.</i> ',
      link: 'https://openwebinars.net/blog/por-que-aprender-c-/ ',
    },
    {
      referencia:
        'Muente, G. (2020). Guía completa del <i>Framework:</i> qué es, cuáles tipos existen y por qué es importante en Internet. ',
      link: 'https://rockcontent.com/es/blog/framework/',
    },
    {
      referencia:
        'Suñol, J. (s.f.).Dominios, su necesidad y sus implicaciones. ',
      link:
        'https://upcommons.upc.edu/bitstream/handle/2117/10300/Dominios,%20su%20necesidad%20y%20sus%20implicaciones.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adobe',
      significado:
        'Adobe Inc., antes <i>Adobe Systems Incorporated</i>, es una empresa de <i>software</i> estadounidense con sede en San José fundada el 28 de febrero de 1982 por John Warnock y Charles Geschke.',
    },
    {
      termino: 'Android',
      significado:
        'es un sistema operativo móvil diseñado para dispositivos móviles con pantalla táctil como teléfonos inteligentes o <i>tablets</i>, relojes inteligentes, entre otros',
    },
    {
      termino: 'App Store',
      significado:
        'tienda de aplicaciones digitales de Apple, disponible para usuarios de iOS y de Mac OS.',
    },
    {
      termino: 'Copywriter',
      significado:
        'el <i>copywriter</i> es el redactor publicitario que escribe los llamados <i>copy</i> o textos publicitarios. Su actividad se conoce como <i>copywriting</i>. En muchos casos la tarea del <i>copywriter</i> va más allá del texto publicitario y es quien desarrolla la idea o el concepto que acabará convirtiéndose en la pieza creativa publicitaria.',
    },
    {
      termino: 'Dominio',
      significado:
        'denominación que se le da a un sitio <i>web</i> conectado a una red de internet.',
    },
    {
      termino: 'Frameworks',
      significado:
        'es una estructura previa que se puede aprovechar para desarrollar un proyecto, el <i>Framework</i> es una especie de plantilla, un esquema conceptual, que simplifica la elaboración de una tarea.',
    },
    {
      termino: 'Hipertexto',
      significado:
        'sistema que permite enlazar fragmentos de textos entre sí, lo que permite al usuario acceder a la información a través de los ítems relacionados en vez de hacerlo de forma secuencial.',
    },
    {
      termino: 'Hosting',
      significado:
        'espacio que se alquila en el disco duro de un servidor para almacenar páginas <i>web</i>.',
    },
    {
      termino: 'HTML',
      significado:
        'lenguaje de marcas de hipertexto que se utiliza para el desarrollo de páginas <i>web</i>.',
    },
    {
      termino: 'IOS',
      significado:
        'es el sistema operativo para los dispositivos móviles de Apple, (iPhone, iPod Touch y iPad). Su característica principal, es su código cerrado y únicamente disponible para los equipos de la famosa compañía de la manzana.',
    },
    {
      termino: 'Java',
      significado:
        'es un lenguaje de programación de propósito general, orientado a objetos y diseñado para tener las dependencias de implementación mínimas posibles.',
    },
    {
      termino: 'PHP',
      significado:
        'lenguaje de programación utilizado para el desarrollo de páginas <i>web</i> dinámicas, para almacenar información en bases de datos.',
    },
    {
      termino: 'Storyboards',
      significado:
        'conocido también como guion gráfico, es un compuesto de dibujos secuenciales que ilustran los planos de una obra audiovisual. Es un paso básico que debe realizarse en cualquier buena preproducción, ya que ayudará a tener una guía.',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad de Antioquia. (2020). ¿Qué es la multimedia? [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=e-lQYKYbOtI',
    },
    {
      texto:
        'Universidad de Castilla-La Mancha. (2019) Definición de Multimedia. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-vlRQZX3WLg',
    },
    {
      texto: 'Acosta, A. (2021). Tipos de Multimedia. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_qtRl-aiczQ&t=64s',
    },
    {
      texto:
        'Belloch, C. (s.f.). Aplicaciones multimedia. Unidad de Tecnología Educativa (UTE). Universidad de Valencia.',
      tipo: 'PDF',
      descarga: 'downloads/Aplicaciones_multimedia.pdf',
    },
    {
      texto:
        'Sistemas multimedia. (s.f.). Introducción a los sistemas multimedia para formación.',
      tipo: 'PDF',
      descarga: 'downloads/Sistemas_Multimedia.pdf',
    },
    {
      texto:
        'EDteam. (2020). ¿Qué lenguajes existen para el desarrollo móvil? [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H8tykt3pKTU',
    },
    {
      texto:
        'Fazt. (2019). Tecnologías de desarrollo de aplicaciones móviles multiplataforma.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qC--aHT2c7M',
    },
    {
      texto:
        'Scoreapps. (2021). Cómo crear una App móvil: paso a paso (sin saber programar). [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rA6kXrUXVAI',
    },
    {
      texto:
        '<i>Motion Graphics</i> en Koncepto. (2020). Las 50 + aplicaciones de Adobe. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3YeOJaolM38',
    },
    {
      texto: 'Suñol, J. (s.f.). Dominios, su necesidad y sus implicaciones.',
      tipo: 'PDF',
      descarga: 'downloads/Dominios_Necesidad_Implicaciones.pdf',
    },
    {
      texto:
        'Edteam. (2020). Tipos de lenguajes de programación. [video]. Youtube. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gFMMmi-EYEM',
    },
    {
      texto:
        'Educar Portal. (2019). ¿Qué son los lenguajes de programación y para qué sirven | Computación y programación? [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EHiiNhLRIGc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
