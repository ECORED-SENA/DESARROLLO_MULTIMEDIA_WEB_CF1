<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Sitios web
    
    .container__m_4.bw1.p-4   
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7 
          p Un sitio web está constituido por diversos archivos electrónicos y páginas web que se caracterizan por contener temas específicos en particular, incluyen una página inicial de bienvenida y por lo general se denomina página de inicio home page y se pueden acceder a través de un nombre de dominio y dirección de internet determinados. 
          p Los sitios web son usados generalmente por instituciones privadas y públicas y organizaciones, estos servicios que son utilizados por los ya mencionados tienen que ver con ofertas de bienes, servicios a través de la internet optimizando el mercado y todas sus posibles funciones.
          p Para que un negocio, empresa, tenga éxito en la red de redes sociales es importante contar con un sitio web bien estructurado, organizado y que cumpla con el distintivo de tu marca, con tus necesidades y las que tus clientes estén requiriendo en un momento determinado.
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/img_4_01.png", alt="alt", style="width:500px;").m-auto

      h3 Tipos de sitios web

      p.mb-3 #[strong.orange Los sitios web están clasificados de diferentes formas según su uso y características,] son muchas las posibilidades que ofrece la web, por lo general las personas los utilizan con tan diversos propósitos siendo difícil clasificarlos a todos, según su propósito, nivel de complejidad o características, los sitios web pueden ser clasificados en distintas variedades, en este apartado se nombraran #[strong.orange los más relevantes.] Los siguientes son los sitios web:

    .hr_blank    

    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Sitios de e-commerce")
            .col-md-7.mb-4.mb-md-0
              p En el mercado los conocemos como sitios de comercio electrónico o tiendas en línea, estos mercados son los que ofrecen de forma directa productos a sus clientes mediante el uso de páginas web.
                br
                br
                | Son muy fáciles de usar, ya que los usuarios pueden utilizar los carritos de compra virtuales, y no tiene un límite de artículos o servicios para compra, dichas acción se puede realizar con tarjeta de crédito y una serie de servicios como por ejemplo PayPal, una de las mayores ventajas es la automatización del sistema de pagos.        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_02.jpg', alt='Sitios de e-commerce')  

          .row(numero="2" titulo="Sitios de marca")
            .col-md-7.mb-4.mb-md-0
              p Los sitios web de marca son espacios virtuales en donde las marcas diseñan estrategias de comercialización para sus clientes y potenciales clientes, manteniendo su imagen y su filosofía de marca y productos, entre otros.        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_03.jpg', alt='Sitios de e-commerce')        

          .row(numero="3" titulo="Blog")
            .col-md-7.mb-4.mb-md-0
              p Por lo general los sitios de blogs se utilizan principalmente de forma individual. A través de los blogs se publican historias o información de algún tema en específico, frecuentemente relacionadas al administrador principal o algún tema importante. Además de eso, tiene la opción de recibir comentarios de los visitantes, lo cual permite que haya un contacto directo con el público objetivo.        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_04.jpg', alt='Sitios de e-commerce') 

          .row(numero="4" titulo="Landing Pages")
            .col-md-7.mb-4.mb-md-0
              p Se puede definir como una página de aterrizaje donde se destaca algo especial, puede ser un producto, novedades o promociones de artículos, se utilizan generalmente para todo lo que es un SEM (search engine marketing) se conoce en el mercado como los anuncios de google Ads.
                br
                br
                | Como ventaja principal de las landing pages es que tienen la capacidad de orientar al usuario a un sitio web el cual le brinda la información necesaria y relevante para adquirir y realizar una compra bien sea de un producto o servicio, es una página web diseñada específicamente para convertir visitantes en leads, este tipo de páginas permiten convertir a los usuarios en clientes finales.
        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_05.jpg', alt='Sitios de e-commerce')    

          .row(numero="5" titulo="Sitios de comunidades (redes sociales)")
            .col-md-7.mb-4.mb-md-0
              p Las redes sociales permiten que los usuarios tengan interacción entre sí, no necesariamente presencial, donde pueden compartir opiniones y experiencias que tengan de algún interés en común alrededor de un mismo tema, estos enlaces de usuarios se realizar por medio de grupos, hashtags y otros medios, de acuerdo con esto los contactos se realizan a través de medios o canales de plataformas sociales, siendo Instagram, Twitter, Facebook y Tinder las más concurridas a nivel mundial.
                br
                br
                | Estas redes móviles permiten determinar un canal de estudio de comportamiento y tendencias de algún sector en específico, de igual forma analizar el impacto que pude tener un producto en concreto, marca o estrategia de comercialización.        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_06.jpg', alt='Sitios de e-commerce') 

          .row(numero="6" titulo="Sitios Institucionales")
            .col-md-7.mb-4.mb-md-0
              p Estos sitios están encargados de brindar información institucional o empresarial, intentan mantener un formato limpio (necesario acerca de sus valores, filosofía, misión, servicios, y ubicación) con la menor cantidad de páginas web posibles, y solo teniendo la información básica necesaria de acuerdo con esto transmiten información precisa y completa a sus visitantes, son muy fáciles de diseñar, de retroalimentar y de hacerles seguimientos.        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_07.jpg', alt='Sitios de e-commerce')   

          .row(numero="7" titulo="Wikis")
            .col-md-7.mb-4.mb-md-0
              p Son enciclopedias virtuales que se basan en la colaboración de varios usuarios, para que actualicen información que se almacena en dicho sitio web. cuyos contenidos pueden ser editados por múltiples usuarios a través de cualquier navegador, por lo tanto, se desarrollan a partir de la colaboración de los internautas, quienes pueden agregar, modificar o eliminar información. 
                br
                br
                | Las wikis son muy útiles para difundir y plasmar contenidos de conocimiento, estos incluyen historial de cambios, lo que permite al usuario regresar a un estado anterior si una modificación diseñada no es correcta, de igual forma permite hacer seguimiento de quien realizó cada cambio de la información.        
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img_4_08.jpg', alt='Sitios de e-commerce') 

    separador 

    #t_4_1.titulo-segundo
      h2 4.1 Etapas para el diseño y desarrollo de sitios web   

    p.mb-5 Antes de conocer cada una de las fases del diseño web, es importante conocer el concepto de diseño web, el cual es un proceso de análisis y desarrollo enfocada a planificar, diseñar, mantener y crear interfaces digitales. En pocas palabras, como su nombre lo indica, el diseño web se refiere al proceso del diseño de sitios y páginas web. A continuación, se explican estas etapas: 

    TabsA.color-secundario.mb-5   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Briefing")
        .row
          .col
            h4 Briefing
            p.mb-4 En esta etapa de diseño y desarrollo es importante que la información sea clara y precisa con el fin de garantizar que las expectativas del cliente sean satisfechas por completo, se recomienda que para el desarrollo de la web exista una excelente comunicación entre cliente y diseñador.

            ul.fa-ul.lista-ul--naraja.mb-4
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Aquí determinados: qué es el proyecto, qué no es nuestro proyecto, público objetivo, metas y objetivos, aspectos técnicos, recursos, presupuesto, tiempos.

            p Es indispensable que un diseñador web cuente con un formato de entrevista donde se agrupen una serie de preguntas necesarias para iniciar la construcción de una web.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Planificación")
        .row
          .col
            h4 Planificación
            p.mb-4 Es importante en esta etapa del proceso definir el mapa del sitio, para dimensionar la magnitud y el alcance del proyecto que se va a realizar, también nos permite crear la estructura y las tecnologías que debemos utilizar para nuestra página web:

            ul.fa-ul.lista-ul--naraja.mb-4
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Investigación, recopilación de información del marcado y los posibles competidores para crear conceptos iniciales.
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Layout y Usabilidad, decidir cuál va a ser disposición de los elementos dentro de las páginas del proyecto web.
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Arquitectura de la información, definir la estructura de la web y la navegación de los contenidos.
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Wireframes y Mockups, crear los prototipos del que será el diseño final del proyecto detallado paso a paso.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Investigación")
        .row
          .col
            h4 Investigación
            p.mb-4 En el área de investigación encontramos los siguientes componentes:

            ul.fa-ul.lista-ul--naraja.mb-4
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] #[strong Análisis funcional de la web:] debes definir de manera concreta cómo será el funcionamiento del sitio web a partir de las reuniones y cronogramas realizadas en la fase anterior.
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] #[strong Arquitectura del sitio:] cuál es la arquitectura más conveniente para la navegación del usuario a través del sitio web.
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] #[strong Tecnologías para implementar:] qué lenguajes de programación, CMSs o plugins serán útiles para la creación de la web, cabe resaltar que también se incluyen otros programas como editores de imágenes o de vídeo.
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] #[strong Tiempo estimado:] puedes realizar una agenda con el tiempo estimado en que planeas tener cada módulo o espacio de la web.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Diseño")
        .row.align-items-center
          .col
            h4 Diseño
            p.mb-4 Durante esta etapa de implementación es fundamental el diseño visual del sitio, como característica principal debemos implementar una comunicación clara colores, tipografía, logotipo, elementos visuales, interacciones y test multidispositivo que representen la marca o producto, es importante centrarse en la utilización de los principios de la usabilidad (facilidad de uso para el usuario), UI (interfaz de usuario) y UX (experiencia del usuario), estos permiten que además del diseño gráfico, el sitio web sea funcional y más efectivo.
          .col-lg-6
            figure
                img(src='@/assets/curso/tema4/img_4_09.jpg', alt='') 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Contenidos")
        .row.align-items-center
          .col-lg-6
            h4 Contenidos
            p.mb-4 En esta etapa de desarrollo de los contenidos es muy importante la redacción y ajustes de textos, inclusión de imágenes, videos con optimización para la web y la optimización para motores de búsqueda (SEO). Los contenidos son la materia prima del proyecto, de estos depende en gran parte el éxito de la web ya que son los contenidos los que los usuarios utilizan constantemente.
          .col-lg-6
            figure
                img(src='@/assets/curso/tema4/img_4_10.jpg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Desarrollo")
        .row
          .col
            h4 Desarrollo
            p.mb-4 En este punto se desarrolla el sitio web, utilizando lenguajes de programación como HTML, CSS, PHP, SQL JavaScript. También es importante aspectos funcionales como el diseño adaptativo (responsive size), esto permitirá tener compatibilidad con dispositivos móviles y llegar a una mayor cantidad de usuarios:

            ul.fa-ul.lista-ul--naraja.mb-4
              li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Implementación del marcado semánticopage, social media, accesibilidad y estándares web, elección del frameword o CMS, diseño de base de datos, implementación de las funcionalidades, integración de contenido del cliente dentro de la web, optimización del rendimiento y velocidad de la web, implementación de las verificaciones de seguridad.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Pruebas")
        .row.align-items-center
          .col-lg-6
            h4 Pruebas
            p.mb-4 Antes de culminar el proceso se deben realizar pruebas técnicas para el funcionamiento adecuado de la página web, se revisa la compatibilidad con los navegadores web y muy importante revisar si el sitio web cumple con el propósito que se plantea en los objetivos iniciales a satisfacción del cliente o usuario.
          .col-lg-6
            figure
                img(src='@/assets/curso/tema4/img_4_11.jpg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Lanzamiento")
        .row.align-items-center
          .col-lg-6
            h4 Lanzamiento
            p Una vez se publique el sitio web en internet, se debe realizar un monitoreo constante para evitar fallas técnicas o realizar algún ajuste. 
            p También es necesario el mantenimiento del sitio web no solo en temas técnicos sino en actualización de contenidos.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema4/img_4_12.jpg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Mantenimiento")
        .row
          .col
            h4 Mantenimiento
            p El trabajo de un diseñador web no acaba con la entrega del producto, es necesario garantizar al cliente el soporte de usuario correspondiente para el sitio que se ha creado.
            p Al momento de entregar una web es posible que todo esté funcionando correctamente, pero se debe tener en cuenta con el flujo de tráfico de visitantes, o la llegada de nuevos registros de la base de datos, Aun estando todo controlado es necesario ejecutar acciones que garanticen el correcto funcionamiento de la web a largo plazo. 
            p Las tareas para ejecutar en el sitio web encontramos lo siguiente copias de seguridad, actualizaciones. cambios puntuales en los contenidos o estructuras, optimización de procesos, restablecimiento de la web en caso de caída, corregir redirecciones y enlaces rotos.
            p Es importante implementar una estrategia digital que permita mantener el sitio web actualizado para que comience a tener una evolución en la información y en los contenidos que los usuarios.

    separador

    #t_4_2.titulo-segundo
      h2 4.2 Qué es una estrategia web 

    .container__m_4.bw1.p-4   
      .row
        .col-lg-5.order-2.order-lg-1
          figure
            img(src='@/assets/curso/tema4/img_4_13.png', alt='', style="width:350px;").m-auto
        .col-lg-7.order-1.order-lg-2          
          p Una estrategia web es una serie de operaciones enfocadas a planear, proyectar, realizar, posicionar, administrar y optimizar un sitio web con el objetivo de obtener resultados que aumenten las ganancias de un modelo de negocio o de un mercado.
          p Se puede argumentar que una estrategia web son todos los contenidos que día a día los usuarios consumen, frecuentar y a lo que habitualmente se conectan, de igual forma y más importante aún, es lo que los consumidores buscan cuando desean realizar una compra y todo lo que ello con lleva, (información de producto, costos, dudas, garantías, comparaciones) 
          p El primer escenario para crear una estrategia exitosa y con ventaja es conocer cuál es su mercado objetivo, definir su potencial, tener claras sus características de producto y formas de compra, sus niveles de consumo y a que público estará orientado.
          p En un segundo momento se deben analizar las cualidades y soluciones específicas determinadas del sitio web que se pueden brindar al mercado al que va dirigido.

    .bg-mint.pt-4
      h4 ¿Por qué es importante planear una estrategia web? 
      p Es necesario planificar los pasos a seguir de la mano de un proceso pensado, planificado y ejecutado de acuerdo con unas pautas claramente marcadas y organizadas.
      p.mb-4 Tener una estrategia de contenidos es muy importante para algún sitio web, esto permite aumentar de una forma constante y alta de visitas al sitio web, con ello se logra mejorar metas y objetivos trazados de satisfacción y cumplimiento a los clientes. una estrategia de contenido eficiente permitirá:

      .row
        .col-lg-7
          ul.fa-ul.lista-ul--naraja.mb-4
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Ofrecer un valor añadido de calidad, más allá del producto o servicio estrictamente comercial ofrecido.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Orientar al usuario a conocer el producto adecuado de acuerdo con sus necesidades, el cómo acceder a él y que prioridades debe tener al elegirlo.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Llegar a ser un referente de calidad, servicio e innovación en el tema y nicho de especialización.

          p.mb-4 Cómo conseguir que la estrategia web sea la adecuada

          ul.fa-ul.lista-ul--naraja.mb-4
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Definir el público al que quieres dirigir tus contenidos se trata de buscar y crear tu propio nicho de mercado. 
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Fijar objetivos para cada acción. Esos objetivos deben ser claros, concretos, medibles y realistas, es decir, objetivos.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Definir un cronograma de publicación. Los buscadores tienen en cuenta las actualizaciones y penalizan a los sitios web estáticos en el tiempo.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Cuantificar, es decir, medir los resultados a través de la analítica web y la revisión de los objetivos cumplidos y no cumplidos. Cambiar la estrategia de acuerdo con estos resultados.  

        .col-lg-5
          figure
            img(src='@/assets/curso/tema4/img_4_14.png', alt='', style="width:350px;").m-auto


    

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

<style lang="sass" scoped></style>
