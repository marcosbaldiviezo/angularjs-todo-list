angular.module('ToDoList', ['LocalStorageModule'])
.controller('ToDoController', function($scope, localStorageService) {
    if (localStorageService.get('angular-todolist')) {
        $scope.todo = localStorageService.get('angular-todolist');
    } else {
        $scope.todo = [];
    }
    
    /*
        {
            descripcion: 'Terminar el curso de AngularJS',
            fecha: '17-09-2019 11:27am'
        }
    */
     
    $scope.$watchCollection('todo', function(newValue, oldValue) {
        localStorageService.set('angular-todolist', $scope.todo);
    });

    $scope.addActividad = function() {
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }

    $scope.clean = function() {
        $scope.todo = [];
    }
})