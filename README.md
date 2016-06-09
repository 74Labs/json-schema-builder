# Schema Form Builder

A simple form builder that generates a schema and form based on the [angular schema form](http://schemaform.io) package.

<<<<<<< HEAD
=======
(branch for directive development)

Quickly generate your your schema form using this GUI builder.
>>>>>>> refs/remotes/origin/directive

# Roadmap

- Complete support of all elements based on schema-form
<<<<<<< HEAD
- Support for editing existing Schemas & Forms
- Provide source definition for different platforms
- 100% test coverage

<<<<<<< HEAD
=======
<<<<<<< HEAD
# Demo
There is a live demo at http://ralphowino.github.io/schema-form-builder
=======
>>>>>>> refs/remotes/origin/directive


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

<<<<<<< HEAD
=======
>>>>>>> refs/remotes/origin/master
>>>>>>> refs/remotes/origin/directive

# Simply need a html form?
To generate vanilla/bootstrap/material forms checkout ralphowino.github.com/form-builder
=======
- Generate vanilla/bootstrap/material forms

Built By: [ralphowino.com](http://ralphowino.com)
>>>>>>> parent of 81af0ee... update builder
