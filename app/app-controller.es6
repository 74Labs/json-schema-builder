angular.module('schemaFormBuilderApp').controller('FormBuilderController',function ($scope) {
  // JSON Schema
  // add an existing schema to edit it
  // or leave blank to create a new form
  $scope.schema = {};

  // Schema Form Defintion
  // add an existing form definition for editing
  // or leave blank to create a new form
  $scope.form = [];


  $scope.$watch(function () {
    return $scope.form;
  }, function (update) {
    window.console.log(update);
  }, true);

  $scope.model = {
            name: 'Sample Form',
            type: 'schema-form',
            fields: [
              {
                type: 'text',
                key: 'first_name',
                title: 'First name',
                open: false
              },
              {
                type: 'text',
                key: 'last_name',
                title: 'Last name',
                open: false
              },
              {
                type: 'email',
                key: 'email',
                title: 'Email',
                open: false,
                showAdvance: true,
                fieldAddonRight:'<i class="glyphicon glyphicon-envelope"></i>'
              },
              {
                type: 'date',
                key: 'dob',
                title: 'Date of Birth',
                open: false
              },
              {
                type: 'dropdown',
                key: 'marital-status',
                title: 'Marital Status',
                open: false
              },
              {
                type: 'date-time',
                key: 'check-in',
                title: 'Check In',
                open: false
              },
              {
                type: 'date-time',
                key: 'check-out',
                title: 'Check Out',
                open: false
              },
              {
                type: 'textarea',
                key: 'bio',
                title: 'Biography',
                open: false
              }
            ]
          };
});