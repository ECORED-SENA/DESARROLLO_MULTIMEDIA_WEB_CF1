<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Página #[i web]

    .row.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .singleTop-txt-deco
          p Todas las páginas #[i web] tienen características que hacen de esta un referente especial para procesos de información o compartir de temas a través de estos sitios. La mayoría de las páginas #[i web] tienen una estructura que conserva los mismos elementos los cuales a la hora de programar se traducen en etiquetas de código HTML y CSS que se pueden estandarizar y tomar como un patrón en los proyectos #[i web], para facilitar los requerimientos del cliente.
          p A continuación, se invita a la exploración de conceptos y características de una página #[i web].
      .col-lg-5.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img_5_01.jpg", alt="alt", style="width:500px;").m-auto


    .tarjeta.tarjeta-celeste.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            p Una página #[i web] es un documento electrónico construido en un formato de código HTML, CSS y JavaScript.
            p A la página #[i web]  se puede acceder mediante un navegador que le indica el dominio a un servidor #[i web] o #[i hosting] conectado a la red mundial de internet.        
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/Slide_01.jpg', alt='Texto que describa la imagen')              
        .row
          .col-md-6.mb-4.mb-md-0
            p Este sitio #[i web] o espacio virtual puede incluir además del texto, elementos de visualización, audio y otros  productos multimedia que enriquezcan el contenido y lo presenten más atractivo para los internautas que la visitan.        
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/Slide_02.jpg', alt='Texto que describa la imagen')              
        .row
          .col-md-6.mb-4.mb-md-0
            p Las páginas #[i web], se pueden considerar  una herramienta de #[i marketing] digital para mejorar la afluencia de  clientes potenciales para iniciar un negocio o fortalecerlo.         
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/Slide_03.jpg', alt='Texto que describa la imagen')              
        .row
          .col-md-6.mb-4.mb-md-0
            p El diseño se puede adaptar a diferentes dispositivos y plataformas que existen en el mercado como los PC, los celulares, las tabletas, las aulas virtuales si es el caso, entre otros.        
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/Slide_04.jpg', alt='Texto que describa la imagen')    

    p.mb-5 Ya que se conoce que es una página #[i web], les invito a identificar su anatomía:   

    h3.text-center Diseño de una página #[i web]  

    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/infografia_5_01.png', alt='Diseno de una pagina #[i web]')        

          .tarjeta.color-acento-botones.p-4(x="8%" y="5.3%")       
            p #[strong Logo:] símbolo con el cual se identifica una empresa o individuo.            
          .tarjeta.color-acento-botones.p-4(x="84.7%" y="5.3%")       
            p #[strong Header:] es el encabezado de la página, contiene logo y barra de navegación. 
          .tarjeta.color-acento-botones.p-4(x="84.7%" y="49.5%")       
            p #[strong body:] es la parte donde se observa la información principal de la página.
          .tarjeta.color-acento-botones.p-4(x="84.7%" y="86.9%")       
            p #[strong Footer:] muestra la información que se encuentra en la parte de debajo de la página como es los  datos de la empresa, contacto, soporte, empresas asociadas, entre otros. 

    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('downloads/Anatomia_pagina_web.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Anatomía de una página #[i web]

    .container__m_4.bw3.p-4            
      .bloque-texto-a.custom-clr2.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/img_5_02.png", alt="alt").m-auto
          .col-lg-8
            .bloque-texto-a__texto.p-4
              h5.orange A practicar
              p.mb-3 Identifica los elementos que componen la anatomía de las siguientes páginas #[i web]:      
              ul 
                li.mb-3                  
                  a.mb-3.clr-link(href="https://www.sena.edu.co/es-co/Paginas/default.aspx", title="title", target="_blank") https://www.sena.edu.co/es-co/Paginas/default.aspx 
                li.mb-3  
                  a.mb-3.clr-link(href="https://www.cursosfemxa.es/blog/13975-5-lenguajes-de-programacion-para-principiantes", title="title", target="_blank") https://www.cursosfemxa.es/blog/13975-5-lenguajes-de-programacion-para-principiantes
                li.mb-3  
                  a.mb-3.clr-link(href="https://www.iebschool.com/blog/que-es-etiqueta-html-analitica-usabilidad/ ", title="title", target="_blank") https://www.iebschool.com/blog/que-es-etiqueta-html-analitica-usabilidad/  

    separador

    #t_5_1.titulo-segundo
      h2 5.1 Tipos de páginas

    p.mb-5 Por el tipo de información que se encuentra en la página y de acuerdo con su interacción con el usuario, las páginas pueden ser:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta.tarjeta-cyan
          figure.mb-4
            img(src="@/assets/curso/tema5/img_5_1_01.svg", alt="alt", style="width:470px;" ).m-auto   
          h5.text-center Páginas #[i web] estáticas       
          p Transmiten  un contenido informativo a un grupo objetivo y no les permite interactuar con este.
          p Presentan  texto, archivos multimedia, imágenes, videos y audio. Algunos ejemplos son: 
          ul.fa-ul.lista-uL
            li.mb-2 #[span.fa-li #[i.fas.fa-angle-right]] Catálogos online (presentación de productos).

            li.mb-2 #[span.fa-li #[i.fas.fa-angle-right]] Páginas #[i web] Corporativas (información de una organización).

            li.mb-2 #[span.fa-li #[i.fas.fa-angle-right]] Portafolios digitales (presenta trabajos realizados en una institución).
          
      .col-lg-5
        .tarjeta.tarjeta-cyan
          figure.mb-4
            img(src="@/assets/curso/tema5/img_5_1_02.svg", alt="alt", style="width:470px;" ).m-auto   
          h5.text-center Páginas #[i web] dinámicas       
          p Facilitan el conocer de  la información a través de  la interacción con su contenido.
          p Algunas #[i web] dinámicas son: 
          ul.fa-ul.lista-uL
            li.mb-2 #[span.fa-li #[i.fas.fa-angle-right]] Tiendas online (comercializa producto y habilita plataforma de pagos).
            li.mb-2 #[span.fa-li #[i.fas.fa-angle-right]] #[i Blog] con contenido informativo ( presenta tema de  interés para una comunidad, puede realizarse comentarios).

            li.mb-2 #[span.fa-li #[i.fas.fa-angle-right]] Sitios #[i web] educativos (enseñan un tema y facilita la interacción con los educandos).


    separador

    #t_5_2.titulo-segundo
      h2 5.2 Código

    .row.justify-content-center
      .col-lg-7
        .singleTop-txt-deco
          p El código es el lenguaje que se utiliza para estructurar y desarrollar una página #[i web] con un determinado formato que puede contener texto, imagen, video y animación entre otros. Los lenguajes que más se utilizan para programar son: HTML, CSS, PHP, Java, JavaScript, C, C++, C#, entre otros. 
          p Actualmente, no es necesario ser un experto programador para crear páginas #[i web] ya que existen plantillas que son útiles para el diseño y el desarrollo, pero es necesario conocer los lenguajes #[i web] básicos. 
      .col-lg-5
        figure
          img(src="@/assets/curso/tema5/img_5_2_01.svg", alt="alt", style="width:500px;").m-auto

    separador

    #t_5_3.titulo-segundo
      h2 5.3 Lenguajes #[i web]

    p Un lenguaje de programación #[i web] es un código que es interpretado por un servidor dispuesto a crear sitios web dinámicos.
    p A continuación se pueden conocer los lenguajes de programación más usuales:


    
    PasosA.color-acento-botones(tipo="n")
      .row.justify-content-center.align-items-center 
        .col-md-8.mb-4.mb-md-0
          h4 Lenguaje HTML 
          p Fue creado en 1989 por Tim Berners-Lee y la sigla HTML corresponde a #[i Hyper Text Markup Language] y significa lenguaje de marcado de hipertexto, este como tal no es un lenguaje de programación sino un lenguaje descriptivo que está compuesto por etiquetas o marcas que determinan el comienzo y la terminación de una estructura semántica, la cual es interpretada por el navegador para ejecutar una acción, cuyo resultado final es lo que vemos en la pantalla de nuestro PC. 
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/html.svg', alt='Imagen relacionada', style="width:350px;").m-auto
      .row.justify-content-center.align-items-center 
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/css.svg', alt='Imagen relacionada', style="width:350px;").m-auto
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje CSS 
          p La sigla CSS corresponde a #[i Cascading Style Sheet] y significa hoja de estilo en cascada, que como tal no es un lenguaje de programación , sino un lenguaje descriptivo que está compuesto por reglas  que son interpretadas por el navegador para presentar un documento escrito en HTML, cuyo resultado final es establecer la apariencia de la página #[i web] que vemos en nuestra pantalla del PC. A través del CSS se puede determinar el diseño, color y fuente, entre otras características de la página #[i web].             
      .row.justify-content-center.align-items-center         
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje JavaScript 
          p Es un lenguaje de programación que sirve de complemento a las páginas creadas con HTML y CSS, puesto que proporciona elementos de interactividad, como cuando se da clic a un botón, se introducen datos a un formulario o se generan efectos visuales, entre otros.
          
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/js.svg', alt='Imagen relacionada', style="width:350px;").m-auto
      .row.justify-content-center.align-items-center 
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/php.svg', alt='Imagen relacionada', style="width:350px;").m-auto
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje PHP
          p La sigla PHP corresponde a #[i Hypertext Preprocessor] o Procesador de Hipertexto. Es un lenguaje de programación script que se asocia a una base de datos en el servidor para responder a las peticiones de los usuarios. Por ejemplo cuando en la página se ha llenado un formulario, la información contenida la recupera un script PHP que la extrae y la envía a la base de datos para devolver la lista de respuestas presentada de manera fácil y comprensible para el cliente.             
      .row.justify-content-center.align-items-center     
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje Python
          p Es un lenguaje dinámico de alto nivel. Es bastante fácil de aprender y proporciona una escritura potente. El código Python tiene un estilo muy “natural”, ya que es fácil de leer y comprender (gracias a la falta de punto y coma y llaves). El lenguaje de programación Python se ejecuta en cualquier plataforma, desde Windows hasta Linux, Macintosh, Solaris, etc. 
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/python.svg', alt='Imagen relacionada', style="width:250px;").m-auto
      .row.justify-content-center.align-items-center     
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/Java.svg', alt='Imagen relacionada', style="width:350px;").m-auto     
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje Java
          p Es un lenguaje de propósito general, orientado a objetos y diseñado para tener las dependencias de implementación mínimas posibles. 
          p Con este lenguaje de programación se pueden crear aplicaciones y procesos en múltiples dispositivos. Su ámbito de aplicación es amplísimo, por lo que permite crear #[i software] para dispositivos móviles, terminales de venta, cajeros automáticos, IoT (internet de las cosas), además de páginas #[i web].  
      .row.justify-content-center.align-items-center                 
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje C#
          p Es uno de los lenguajes de programación que más se utiliza en entornos empresariales, instituciones gubernamentales, entidades bancarias o médicas. Fue creado por Microsoft, es muy versátil ya que se utiliza en el internet de las cosas, desarrollo de videojuegos, #[i web] o aplicaciones móviles.
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/CSharp.png', alt='Imagen relacionada', style="width:350px;").m-auto  
      .row.justify-content-center.align-items-center          
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/C.png', alt='Imagen relacionada', style="width:350px;").m-auto
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje C
          p Es un lenguaje de programación (considerado como uno de los más importantes en la actualidad).
          p Con este  se desarrollan tanto aplicaciones como sistemas operativos, a la vez que forma la base de otros lenguajes más actuales como Java, C++ o C#.            
      .row.justify-content-center.align-items-center                   
        .col-md-8.mb-4.mb-md-0
          h3 Lenguaje C++
          p Es un lenguaje de programación surgido como extensión del lenguaje C para que pudiese manipular objetos. 
          p Ambos lenguajes de programación siguen siendo utilizados en la actualidad en bases de datos, navegadores #[i web], compiladores o videojuegos. Hay una gran cantidad de programas escritos en C++, como por ejemplo los paquetes de Adobe.
        .col-md-4.mx-auto
          img(src='@/assets/curso/tema5/Cplus.png', alt='Imagen relacionada', style="width:250px;").m-auto

    separador

    #t_5_4.titulo-segundo
      h2 5.4 Sitios para crear páginas #[i web]   

    p.mb-5 Al no contar con experiencia en programación, se puede hacer uso de diferentes proveedores que ofertan plantillas que facilitan la inserción de texto, imagen o video al momento de crear una página #[i web]. Con estos, a medida que se va construyendo la página el usuario puede visualizar el resultado e ir haciendo las modificaciones que considere. A continuación, se presentan algunos sitios que facilitan la creación de espacios digitales, según la necesidad del tema o público al que se desee llegar:

    .row
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Weebly")
            .col-12
              p Es un proveedor que ofrece el servicio gratuito de construcción de un sitio #[i web]. La URL que lo identifica es #[a(href="https://www.weebly.com/co/websites", title="title", target="_blank") https://www.weebly.com/co/websites] , allí se puede ingresar realizando un registro con los datos personales que permitirán la creación de una cuenta de usuario para tener acceso a la plataforma y generar el diseño deseado según las plantillas que estén disponibles.
          div(titulo="Wix")
            .col-12
              p Provee servicio gratuito para el diseño de un sitio web y se puede acceder en la URL #[a(href="https://es.wix.com/", title="title", target="_blank") https://es.wix.com/]. Este proveedor presenta diferentes tipos de plantilla según el objetivo que se desea lograr con el sitio web. Si se selecciona un plan pago se pueden agregar funciones de interactividad, adaptar a dispositivos móviles e incluirse en los motores de búsqueda más populares.
          div(titulo="Jimdo")
            .col-12
              p Es otro sitio web que al igual de los anteriores, provee servicio gratuito para el diseño de un sitio web, para ello a través de la dirección electrónica o URL #[a(href="https://www.jimdo.com/es/", title="title", target="_blank") https://www.jimdo.com/es/] se puede explorar el procedimiento. Este servidor, ofrece planes de dominio y #[i hosting], permitiendo a los usuarios realizar un portafolio completo y no contactar otros proveedores.
      .col-lg-5
        img(src='@/assets/curso/tema5/img_5_4_01.jpg', alt='Imagen relacionada', style="width:500px;").m-auto

    separador

    #t_5_5.titulo-segundo
      h2 5.5 Finalidad para crear un sitio web
    
    p Al momento de realizar un sitio web, es importante tener claro el punto de partida de la creación de este; es decir, los objetivos para el cual se hará uso de este canal digital. Son muchas las ideas que se pueden presentar, pero es necesario considerar, desde una página #[i web] personal a sitios de negocios online. 
    p.mb-5 Las páginas #[i web] tienen unas intenciones o propósitos para su diseño, a continuación, conoceremos cuales son:

    .tarjeta.tarjeta-celeste.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Comercio electrónico 
            p Las tiendas online son uno de los estilos de sitios más visitados.  Cualquier persona tiene la oportunidad de dar inicio a un negocio online en paralelo a su trabajo principal.  En este se pueden vender desde productos digitales, como físicos a grandes audiencias de todo el mundo (lo que no sería tan simple con una tienda física). Algunos sitios #[i web] de ejemplo son:  Mercado Libre - Amazon- Alibaba- Ebay, entre otros.       
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/slide_5_5_01.jpg', alt='Texto que describa la imagen')              
        .row
          .col-md-6.mb-4.mb-md-0
            h5 #[i Blogs]
            p Muchos #[i web]masters exitosos comenzaron su viaje  con una simple consulta en un buscador: cómo crear un #[i blog]. Con la posibilidad de abarcar una variedad de temas, los #[i blogs] pueden ser tanto un negocio (por ejemplo, afiliados, reseñas, #[i blogs] especializados) o una actividad de ocio (viajes, comida, música, libros).
    
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/slide_5_5_02.jpg', alt='Texto que describa la imagen')              
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Educación
            p ¿Tienes bastante experiencia en una habilidad particular? ¿Por qué no crear tus propios cursos digitales o un sitio #[i web] de membresía? Si eres un gran aficionado a un pasatiempo o una habilidad en particular, crear una página #[i web] educativa puede ayudarte a posicionarte como un experto en el nicho.
      
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/slide_5_5_03.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Noticias
            p Crear una página #[i web] de noticias es más fácil que nunca. Las personas buscan información todos los días a través de diversas fuentes. Si te interesa publicar historias innovadoras, crear una #[i web] hará que sea mucho más fácil transmitir tu mensaje.      
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/slide_5_5_04.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Comunidades online
            p Sitios donde grandes audiencias crean un compartir de información  a través de estos espacios, logrando una gran cantidad de participantes de manera online con diferentes propósitos y entre ellos la retroalimentación de temas variados.    
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/slide_5_5_05.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Portafolios
            p Es una página #[i web] profesional que facilita el presentar habilidades y fortalezas. Esto puede mejorar enormemente tu presencia y visibilidad en línea. Además, los portafolios online pueden darte la ventaja en entrevistas de trabajo, concursos y negocios.    
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/slide_5_5_06.jpg', alt='Texto que describa la imagen')

    .cajon.color-acento-botones.p-4
      p.mb-0 Teniendo en cuenta la información anterior, se debe iniciar por definir el propósito principal y la funcionalidad que desea tener con ello.


     

    

    


          
          
                

                            
            
    

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
