<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/intro/intro.png", alt="alt", style="width:600px;").m-auto
      .col-lg-6
        p Con el auge de las nuevas tecnologías la gran mayoría de actividades cotidianas se han sumergido en un ecosistema digital que ha generado alto impacto en todos los ámbitos y la sociedad en general. Los diferentes sectores productivos se han beneficiado grandemente de estos avances para potencializar sus mercados y aumentar sus clientes, utilizando estrategias de difusión enteramente visuales, en las que los usuarios pueden interactuar, expresar sus intereses y esperar respuestas inmediatas a sus necesidades.
        .cajon.cajon-azul.p-4.mb-0
          p.mb-0 Por lo tanto, la invitación es a realizar una apropiación mayor de los aspectos básicos a tener en cuenta en lo que significan estas herramientas en los procesos de comunicación y lo que pueden aportar a las actividades diarias de las compañías y en la vida cotidiana, lo cual se presenta a través del siguiente recurso multimedia:

    figure.mb-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/i74TnksLTcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //figcaption Video: Leyenda del video    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
