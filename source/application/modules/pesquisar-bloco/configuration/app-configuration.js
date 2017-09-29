; (function () {
  angular
    .module('application.configuration')
    .config(configApplication);

  /* @ngInject */
  function configApplication($httpProvider, RestangularProvider) {
    $httpProvider.defaults.useXDomain = true;
    RestangularProvider.setDefaultHttpFields({
      withCredentials: true
    });
    RestangularProvider.setBaseUrl('https://pvl065.mctic.gov.br:21043/backend-isei/rest');

  }
})();
