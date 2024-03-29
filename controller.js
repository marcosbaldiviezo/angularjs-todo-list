// angular.module('ToDoList', ['LocalStorageModule'])
// .controller('ToDoController', function($scope, localStorageService) {
//     if (localStorageService.get('angular-todolist')) {
//         $scope.todo = localStorageService.get('angular-todolist');
//     } else {
//         $scope.todo = [];
//     }
    
//     /*
//         {
//             descripcion: 'Terminar el curso de AngularJS',
//             fecha: '17-09-2019 11:27am'
//         }
//     */
     
//     $scope.$watchCollection('todo', function(newValue, oldValue) {
//         localStorageService.set('angular-todolist', $scope.todo);
//     });

//     $scope.addActividad = function() {
//         $scope.todo.push($scope.newActv);
//         $scope.newActv = {};
//     }

//     $scope.clean = function() {
//         $scope.todo = [];
//     }
// })

// Factory
// angular.module('ToDoList', ['LocalStorageModule'])
// .factory('ToDoService', function(localStorageService) {
//     let toDoService = {};
//     toDoService.key = 'angular-todolist';
//     if (localStorageService.get(toDoService.key)) {
//         toDoService.activities = localStorageService.get(toDoService.key);
//     } else {
//         toDoService.activities = [];
//     }

//     toDoService.add = function(newActv) {
//         toDoService.activities.push(newActv);
//         toDoService.updateLocalStorage();
//     };

//     toDoService.updateLocalStorage = function() {
//         localStorageService.set(toDoService.key, toDoService.activities);
//     };

//     toDoService.clean = function() {
//         toDoService.activities = [];
//         toDoService.updateLocalStorage();
//         return toDoService.getAll();
//     };

//     toDoService.getAll = function() {
//         return toDoService.activities;
//     };

//     toDoService.removeItem = function(item) {
//         toDoService.activities = toDoService.activities.filter(function(activity) {
//             return activity !== item;
//         });
//         toDoService.updateLocalStorage();
//         return toDoService.getAll();
//     };

//     return toDoService;
// })
// .controller('ToDoController', function($scope, ToDoService) {
//     $scope.todo = ToDoService.getAll();

//     $scope.addActivity = function() {
//         ToDoService.add($scope.newActv);
//         $scope.newActv = {};
//     };

//     $scope.removeActivity = function(item) {
//         $scope.todo = ToDoService.removeItem(item);
//     };

//     $scope.clean = function() {
//         $scope.todo = ToDoService.clean();
//     };
// });

// Service
angular.module('ToDoList', ['LocalStorageModule'])
.service('ToDoService', function(localStorageService) {
    this.key = 'angular-todolist';
    if (localStorageService.get(this.key)) {
        this.activities = localStorageService.get(this.key);
    } else {
        this.activities = [];
    }

    this.add = function(newActv) {
        this.activities.push(newActv);
        this.updateLocalStorage();
    };

    this.updateLocalStorage = function() {
        localStorageService.set(this.key, this.activities);
    };

    this.clean = function() {
        this.activities = [];
        this.updateLocalStorage();
        return this.getAll();
    };

    this.getAll = function() {
        return this.activities;
    };

    this.removeItem = function(item) {
        this.activities = this.activities.filter(function(activity) {
            return activity !== item;
        });
        this.updateLocalStorage();
        return this.getAll();
    };
})
.controller('ToDoController', function($scope, ToDoService) {
    $scope.todo = ToDoService.getAll();

    $scope.addActivity = function() {
        ToDoService.add($scope.newActv);
        $scope.newActv = {};
    };

    $scope.removeActivity = function(item) {
        $scope.todo = ToDoService.removeItem(item);
    };

    $scope.clean = function() {
        $scope.todo = ToDoService.clean();
    };
});