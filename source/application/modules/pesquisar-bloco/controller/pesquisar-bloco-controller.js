; (function () {
  'use strict';

  /**
   * @module application.pesquisar-bloco
   */
  angular
    .module('application.pesquisar-bloco.controller')
    .controller('PesquisarBlocoController', PesquisarBlocoController);

  /* @ngInject */
  function PesquisarBlocoController($scope, Restangular) {
    Restangular.setBaseUrl('https://autorizacao.uno.desenv.ctis.mctic.gov.br/backend-uno-autorizacao/rest/')
    var vm = this;
    vm.pesquisarBloco = null;

    vm.acessar = function () {
      Restangular.all('sistema').getList().then(function (params) {
        console.log(params);
      });
    }

  }
}());
