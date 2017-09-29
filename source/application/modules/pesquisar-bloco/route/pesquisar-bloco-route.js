(function() {
  'use strict';

  /**
   * @module application.pesquisar-bloco
   */
  angular
    .module('application.pesquisar-bloco.route')
    .config(configRoute);

  /* @ngInject */
  function configRoute($stateProvider) {
    $stateProvider
      .state('app.private.pesquisar-bloco',{
        url: '/bloco',
        controller: function(){
        },
        templateUrl: 'pesquisar-bloco/view/pesquisar-bloco-view.html',
        controllerAs: 'vm',
        resolve: {

        }
      });
  }
}());
