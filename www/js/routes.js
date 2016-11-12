angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
        
     
  
      .state('opciones', {
    url: '/page1',
    templateUrl: 'templates/opciones.html',
    controller: 'opcionesCtrl'
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('inicioSesion', {
    url: '/page4',
    templateUrl: 'templates/inicioSesion.html',
    controller: 'inicioSesionCtrl'
  })

  .state('registrarUsuario', {
    url: '/page6',
    templateUrl: 'templates/registrarUsuario.html',
    controller: 'registrarUsuarioCtrl'
  })

  .state('inicio', {
    url: '/page7',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('sexo', {
    url: '/page8',
    templateUrl: 'templates/sexo.html',
    controller: 'sexoCtrl'
  })

  .state('calentamiento', {
    url: '/page9',
    templateUrl: 'templates/calentamiento.html',
    controller: 'calentamientoCtrl'
  })

  .state('ejercicios', {
    url: '/page10',
    templateUrl: 'templates/ejercicios.html',
    controller: 'ejerciciosCtrl'
  })

  .state('rutinas', {
    url: '/page11',
    templateUrl: 'templates/rutinas.html',
    controller: 'rutinasCtrl'
  })

  .state('nutricion', {
    url: '/page12',
    templateUrl: 'templates/nutricion.html',
    controller: 'nutricionCtrl'
  })

$urlRouterProvider.otherwise('/page7')

  

});