<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Herramientas para el diseño y desarrollo multimedia 

    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        .singleTop-txt-deco
          p Las herramientas multimedia se utilizan para diseñar interactividad brindando un marco esencial para organizar y editar los elementos de multimedia como son textos, gráficos, imágenes, sonido y animaciones de video.
          p Las herramientas de multimedia son cualquier combinación de texto, arte gráfico, sonido y video que llega a nosotros por computadora, tablet, celulares u otros medios electrónicos. Están diseñadas para que estos componentes se puedan administrar individualmente, permitiendo interactuar con los usuarios a través de las siguientes funciones:
      .col-lg-5.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img_2_01.svg", alt="alt", style="width:500px;" ).m-auto

    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
      .carousel-inner
        .carousel-item.active
          figure
            img(src='@/assets/curso/tema2/slider_2_01.svg', alt='Texto que describa la imagen')
            figcaption Animaciones
        .carousel-item
          figure
            img(src='@/assets/curso/tema2/slider_2_02.svg', alt='Texto que describa la imagen')
            figcaption Presentaciones
        .carousel-item
          figure
            img(src='@/assets/curso/tema2/slider_2_03.svg', alt='Texto que describa la imagen')
            figcaption Discos de demostración (demos)
        .carousel-item
          figure
            img(src='@/assets/curso/tema2/slider_2_04.svg', alt='Texto que describa la imagen')
            figcaption Capacitación interactiva
        .carousel-item
          figure
            img(src='@/assets/curso/tema2/slider_2_05.svg', alt='Texto que describa la imagen')
            figcaption Simulaciones y visualizaciones técnicas
        .carousel-item
          figure
            img(src='@/assets/curso/tema2/slider_2_06.svg', alt='Texto que describa la imagen')
            figcaption Guías interactivas
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next    

    p Las herramientas multimedia se dividen en:

    .container__m_4.bw3.p-4      
      .bloque-texto-a.custom-clr1.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8
            .bloque-texto-a__texto.p-4
              h5.orange Herramientas de desarrollo
              p Se organizan en grupos basándose en la presentación que utilizan para dar secuencia y organizar los elementos de multimedia y nos permiten reproducir elementos de sonido, ejecutar animaciones y reproducir videos digitales.
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img_2_02.svg", alt="alt").m-auto
          

      .bloque-texto-a.custom-clr2.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/img_2_03.svg", alt="alt").m-auto
          .col-lg-8
            .bloque-texto-a__texto.p-4
              h5.orange Herramientas de trabajo
              p Cada proyecto multimedia tendrá su propia estructura y propósito y requerirá de diferentes características y funciones de edición. Los elementos de multimedia necesitan crearse, editarse y convertirse en formatos de archivos estándares y de aplicaciones especializadas.

    separador

    #t_2_1.titulo-segundo
      h2 2.1 Características de la producción multimedia

    p Según Bartolomé (1994) los productos multimediales suelen tener rasgos característicos para que sean amigables con los usuarios y les permita realizar diferentes acciones y obtener lo que necesitan.
    p.mb-5 Conozcamos las características de la producción multimedia:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Organización, diseño y producción de multimedia" :icono="require('@/assets/curso/tema2/T2_01.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p El proceso de organización, diseño y producción de multimedia involucra crear, diagramar y realizar vistas panorámicas para ilustrar la estructura de un proyecto a nivel general, por lo tanto es necesario contar con los tipos de herramientas mencionadas anteriormente.        
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_01A.svg', alt='', style="width:400px;").m-auto   

      .py-4.py-md-5(titulo="Programación" :icono="require('@/assets/curso/tema2/T2_02.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p Es importante utilizar lenguaje de código para desarrollar: 
            ul.fa-ul.lista-ul--naraja
              li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]]   Estructuras visuales con señalamiento de íconos    
              li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]] Guiones    
              li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]] Diagramas de flujo    
              li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]] Documentos
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_02A.svg', alt='', style="width:400px;").m-auto  

      .py-4.py-md-5(titulo="Interactividad" :icono="require('@/assets/curso/tema2/T2_03.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p Esta característica otorga poder a los usuarios finales de sus proyectos, permitiéndoles controlar el contenido y flujo de información. Las herramientas de desarrollo deben brindar uno o más niveles de interactividad.       
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_03A.svg', alt='', style="width:400px;").m-auto   

      .py-4.py-md-5(titulo="Ajustes del Desempeño" :icono="require('@/assets/curso/tema2/T2_04.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p Los proyectos complejos de multimedia requieren una sincronización de eventos exacta. Es difícil lograr la sincronización porque existe una gran variación en el desempeño de las diferentes computadoras que se necesitan para el desarrollo y distribución de multimedia.       
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_04A.svg', alt='', style="width:400px;").m-auto
               
      .py-4.py-md-5(titulo="Capacidad de Reproducción" :icono="require('@/assets/curso/tema2/T2_05.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p En esta parte su sistema de desarrollo debe permitir construir un segmento o parte de su proyecto y luego probarlo de inmediato, como si el usuario lo estuviera utilizando realmente.        
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_05A.svg', alt='', style="width:400px;").m-auto  

      .py-4.py-md-5(titulo="Elementos Visuales" :icono="require('@/assets/curso/tema2/T2_06.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p Cuanto mayor y más nítida sea una imagen, más difícil es de presentar y manipular en la pantalla de una computadora. Las fotografías, dibujos, gráficos y otras imágenes estáticas deben pasarse a un formato que el ordenador pueda manipular y presentar. 
            p Entre esos formatos están los gráficos de mapas de bits y los gráficos vectoriales.       
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_06A.svg', alt='', style="width:400px;").m-auto  

      .py-4.py-md-5(titulo="Elementos de Audio" :icono="require('@/assets/curso/tema2/T2_07.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0           
            p El sonido, igual que los elementos visuales, tiene que ser grabado y formateado de forma que la computadora pueda manipularlo y usarlo en presentaciones. Los archivos WAV, MP3 y VQF almacenan los sonidos propiamente dichos, como hacen los CD musicales o las cintas de audio. 
            p Los archivos WAV pueden ser muy grandes y requerir compresión, lo que se ha logrado con el MP3 y el VQF.       
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/T2_07A.svg', alt='', style="width:400px;").m-auto  

    #t_2_2.titulo-segundo
      h2 2.2 Software de diseño multimedia

    
    .bloque-texto-a.custom-clr1.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4              
            p Son programas de desarrollo multimedia y con ellos se pueden hacer: animaciones, producciones de video, presentaciones, discos de demostración, guías interactivas, simulaciones y visualizaciones técnicas. Los programas más destacados de diseño gráfico son:
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img_2_2_01.svg", alt="alt").m-auto

    p A continuación, conoceremos cuales son los softwares más utilizados:

    TabsA.color-secundario.mb-5   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ilustrator")
        .row
          .col-lg-6
            h4 Ilustrator
            p Es el programa más utilizado desde hace varios años para hacer ilustraciones y vectorizar imágenes.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/img_2_2_02.jpg", alt="alt").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Photoshop")
        .row
          .col-lg-6
            h4 Photoshop
            p Es quizás, el producto estrella de la famosa suite de Adobe. Es un programa usado para todo tipo de actividades relacionadas con el diseño digital y el favorito de muchos fotógrafos al momento de retocar y dar vida a sus creaciones. 
            p Photoshop permite modificar imágenes y fotografías digitalizadas.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/img_2_2_03.jpg", alt="alt").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Indesign")
        .row
          .col-lg-6
            h4 Indesign
            p Se trata de una aplicación/software de diseño para ordenadores (Windows y MacOS) que permite realizar prácticamente todo tipo de proyectos editoriales como libros físicos o electrónicos, revistas, periódicos, flyers y trípticos promocionales.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/img_2_2_04.jpg", alt="alt").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lightroom")
        .row
          .col-lg-6
            h4 Lightroom
            p En la web podrá acceder a las fotografías, así como organizarlas y compartirlas, de forma sencilla. Lightroom en la web también le permite editar fotografías, incluidos el recorte, la realización de ajustes y la aplicación de ajustes preestablecidos.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/img_2_2_05.jpg", alt="alt").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Premier Pro")
        .row
          .col-lg-6
            h4 Premier Pro
            p Adobe Premiere Pro es un software de edición de video desarrollado por Adobe y publicado como parte de Adobe Creative Cloud. 
            p Está orientado a la edición de vídeos profesionales.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/img_2_2_06.jpg", alt="alt").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="After Effects")
        .row
          .col-lg-6
            h4 After Effects
            p Adobe After Effects es un software de motion graphics y composición digital publicado por Adobe. 
            p Se usa principalmente para posproducción de imágenes en movimiento, animar, alterar y componer creaciones en espacios 2D y 3D con varias herramientas nativas y plugins de terceros.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/img_2_2_07.jpg", alt="alt").m-auto

      




    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
