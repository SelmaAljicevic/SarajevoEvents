$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({pageNotFound : 'error_404'}); // initialize


  app.route({
    view: 'sport',
    load: 'sport.html'
  });

  app.route({
    view: 'aboutus',
    load: 'aboutus.html'
  });

  app.route({
    view: 'datatable',
    load: 'datatable.html'
  });

  app.route({
    view: 'contactus',
    load: 'contactus.html'
  });

  app.route({
    view: 'form',
    load: 'form.html'
  });

  app.route({
    view: 'single',
    load: 'single-event.html'
  });


  // run app
  app.run();

});
