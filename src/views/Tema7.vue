<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Aplicaciones de la realidad aumentada

    p Las aplicaciones de la realidad aumentada son muy variadas y prácticamente en cualquier contexto de uso, se pueden encontrar formas de utilizarla mejorando el resultado.

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Marketing")
        .row.justify-content-center.align-items-center
          .col-md-5
            figure
              img(src='@/assets/curso/tema7/img_7_01.png', alt='marketing', style="width:450px;")              

          .col-md-6.mb-4.mb-md-0
            h4 Marketing
            p La publicidad impresa y en lugares de conveniencia sigue siendo a día de hoy un recurso que las marcas usan ampliamente para promocionarse. Una aplicación habitual de la realidad aumentada consiste en aumentar estos anuncios a través de una aplicación para móvil que se publica a través de los market stores. Por medio de la app se podría acceder a contenidos adicionales como videos o animaciones 3D, descuentos, regalos o similar.
            p Otra posibilidad consiste en aumentar directamente los productos, por ejemplo, en un concesionario, se podría ver de forma superpuesta a cada coche, información adicional que muestre equipamientos opcionales o partes del motor que no se encuentran a la vista.
            p Los catálogos aumentados son también muy habituales dentro de las aplicaciones para el marketing. Permiten al usuario entender mejor como funciona un producto, como son los pasos para montarlo o como se integra en un conjunto mayor.  

      .py-3.py-md-4(titulo="Formación")
        .row.justify-content-center.align-items-center
          .col-md-5
            figure
              img(src='@/assets/curso/tema7/img_7_02.svg', alt='Formación', style="width:450px;")              

          .col-md-6.mb-4.mb-md-0
            h4 Formación
            p Existen muchas formas de aplicar la realidad aumentada para mejorar la formación.
            p Muchas veces debemos consultar un manual en papel mientras manipulamos elementos físicos, por ejemplo, cuando montamos un mueble o cuando se maneja una máquina. En estos casos, la realidad aumentada con gafas ofrece un enorme potencial, ya que además de dejarnos las manos libres para realizar el montaje, la   información se muestra en el lugar que más interese, o incluso superpuesta al objeto sobre el que hay que operar.

      .py-3.py-md-4(titulo="Educación")
        .row.justify-content-center.align-items-center
          .col-md-5
            figure
              img(src='@/assets/curso/tema7/img_7_03.svg', alt='Educación', style="width:450px;")              

          .col-md-6.mb-4.mb-md-0
            h4 Educación
            p Los libros de texto nunca volverán a ser los mismos cuando se les incorpora realidad aumentada para disfrutar de forma interactiva y en 3d de lecciones de anatomía, química o historia.
            p La posibilidad de vincular a los materiales escolares información tridimensional facilita enormemente la comprensión de las materias.
            p Otro aspecto muy relevante de la aplicación de realidad aumentada en el mundo educativo es que aporta a los estudiantes un entorno interactivo con el conocimiento.
            p La libertad de manipular los elementos 3D y de explorar las escenas, resulta muy entretenido y permite aumentar la motivación de los estudiantes para potenciar el ritmo de aprendizaje.   

      .py-3.py-md-4(titulo="Industria")
        .row.justify-content-center.align-items-center
          .col-md-5
            figure
              img(src='@/assets/curso/tema7/img_7_04.svg', alt='Industria', style="width:450px;")              

          .col-md-6.mb-4.mb-md-0
            h4 Industria
            p La industria está siendo uno de los sectores en los que antes se está adoptando la tecnología de realidad aumentada. Aplicaciones en ámbitos como el mantenimiento, el apoyo al montaje o el control de calidad son ya habituales en el mundo industrial.
            p Los principales usos que se le da a esta tecnología están relacionados con la presentación de procedimientos guiados paso a paso, que indican a un operario como realizar un montaje o una reparación, o con sistemas de tele asistencia que facilitan la resolución de incidencias de forma remota, gracias a que un experto puede ayudar de forma más efectiva gracias a las instrucciones en pantalla basadas en realidad aumentada en el objeto sobre el que hay que operar.  

      .py-3.py-md-4(titulo="Medicina")
        .row.justify-content-center.align-items-center
          .col-md-5
            figure
              img(src='@/assets/curso/tema7/img_7_05.svg', alt='Medicina', style="width:450px;")              

          .col-md-6.mb-4.mb-md-0
            h4 Medicina
            p Uno de los aspectos más potentes de la realidad aumentada es la capacidad de mostrar cosas que no son visibles a simple vista. En el ámbito médico, esta posibilidad tiene multitud de aplicaciones.
            p Por ejemplo, un cirujano podría tener información ampliada del paciente mientras está realizando una intervención, e incluso podría superponer al cuerpo de ese paciente unas guías que le indiquen por donde debe intervenir gracias al uso de imágenes médicas con realidad aumentada (TAC, radiografía o resonancia magnética).
            p Una ventaja muy interesante de las gafas de realidad aumentad para los entornos quirúrgicos es que se pueden manejar con la voz y los gestos, no es necesario tocar nada. De forma que no se impacta en la imprescindible esterilización de todo lo que hay en un quirófano.

    h3 Diferencia entre la realidad aumentada y realidad virtual
    p.mb-5 Dos tecnologías que llevan un nombre similar, y que a los usuarios les cuesta distinguir una de otra. Obviamente tienen similitudes, pero son sobre todo las diferencias entre las dos que hacen que tengan diferentes usos.

    .row.justify-content-center
      .col-lg-5
        .tarjeta.tarjeta-cyan
          figure.mb-5
            img(src="@/assets/curso/tema7/img_7_06.svg", alt="alt", style="width:140px;" ).m-auto          
          p #[strong La realidad aumentada], por un lado, necesita del mundo real para poder proyectar sus imágenes y crear experiencias inmersas para los usuarios, pero sin aislarse del mundo real. Lo que hace esta tecnología es superponer o añadir capas a la realidad, creando de esta forma un mundo que es fruto de la mezcla entre lo digital y lo real.
      .col-lg-5
        .tarjeta.tarjeta-cyan
          figure.mb-5
            img(src="@/assets/curso/tema7/img_7_07.svg", alt="alt", style="width:140px;" ).m-auto          
          p #[strong La realidad virtual], por otro lado, no hace uso del mundo real y lo que pretende es crear un mundo completamente nuevo, aislado del mundo real.
          p Así como la realidad virtual tiene múltiples usos tanto dentro como fuera del mundo de los juegos, la realidad virtual sobre todo brilla por las posibilidades que ofrece a los videojuegos, ya que, al no hacer uso del mundo real, no tiene límites a la hora de crear mundos nuevos y fantásticos.
          
    

</template>

<script>
export default {
  name: 'Tema7',
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
