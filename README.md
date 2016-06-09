# Schema Form Builder

A simple form builder that generates a schema and form based on the [angular schema form](http://schemaform.io) package.


# Roadmap

- Complete support of all elements based on schema-form
<<<<<<< HEAD
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
=======
- Generate vanilla/bootstrap/material forms

Built By: [ralphowino.com](http://ralphowino.com)
>>>>>>> parent of 81af0ee... update builder
