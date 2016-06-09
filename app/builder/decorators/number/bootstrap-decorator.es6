(function () {
  'use strict';

  /* @ngdoc object
   * @name core
   * @description
   *
   */
  angular
    .module('schemaFormBuilder').config(bootstrapDecorator);

  function bootstrapDecorator(schemaFormDecoratorsProvider) {
    schemaFormDecoratorsProvider.addMapping(
      'bootstrapDecorator',
      'number',
      'builder/decorators/number/bootstrap-number-decorator.tpl.html'
    );
  }

}());
