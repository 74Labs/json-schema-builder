# Json Schema Form Builder

Quickly generate your your schema form using this GUI builder.

# Roadmap

- Complete support of all elements based on schema-form
- Support for editing existing Schemas & Forms
- Provide source definition for different platforms
- 100% test coverage



#Basic Usage

**This is what using the Schema Form Builder should look like:**
First, expose your (exinsting) schema and form to the $scope.

```javascript
angular.module('myModule', ['schemaFormBuilder'])
       .controller('FormBuilderController', function($scope) {
  // JSON Schema
  // add an existing schema to edit it
  // or leave blank to create a new form
  $scope.schema = {};

  // Schema Form Defintion
  // add an existing form definition for editing
  // or leave blank to create a new form
  $scope.form = [];


});
```

Then load them into the Schema Form Builder using the `sfbSchema` and `sfbForm` directives.

```html
<div ng-controller="FormBuilderController">
    <div sfb-schema="schema" sfb-form="form"></form>
</div>
```


# Simply need a html form?
To generate vanilla/bootstrap/material forms checkout ralphowino.github.com/form-builder