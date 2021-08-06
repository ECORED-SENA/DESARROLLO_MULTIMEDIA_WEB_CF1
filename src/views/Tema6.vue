<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Realidad aumentada 

    p.mb-4 La integración entre el mundo real (físico) y el mundo virtual es el objetivo principal de esta tecnología. Para lograr la reproducción de la realidad aumentada se requieren tres elementos fundamentales:
    ul.fa-ul.lista-ul--naraja.mb-4
      li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]] Un objeto real que funcione como referencia para la interpretación y creación del objeto virtual.
      li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]] Un dispositivo con cámara; es decir, un teléfono móvil inteligente, con el cual se pueda transmitir la imagen del objeto real.
      li.mb-2 #[span.fa-li #[i.fas.fa-pen-square]] Un #[i software] integral que pueda interpretar la señal transmitida por la cámara del dispositivo móvil.
    p.mb-5 Se pueden explorar diferentes puntos sobre la realidad aumentada, a través del siguiente recurso:

    .row.mb-5
      .col-lg-7.order-2.order-lg-1    

        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Concepto")
            .col-12
              p La realidad aumentada es un recurso tecnológico especializado que   ofrece experiencias interactivas al usuario a partir de una combinación de la dimensión virtual y la dimensión física, las cuales con la ayuda de  gráficos sobre una vista del mundo real, agregan la información virtual a la realidad que ve el usuario.
              p Estos dos elementos se combinan en tiempo real, por medio de las tecnologías permitiendo  disponer de una visión diferente de la realidad, es decir, inserta objetos virtuales a contextos físicos, usando la interfaz del ambiente real con el apoyo de la tecnología. 
          div(titulo="Acceso")
            .col-12
              p Los usuarios acceden  por medio  de dispositivos digitales diseñados en tres dimensiones para tal fin, como son  teléfonos móviles o gafas, permitiendo combinar imagen real y virtual, la (RA) sucede en tiempo real y se proyecta como una imagen en 3D.
          div(titulo="Importancia")
            .col-12
              p A nivel mundial los usuarios están generando conciencia de la importancia que ha tomado  la tecnología  en la vida de las personas, por ello surgen nuevas alternativas dentro de los procesos de transformación digital, con la finalidad de alcanzar distintos objetivos, en diferentes entornos y contextos de desarrollo personal.
          div(titulo="¿Cómo funciona?")
            .col-12
              p Realmente su funcionamiento es muy sencillo, la interacción sucede a través de un programa, de un marcador en el espacio físico y del GPS, a través de la cámara del dispositivo, el objeto real se transmite para el #[i software], este recibe la imagen y la combina con las proyecciones 3D, son introducidas en la imagen y sobrepuestas en el entorno físico, reflejando el resultado de la RA al usuario.     

      .col-lg-5.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img_6_01.jpg", alt="alt", style="width:500px;").m-auto

    h3.mb-5 Ejemplos de realidad aumentada 

    .row.justify-content-center
      .col-lg-4
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_02.svg", alt="filtros", style="width:400px;").m-auto
        h5.text-center.mb-4 Filtros de aplicaciones de Snapchat o Instagram
        p El algoritmo de las aplicaciones determina puntos de referencia en la imagen de la cámara del dispositivo móvil, logrando de esta manera insertar los diseños digitales de los filtros de una forma precisa y usar una carátula de 3D, logrando analizar los movimientos del usuario y logrando la adaptación del filtro a la escena en tiempo real.
      .col-lg-4
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_03.svg", alt="qr", style="width:400px;").m-auto
        h5.text-center.mb-4 QR Code
        p Es una alternativa al código de barras tradicional, cuando la cámara del dispositivo móvil captura la imagen de la figura, el #[i software] transcribe ese contenido, como resultado puede ser un texto, una imagen o un enlace a un sitio #[i web].
      .col-lg-4
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_04.svg", alt="google translate", style="width:400px;").m-auto
        h5.text-center.mb-4 Google Translate 
        p Permite detectar idiomas, traducir palabras y frases escritas en anuncios y textos automáticamente, usando una foto obtenida por medio del dispositivo móvil, un recurso muy útil y sencillo con un resultado óptimo claro para los usuarios.
        p De este modo, la aplicación interactúa con la cámara y presenta  informaciones virtuales en mundo real.


    separador

    #t_6_1.titulo-segundo
      h2 6.1 Características de la realidad aumentada

    p Lo que hace a la realidad aumentada una tecnología con un potencial enorme y a su vez la convierte en una de las principales armas de innovación para los próximos años, son sus características que generan en el público emociones reales, lo que incluye al usuario y su realidad.
    p.mb-5 La realidad virtual consiste en introducir al usuario en un mundo diferente, mientras que la realidad aumentada permite ver en el mundo real con información añadida. A continuación, se pueden ver estas características:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema6/img_infografia.svg', alt='caracteristicas realidad aumentada')        

      .tarjeta.color-acento-botones.p-4(x="59%" y="32%")
        .h5.mb-2 Permite la combinación del mundo real y el mundo virtual
        p Gracias a la realidad aumentada  se puede interactuar en el mundo real con elementos del mundo virtual, mezclando así lo mejor de ambos, de esta forma se pueden tener experiencias más completas que no serían posibles sin su uso.

      .tarjeta.color-acento-botones.p-4(x="23.5%" y="69%")
        .h5.mb-2 Depende del contexto
        p Así la información que incluimos tiene relación directa con la información que vemos con nuestros propios ojos, de esta manera, podremos ver nuestro entorno real con la información añadida que nos proporciona la RA, formando así una imagen más completa.

      .tarjeta.color-acento-botones.p-4(x="44.3%" y="35.7%")
        .h5.mb-2 Es interactiva en tiempo real
        p Un cambio, una acción, una respuesta que realice el usuario; tiene una repercusión inmediata en la escena recreada con realidad aumentada.
        p La realidad aumentada interactúa, por lo tanto, con nosotros en tiempo real, proporcionándonos una experiencia más realista.

      .tarjeta.color-acento-botones.p-4(x="64.75%" y="83%")
        .h5.mb-2 Utiliza las tres dimensiones
        p La información se muestra siempre con perspectiva, dando la sensación de que adquiere la capacidad física de su entorno, además gracias a la evolución de esta tecnología se puede interactuar directamente con las capacidades físicas del entorno.
    
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('downloads/caracteristicas_realidad_aumentada.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Características realidad aumentada

    separador

    #t_6_2.titulo-segundo
      h2 6.2 Tipos de realidad aumentada

    p.mb-5 Hay diversos tipos de realidad aumentada dependiendo del objetivo final que se busque y sobre todo de los componentes del mundo real que entren en juego, todos estos elementos juegan un papel importante al momento de experimentar y llegar a esas fibras que hacen que la relación con el usuario sea más fuerte. Siendo así, a continuación, se podrán conocer: 

    .row.justify-content-center.mb-5
      .col-lg-6
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_2_01.svg", alt="imagenes", style="width:95px;").m-auto
        h5.text-center.mb-4 Imágenes
        p Cualquier imagen es válida para colocar contenido de Realidad Aumentada; anteriormente se usaban imágenes que venían con contenido tipos “Hiperlink”, o códigos que tienen referencias similares a códigos QR, los cuales generaban una retro alimentación muy corta; ahora gracias a las nuevas técnicas de reconocimiento de imágenes y formas, la RA es más natural con el entorno, haciendo que sea más sencillo para el usuario poder adaptarse a dichas tecnologías.
        p Elementos como logos, cartas de restaurantes, mapas de ciudades, ofertas y diferentes elementos son algunas de las opciones que se pueden aprovechar para generar más interés por parte del consumidor final.
      .col-lg-6
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_2_01A.jpg", alt="imagenes", style="width:610px;").m-auto
          figcaption #[a(href="https://www.youtube.com/watch?v=iEWGk7BU4iU&t=10s ", title="title", target="_blank") https://www.youtube.com/watch?v=iEWGk7BU4iU&t=10s]
           
        p.small #[strong Nota:] en el ejemplo mostrado anteriormente se puede observar la interacción de la RA desde un celular.  Se aprecia como en el celular aparecen imágenes de RA cuando enfoca un elemento de la realidad.

    .row.justify-content-center.mb-5
      .col-lg-6
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_2_02.svg", alt="espacios", style="width:95px;").m-auto
        h5.text-center.mb-4 Espacios
        p La RA está en continua evolución, permitiendo que se puedan reconocer espacios reales, espacios como un restaurante o un museo, hasta una fábrica o cualquier lugar donde nos podamos situar; así de importante es que la RA permite reconocer y memorizar donde está el techo y el piso, las paredes, los muebles, sus distancias, etc. 
        p Gracias a la recolección de esta información se pueden generar espacios 3D donde se puede disponer toda esta información y entregar a los usuarios información aumentada como demarcación de rutas, identificación de elementos o componentes, interacción entre dos personas en espacios virtuales, etc.
      .col-lg-6
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_2_02A.jpg", alt="espacios", style="width:610px;").m-auto
          figcaption #[a(href="https://www.youtube.com/watch?v=0XYpLQMOxPo&t=1s ", title="title", target="_blank") https://www.youtube.com/watch?v=0XYpLQMOxPo&t=1s] 
          
        p.small #[strong Nota:] en el ejemplo anterior se puede observar la interacción de la RA desde un celular en el interior de una fábrica; podemos detallar señales de diferentes partes del lugar.

    .row.justify-content-center.mb-5
      .col-lg-6
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_2_03.svg", alt="lugares", style="width:95px;").m-auto
        h5.text-center.mb-4 Lugares
        p Si sabemos las coordenadas de un lugar concreto, es muy posible que gracias a la RA podamos visualizar contenido que no se encontrará de otra forma; gracias a los sensores que la mayoría de dispositivos poseen como los GPS y las brújulas digitales podemos encontrar diferentes puntos de interés o PDI. 
        p Gracias al continuo avance de la tecnología podemos encontrar como elementos visuales pueden jugar con la perspectiva, con las distancias, alturas, sombras, colores y diferentes elementos visuales que ayudan y dan fuerza a la RA.
      .col-lg-6
        figure.mb-4
          img(src="@/assets/curso/tema6/img_6_2_03A.jpg", alt="lugares", style="width:610px;").m-auto
          figcaption #[a(href="https://www.youtube.com/watch?v=larV8kC_D-w&feature=emb_logo", title="title", target="_blank") https://www.youtube.com/watch?v=larV8kC_D-w&feature=emb_logo]
        
        p.small #[strong Nota:] en el ejemplo anterior se puede observar la interacción de la RA desde un celular en espacios públicos, donde podemos encontrar diferente información que llaman PDI y traen información para el usuario.

    h3.mb-4 Tipos de Realidad Aumentada (RA) según su utilización

    figure.mb-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m9s9zzdu_mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

    separador

    #t_6_3.titulo-segundo
      h2 6.3 Beneficios de la realidad aumentada

    p Sabiendo que la realidad aumentada (RA) resalta la percepción de los usuarios respecto a su entorno real a través de una mayor interacción con él, una de las mayores ventajas que se deriva de ella son los beneficios para las empresas puesto que enriquece sus procesos cotidianos y por lo tanto genera ventajas competitivas para el sector en general.
    p Por ejemplo:

    .row
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-azul
          figure.mb-4
            img(src="@/assets/curso/tema6/img_6_3_01.svg", alt="alt", style="width:65px;").m-auto
          p.text-center Proporciona una experiencia diferente a los consumidores y mejora el valor percibido por los clientes respecto a las marcas y los productos que ofrecen las empresas, al tener una mayor experiencia con su origen y el recorrido en el proceso de fabricación hasta que llega a sus manos. 
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-azul
          figure.mb-4
            img(src="@/assets/curso/tema6/img_6_3_02.svg", alt="alt", style="width:65px;").m-auto
          p.text-center Comunica a la empresa con el público objetivo de manera más rápida y económica proporcionando mensajes claros al ser transmitidos sobre los objetos y situaciones reales del entorno. Esto genera una mayor comprensión de los contenidos.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-azul
          figure.mb-4
            img(src="@/assets/curso/tema6/img_6_3_03.svg", alt="alt", style="width:65px;").m-auto
          p.text-center Incrementa el uso de la tecnología móvil, aumentando el mercado y el desarrollo de las empresas dedicadas a la tecnología, ya que los clientes potenciales pueden probar con mayor facilidad no solo la usabilidad de su dispositivo personal, sino la de los productos que desean comprar.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-azul
          figure.mb-4
            img(src="@/assets/curso/tema6/img_6_3_04.svg", alt="alt", style="width:65px;").m-auto
          p.text-center Optimiza la producción de las empresas permitiendo mejorar los procesos y capacitar al personal utilizando mayores elementos explicativos en los textos, gráficas, audios y videos, minimizando así los errores en las tareas diarias. 


    





</template>

<script>
export default {
  name: 'Tema6',
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
