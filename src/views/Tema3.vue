<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Internet 

    .row.justify-content-center.mb-4      
      .col-lg-7
        .singleTop-txt-deco
          p Según Carballar (2013), internet es una herramienta de comunicación formada por una red de ordenadores de diferentes tipos, interconectados a través de diversas tecnologías. Pero lo que hace que todos puedan funcionar juntos es la existencia de un estándar en el proceso de comunicación llamado TCP/IP o Protocolo de Control de Transmisión/ Protocolo de Internet, el cual hace posible la transferencia de datos en la red y entre equipos informáticos. Un estudio completo de TCP/IP debe llevar a la configuración de una red específica para la óptima transmisión de la información, si algún día se quiere profundizar en la arquitectura de este modelo es importante leer el artículo: “Análisis de una Red en un Entorno Ipv6: Una Mirada Desde Las Intrusiones de Red y El Modelo TCP/IP” que se encuentra en la bibliografía.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/img_3_01.svg", alt="alt", style="width:550px;").m-auto

    p.mb-5 Es necesario recordar lo que esta herramienta representa en la figura 1, a continuación:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Elementos representativos de Internet
        figure
          img(src="@/assets/curso/tema3/img_3_02.svg", alt="Elementos internet", style="width:100%;").m-auto

    p.mb-5 Es así como a través del tiempo internet no solo evoluciona técnicamente, sino que se adapta a las nuevas necesidades de los usuarios particulares y las empresas beneficiando entonces a la población en general hoy a través de la prestación de más servicios como:

    .tarjeta.tarjeta-celeste.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Correo electrónico
            p Servicio que permite enviar mensajes de un ordenador -PC- a otro por medio de protocolos o sistemas de transmisión que integra formatos de texto, imagen y audio entre otros, además de adjuntar archivos. Para enviar un correo o e-mail solo se necesita tener acceso a la red a través de un proveedor de servicio de internet -ISP- y crear una cuenta de correo con nombre de usuario y contraseña.        
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/Slide_01.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 #[i Streaming]
            p Es el servicio que permite mostrar un contenido multimedia en la red de internet, como por ejemplo la reproducción de un video o un audio. Ya que estos archivos consumen mucha memoria en los servidores y PC y para que su transmisión sea rápida se necesita un protocolo o sistema llamado RTP (#[i Real-Time Transport Protocol]) que significa protocolo de transmisión en tiempo real, el cual provee velocidad y fiabilidad en cuanto a que toda la información se podrá visualizar y escuchar.       
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/Slide_02.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Llamadas y video conferencias
            p Hoy se pueden hacer llamadas utilizando la red de internet y es lo que se llama telefonía IP (Protocolo de Internet), igualmente realizar video conferencias en diferentes entornos a través de protocolos de transmisión (sistemas) y aplicaciones como Skype, Teams, Meet, entre otras, las cuales permiten la comunicación visual y auditiva.      
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/Slide_03.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Transferencia de archivos
            p Para realizar la transmisión de archivos entre PC (computadoras personales) es necesario contar con un protocolo o sistema de transferencia que permita la comunicación entre los dispositivos a través de la red. El protocolo mas utilizado es el FTP (#[i File Transfer Protocol]) o protocolo de transferencia de ficheros, el cual permite que la información viaje en paquetes de bits o unidades de memoria pequeñas en la red de internet.      
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/Slide_04.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Mensajería instantánea
            p  Es la forma de comunicación que se utiliza en tiempo real utilizando aplicaciones como el WhatsApp o Facebook que permiten el envío instantáneo de mensajes en una red como internet o utilizando red móvil como 3G, 4G, etc.       
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/Slide_05.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Web
            p  Este servicio nos permite realizar diferentes actividades de manera remota; como consultar textos, imágenes, videos, audios y enviar información entre muchas otras. La información a la que pueden acceder los usuarios está disponible a través de sitios (conjunto de páginas web) o páginas web a los que se puede acceder a través de los navegadores web.         
          .col-md-6
            figure
              img(src='@/assets/curso/tema3/Slide_06.jpg', alt='Texto que describa la imagen')

    separador

    #t_3_1.titulo-segundo
      h2 3.1 Navegador web

    p.mb-5 Para acceder a internet los usuarios necesitan normalmente un ordenador o PC, una red (telefónica, de TV, móvil, radio, satélite, entre otros.), un dispositivo de comunicación (módem) y un proveedor de servicio. Además de lo anterior para acceder a un sitio en la web es indispensable poseer un navegador que lo permita. 
         
    .bloque-texto-a.custom-clr1.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h3 Un navegador web es:
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Un programa que permite ver la información que contiene el sitio web visitado.

    .row.justify-content-center
      .col-lg-6.order-2.order-lg-1
        p.mb-5 Según López Sanz (2016), los navegadores suelen diferenciarse por una serie de criterios como:

        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Plataforma de ejecución")
            .col-12
              p Se puede llamar plataforma de ejecución al sistema operativo del ordenador, el cual facilita la interacción entre el usuario, el #[i hardware] y el software, respecto a esto el navegador safari de los PC marca Apple solo funcionan en el sistema operativos IOS.
          div(titulo="Características del navegador")
            .col-12
              p Los navegadores ofrecen funcionalidades como administración de marcadores, almacenamiento seguro de contraseñas digitadas en el PC y datos digitados en formulario, corrección ortográfica y herramientas de búsqueda.
          div(titulo="Funcionalidades de accesibilidad")
            .col-12
              p Estas funciones corresponden a la personalización de la interfaz que visualiza el usuario; por ejemplo, permitir que pueda navegar por pestañas, bloquear las ventanas emergentes, habilitar opciones de zoom (alejar o acercar) y funciones de búsqueda de textos entre otros.
          div(titulo="Licencia de software")
            .col-12
              p Existen los navegadores de código libre para modificaciones si desea el usuario y código propietario que no permite el acceso para la realización de cambios, como se verá a continuación en los tipos de navegadores

      .col-lg-6.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img_3_03.png", alt="alt", style="width:500px;").m-auto

    separador

    #t_3_2.titulo-segundo
      h2 3.2 Tipos de navegadores

    p.mb-5 Hay diferentes navegadores para que los usuarios puedan acceder a los sitios web y puedan visualizarlos de la misma forma en cada uno de ellos, los cuales se relacionan a continuación en la siguiente tabla:

    .row.mb-5
      .col-lg-6.mb-4
        .crd-h-avatar
          .crd-h-avatar--icon            
            img(src="@/assets/curso/tema3/img_3_04.png", alt="alt")
          .crd-h-avatar--body
            h5 Google Chrome
            p Navegador web desarrollado por Google en un lenguaje de programación de código abierto; es decir que éste está a disposición de todo el mundo de manera gratuita.
            p Está disponible de manera gratuita para plataformas de Windows, MacOS, Android, IOS, Linux, entre otros.
            p.mb-0 Contempla cada pestaña como un proceso independiente, para evitar que un problema en una pestaña pueda afectar a las otras.
      .col-lg-6.mb-4
        .crd-h-avatar
          .crd-h-avatar--icon            
            img(src="@/assets/curso/tema3/img_3_05.png", alt="alt")
          .crd-h-avatar--body
            h5 Mozilla Firefox
            p Navegador web desarrollado por la fundación Mozilla en un lenguaje de programación de código abierto. 
            p Está disponible de manera gratuita para plataformas de Windows, MacOS, Android, IOS, Linux, entre otros.
            p.mb-0 El gran número de desarrolladores que posee Mozilla ha permitido que se hayan corregido al 100% todos los errores que se pueden presentar en la navegación, por lo tanto es de los navegadores más estables y seguros.
      .col-lg-6.mb-4
        .crd-h-avatar
          .crd-h-avatar--icon            
            img(src="@/assets/curso/tema3/img_3_06.png", alt="alt")
          .crd-h-avatar--body
            h5 Safari
            p Navegador web desarrollado por Apple Inc, en un lenguaje de programación de código cerrado; es decir que lenguaje en el que está hecho no está disponible para cualquier usuario.
            p Está disponible para plataformas de Windows, MacOS, IOS.
            p.mb-0 Este navegador ha priorizado la navegación privada utilizando el sistema sandboxing para bloquear sitios web con código malicioso.
      .col-lg-6.mb-4
        .crd-h-avatar
          .crd-h-avatar--icon            
            img(src="@/assets/curso/tema3/img_3_07.png", alt="alt")
          .crd-h-avatar--body
            h5 Microsoft Edge
            p Navegador web integrado al sistema operativo Microsoft Windows 10 para el sistema operativo Microsoft Windows en el año de 1995, desarrollado en un lenguaje de programación de código cerrado.
            p Está disponible para plataformas de Windows, Android, IOS.
            p.mb-0 Además de contemplar aspectos de seguridad para el usuario tiene una ventaja importante al permitir importar las páginas favoritas que se han abierto en otros exploradores.
      .col-lg-6.mb-4
        .crd-h-avatar
          .crd-h-avatar--icon            
            img(src="@/assets/curso/tema3/img_3_08.png", alt="alt")
          .crd-h-avatar--body
            h5 Opera
            p Navegador web desarrollado por la empresa de origen noruego Opera Software, soporta gran cantidad de idiomas y tiene protección antifraude entre otras características.
            p Está disponible para plataformas de Windows, Android, IOS, Linux y free BSD.
            p.mb-0 Este navegador posee una característica importante respecto a eliminar de manera sencilla los datos privados de los usuarios.

    .container__m_4.bw1.p-4
      .row.justify-content-center
        .col-lg-5
          img(src="@/assets/curso/tema3/img_3_09.png", alt="alt", style="width:350px;").m-auto
        .col-lg-7
          p.mb-5 Anteriormente, se mencionó el #[strong sistema operativo] y por si no hay familiaridad con este término: este significa el conjunto de programas que controlan los procesos básicos de un ordenador para que funcionen todas las aplicaciones y los servicios básicos como el funcionamiento del mouse, medios de almacenamiento, memoria, impresora, teclado, entre otros. 
          h5 Elementos de un navegador
          p Los navegadores tienen una apariencia similar que puede ser cambiada por el usuario si lo desea, contienen los mismos elementos que cumplen diferentes funciones. Se debe observar el siguiente video para mayor claridad:

    .hr_blank

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/voDZXzAOKgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //figcaption Video: Leyenda del video 

    p.mb-5 De acuerdo con la estructura anterior la acción que debe realizar un usuario para acceder a un sitio web es simplemente introducir su dirección (URL) en la barra de direcciones para que el navegador muestre el contenido en el área de la página. 

    .container__m_4.bw3
      .row.justify-content-center
        .col-lg-7
          h4 Servidor web
          p Un servidor es un computador o también se suele llama ordenador conectado a internet que almacena cualquier tipo de información y está diseñado para responder a las peticiones de los usuarios. 
          p.mb-4 A diferencia de un servidor cualquiera, un servidor web es un computador que está asociado al #[i hardware] y al software trabajando en combinación para: 

          ul.fa-ul.lista-ul--naraja.mb-5
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] En cuanto al #[i hardware]: almacenar todos los archivos que hacen parte de un sitio web; por ejemplo, los documentos escritos en lenguaje de código HTML, las hojas de estilo CSS y los archivos JavaScript. Responde a las peticiones que realiza el usuario respecto a los sitios web cuando introduce una dirección URL (#[i Uniform Resource Locator] o localizador Uniforme de Recursos) representada por un nombre: sena.edu. 
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] En cuanto al #[i software]: poder entregar los archivos solicitados por el usuario haciendo uso del protocolo HTTP o protocolo de transferencia de hipertexto, que es el que utiliza el navegador para que se puedan visualizar las páginas web.

        .col-lg-5
          img(src="@/assets/curso/tema3/img_3_10.png", alt="alt", style="width:350px;").m-auto  

    p.mb-5 De acuerdo con lo anterior cuando el usuario hace una petición de un sitio web a través del navegador, este lo solicita al servidor web mediante el protocolo HTTP. Cuando la petición llega al servidor correspondiente (hardware), el HTTP (software) recibe el pedido y envía el sitio web solicitado también por la vía HTTP.           

    h4.mb-5 Tipos de servidores

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta.tarjeta-mint
          figure.mb-4
            img(src="@/assets/curso/tema3/img_3_11.svg", alt="alt", style="width:350px;").m-auto
          h5.text-center Servidor web estático
          p.mb-0 Es un computador que aloja sitios web y contiene software HTTP que envía los archivos tal como están almacenados, cuando son solicitados a través de un navegador. Lo anterior quiere decir que el contenido del sitio web también es estático, ya que se conserva invariante ante las acciones que pueda realizar el usuario y su objetivo es presentar datos que no cambian con el paso del tiempo.
      .col-lg-5
        .tarjeta.tarjeta-mint
          figure.mb-4
            img(src="@/assets/curso/tema3/img_3_12.svg", alt="alt", style="width:350px;").m-auto
          h5.text-center Servidor web dinámico
          p.mb-0 Es un computador que aloja sitios web y contiene software HTTP y bases de datos que actualizan los archivos almacenados; por lo tanto, interactúa con el usuario y responde a sus solicitudes procesando la información entregada por éste. Lo anterior significa que el contenido de los sitios web solicitados cambia con el tiempo, sufriendo alteraciones y modificaciones por las acciones que realiza el usuario sobre los datos que presenta.

    p Como se observa en la imagen anterior los servidores web estáticos entregan la información tal cual como la tiene almacenada al ser requerida por el cliente sin hacer ninguna modificación y los servidores web dinámicos procesan la información solicitada a través de una base de datos antes de ser entregada al cliente. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0        
        figure.mb-4
          img(src="@/assets/curso/tema3/img_3_13.png", alt="alt", style="width:350px;").m-auto
      .col-lg-7
        h5 ¿Cuándo utilizar un servidor estático?
        p Se utiliza cuando se solicitan sitios o páginas web meramente informativas y si eres tú el desarrollador se deberá utilizar este servidor cuando se necesita construir páginas que contienen texto, imágenes o fotos que ilustraran al usuario sobre algún tema o producto que quieres que ellos conozcan y solamente se informen.     

        h5 ¿Cuándo utilizar un servidor dinámico? 
        p Se utiliza cuando se requiera procesar algún tipo de información al interactuar con el sitio o página web. Entonces se puede utilizar este servidor cuando se requiera, por ejemplo:

        ul.fa-ul.lista-ul--naraja.mb-5
          li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Crear una tienda virtual de venta de productos o servicios o comercio electrónico (e-commerce). 
          li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Crear un blog con el objeto de publicar contenidos de un tema específico de interés para un público objetivo que puede dejar sus comentarios. 
          li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Crear foros para propiciar espacios de discusión sobre temas de interés.
          li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Crear un portal web con diferentes recursos como enlaces a otros sitios o buscadores.
          li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Crear páginas sencillas con pocos enlaces e información básica con el objeto de conseguir que los visitantes sean seguidores diligenciando formularios de inscripción a la página.

    h3 Hosting

    p El hosting es el espacio de memoria proporcionado por los servidores web para el alojamiento de los archivos de la aplicación web que se tenga, compuesto por documentos con lenguaje de código HTML, PHP, Java Scripts, hojas de estilo CSS, imágenes, documentos PDF, entre otros. Con el servicio de alojamiento los sitios o páginas web estarán disponibles en la red de internet para que puedan ser consultados por los usuarios o clientes en cualquier parte del mundo y a cualquier hora.

    p.mb-5 El hosting lo proveen las empresas prestadoras de servicios de internet que poseen los servidores en propiedad o en alquiler con las especificaciones de hardware y software para el almacenamiento de las páginas web de los clientes.  Estas empresas ofrecen el hosting a través de planes con pagos anuales y con una serie de servicios incluidos de acuerdo con el tipo de plan contemplando las siguientes características:

    .container__m_4.bw1.mb-5
      .row.justify-content-center
        .col-lg-7
          ul.fa-ul.lista-ul--naraja
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Cantidad de espacio o memoria disponible para alojar los archivos que conforman el sitio web.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Transferencia máxima de archivos mensualmente generados por los visitantes y enviaos al servidor.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Número de cuentas de correo asociadas al dominio (empresa) de acuerdo con el plan contratado.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Registrar un dominio de primer nivel, por ejemplo: (.com), (.org), (.edu), etc, los cuales se verán en la sección de Dominios.
            li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Contratar un número determinado de bases de datos para los contenidos web dinámicos, es decir que tienen interacción con el usuario.

        .col-lg-5.mb-4.mb-lg-0        
          figure
            img(src="@/assets/curso/tema3/img_3_14.png", alt="alt", style="width:350px;").m-auto

    .hr_blank

    h3 Tipos de hosting   

    p De acuerdo con los requisitos técnicos de cada proyecto en cuanto a necesidades de programación, bases de datos, transferencia mensual o espacio de memoria, el usuario puede necesitar un tipo de alojamiento específico. Por ejemplo: 

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Hosting compartido")

        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_3_15.svg', alt='marketing', style="width:300px;").m-auto              

          .col-md-6.mb-4.mb-md-0            
            p El servidor proporciona los mismos recursos de potencia de procesamiento, velocidad, memoria RAM (Memoria de Acceso Aleatorio o memoria de almacenamiento temporal que contiene lo que está trabajando el usuario en el momento) y demás, que posea para todas las cuentas de usuario que tengan este servicio de alojamiento. 
            p Es decir, cada cliente que tiene su espacio de almacenamiento en este servidor comparte los recursos de memoria, CPU y todos los aspectos de rendimiento de la máquina, tiene restricciones de instalación de programas en el servidor. 

      .py-3.py-md-4(titulo="Hosting VPS")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_3_15.svg', alt='marketing', style="width:350px;").m-auto               

          .col-md-6.mb-4.mb-md-0            
            p Virtual Private Service o servidor virtual privado, en el cual los clientes comparten un mismo servidor físico que se ha dividido virtualmente en compartimentos de memoria con asignación de recursos propios de RAM, CPU, espacio de almacenamiento, transferencia de datos y con la posibilidad de personalizarlo con el sistema operativo de mayor conveniencia.

      .py-3.py-md-4(titulo="Hosting Dedicado")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_3_15.svg', alt='marketing', style="width:350px;").m-auto                

          .col-md-6.mb-4.mb-md-0            
            p Ofrece un servidor físico completo para el proyecto del cliente, no comparte recursos y tiene acceso a los dispositivos de hardware y las aplicaciones de software, sin ningún tipo de restricción para instalaciones. 
            p El cliente puede tener el control total de sus aplicaciones y la administración del servidor. 
            
      .py-3.py-md-4(titulo="Hosting en la nube (cloud)")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_3_15.svg', alt='marketing', style="width:350px;").m-auto                

          .col-md-6.mb-4.mb-md-0            
            p La página web del cliente no está alojada en un solo servidor sino en varios servidores interconectados en la nube, con el objeto de que, si un servidor falla ante la solicitud de un usuario, el otro disponible puede entrar a solventar el problema. 

    separador
    #t_3_3.titulo-segundo
      h2 3.3 Dominios

    .container__m_4.bw1.p-4
      .row
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/img_3_15.png", alt="alt", style="width:350px").m-auto
        .col-lg-7
          p Los sitios o páginas web se alojan en servidores que tienen una dirección IP (protocolo/internet) la cual identifican los navegadores cuando solicitan la página web. Esta dirección es un conjunto de cuatro grupos de números, por ejemplo:
          p #[strong.orange IP: 210.23.87.122]
          p Debido a la dificultad para los usuarios el tener que recordar estos números, las organizaciones que regulan el funcionamiento de los servidores a nivel mundial se unieron para crear la organización ICANN (#[i Internet Corporation for Asigned Names and Numbers]) con el objetivo de establecer un sistema para gestionar los dominios utilizando una combinación alfanumérica (letras, números y símbolos) los cuales identifican un servidor y una página determinada para facilitar la navegación por internet. Dicho sistema se denomina DNS (#[i Domain Name System]) o Sistema de Nombres de Dominio, los cuales son almacenados en Servidores llamados por el mismo nombre: “Servidores de Nombres de Dominio – DNS-”.

    .bg-mint.pt-4
      .row.mb-5
        h4 Concepto de dominio
        .col-lg-7
          p El dominio es el nombre con el que un sitio o página web se identifica en la red de internet, el cual es solicitado al DNS mediante un navegador web que permite acceder al contenido requerido por el usuario. 
            br
            br
            | Los nombres de dominio se componen de dos partes: la etiqueta y la extensión. La etiqueta sirve para determinar el nombre de una entidad, empresa, asociación, persona, etc. y la extensión indica el tipo o categoría de dominio dependiendo de la razón social o actividad a la que se dedica, como se verá a continuación. 
            br
            br
            | Los dominios son indexados por los motores de búsqueda, por ello es aconsejable colocar un nombre que posiblemente el usuario pueda relacionar con su necesidad.
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/img_3_16.png", alt="alt", style="width:350px").m-auto 
      
      h4 Formación de un Dominio
      p.mb-4 Para formar un nombre de dominio se deben tener en cuenta las siguientes reglas de sintaxis:
      ul.fa-ul.lista-ul--naraja.mb-4
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] No utilizar espacios en el nombre.
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] No utilizar caracteres con acento o especiales (tilde, ¿?, *, “”, $, %, etc.).
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Utilizar las letras del alfabeto español (A-Z), incluyendo la ñ.
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Se pueden utilizar los números (0-9).
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Colocar solo letras minúsculas puesto que no se tienen en cuenta las mayúsculas.
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] No utilizar nombres de ciudades.
        li.mb-3 #[span.fa-li #[i.fas.fa-pen-square]] Puede contemplarse entre 3 y 63 caracteres.
      p Cuando se tiene seleccionado el nombre se debe proceder al registro de este, a través de un proveedor autorizado ante la ICANN que verifica si ya existe o si se puede utilizar. Realizada esta comprobación el usuario puede adquirirlo.    

    h3.mt-5 Tipos de dominio
    p.mb-5 Existen cuatro tipos de dominio clasificados jerárquicamente de acuerdo con las reglas establecidas por el Sistema de Nombres de Dominio -DNS-: 

    #menu3.row.g-0.justify-content-center.mb-5
      .col-auto.mb-4
        a(href="#m1A", title="title") 
          figure
            img(src="@/assets/curso/tema3/m1.svg", alt="alt", style="width:150px").m-auto
      .col-auto.mb-4
        a(href="#m2A", title="title") 
          figure
            img(src="@/assets/curso/tema3/m2.svg", alt="alt", style="width:150px").m-auto
      .col-auto.mb-4
        a(href="#m3A", title="title") 
          figure
            img(src="@/assets/curso/tema3/m3.svg", alt="alt", style="width:150px").m-auto
      .col-auto.mb-4
        a(href="#m4A", title="title") 
          figure
            img(src="@/assets/curso/tema3/m4.svg", alt="alt", style="width:150px").m-auto

    .hr_blank

    .row.justify-content-end
      .col-auto
        .btn_up
          a(href="#menu3", title="subir")
            i.fas.fa-angle-up 

    #m1A.row              
      .col-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/m1A.svg", alt="alt", style="width:120px").m-auto

      .col-lg
        h4 Dominios de primer nivel
        p.mb-4 #[strong.orange Los dominios de primer nivel o dominios genéricos] corresponden a algunas extensiones genéricas, tales como:

        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style="width:20%;").text-center Extensi&oacute;n
                th(style="width:80%;").text-center P&aacute;ginas de uso
            tbody
              tr.text-center
                td .com
                td Comercial
              tr.text-center
                td .info
                td Informativo
              tr.text-center
                td .edu
                td Educativo
              tr.text-center
                td .org
                td Organizacional
              tr.text-center
                td .net
                td Redes y proveedores de internet
              tr.text-center
                td .gov
                td Gubernamental
              tr.text-center
                td .int
                td Internacional
              tr.text-center
                td .mil
                td Militar

    .hr-dashed

    .row.justify-content-end
      .col-auto
        .btn_up
          a(href="#menu3", title="subir")
            i.fas.fa-angle-up 

    #m2A.row              
      .col-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/m2A.svg", alt="alt", style="width:120px").m-auto
      .col-lg
        .row
          .col-lg-8
            h4 Dominios de segundo nivel
            p #[strong Un dominio de segundo nivel] es aquel nombre elegido libremente que va antes del punto (.) del dominio de primer nivel.
            p Es decir, un dominio de segundo nivel, con aquellas palabras que van entre WWW y la extensión final.
            p #[strong.orange También son llamados SLD o nombre de dominio.] 
            p Ejemplos:
            ul.lista-ul.lista-ul--naraja
              li 
                i.fas.fa-angle-right
                | www.google.com
              li 
                i.fas.fa-angle-right
                | www.sena.edu        
          .col-lg-4.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/tema3/img_3_10.png", alt="alt", style="width:300px;").m-auto

    .hr-dashed

    .row.justify-content-end
      .col-auto
        .btn_up
          a(href="#menu3", title="subir")
            i.fas.fa-angle-up 

    #m3A.row             
      .col-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/m3A.svg", alt="alt", style="width:120px").m-auto
      .col-lg
        .row
          .col-lg-8
            h4 Dominios de tercer nivel
            p.mb-4 #[strong Los dominios de tercer nivel] son aquellos que van después del dominio de primer nivel o TLD y corresponde al dominio especifico de país (248 códigos de país que existen), es decir a la parte final de las direcciones de Internet, como por ejemplo:
            ul.lista-ul.lista-ul--naraja
              li 
                i.fas.fa-angle-right
                | .co: Colombia
              li 
                i.fas.fa-angle-right
                | .es: España
              li 
                i.fas.fa-angle-right
                | .ar: Argentina

            p También son llamados estos dominios TrLD.
            p #[strong.orange Estos indican que se trata de un dominio genérico pero específico para usuarios de cierto país.] 
            p Ejemplo:
            p .com.co, en este caso el dominio genérico es .com y el especifico es para Colombia.

          .col-lg-4.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/tema3/img_3_10.png", alt="alt", style="width:300px;").m-auto

    .hr-dashed

    .row.justify-content-end
      .col-auto
        .btn_up
          a(href="#menu3", title="subir")
            i.fas.fa-angle-up 

    #m4A.row              
      .col-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/m4A.svg", alt="alt", style="width:120px").m-auto
      .col-lg
        .row
          .col-lg-8
            h4 Subdominios
            p El subdominio también recibe el nombre de anexo de un dominio, puesto que nos conduce a un apartado concreto de un sitio o página web, sin necesidad de indicarle al servidor la ruta completa.
            p Por ejemplo cuando para mi empresa creo un blog al cual quiero que accedan los usuarios directamente.    
            p Ejemplo: #[strong.orange https://www.blog.mite.com.co]
            p Lo anterior conducirá directamente al usuario al blog que se ha creado para la empresa mite.
            p.mb-4 #[strong.orange Https], indica el protocolo de transmisión de los datos que utiliza la red de internet.
              br
              br
              | Puede consultar otros dominios en el siguiente enlace:
            .row
              .col-auto 
                a.anexo.mb-4(:href="obtenerLink('downloads/Dominios_Necesidad_Implicaciones.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Enlace web.] Dominios, su necesidad y sus implicaciones   

          .col-lg-4.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/tema3/img_3_10.png", alt="alt", style="width:300px;").m-auto            




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
