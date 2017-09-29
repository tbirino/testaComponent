(function(){
  'use strict';

  angular.module('application.configuration', ['ui.router','restangular']);
  angular.module('application.view', []);

  angular
    .module('application', [
      'ngResource',
      'ngAnimate',
      //'ngTouch',
      'ngMessages',
      'ngCookies',
      'ngSanitize',
      'ngMaterial',
      'ngAria',
      'ui.router',
      'application.view',
      'application.configuration',
      'ngc-core',
      'ngc-cabecalho',
      'ngc-menu',
      'isei-pesquisar-bloco-frontend',
      'application.pesquisar-bloco'
    ]);

    

})();
