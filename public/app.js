(function(angular, $, _) {
    angular.module("upgradapp", ["oc.lazyLoad", "ui.router", "ui.bootstrap"])
        .config(['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider', '$httpProvider',
            function($stateProvider, $locationProvider, $ocLazyLoadProvider, $urlRouterProvider, $httpProvider) {

                $ocLazyLoadProvider.config({
                    modules: [{
                            name: "TeacherSettings",
                            files: [
                                '/modules/teacher.js',

                            ]
                        },
                        {
                            name: "StudentSettings",
                            files: [
                                '/modules/student.js'

                            ]
                        },
                        {
                            name: "AuthorSettings",
                            files: [
                                '/modules/author.js'

                            ]
                        }

                    ]
                });

                $stateProvider
                    .state('TEACHER', {
                        url: '/teacher',
                        controller: 'TeacherDashboardController',
                        templateUrl: '/templates/TeacherSettings.html',
                        display: "UpGradTeacher Dashboard",
                        resolve: {
                            load: ['$ocLazyLoad', '$rootScope', function($ocLazyLoad, $rootScope) {
                                return $ocLazyLoad.load("TeacherSettings");
                            }]
                        }
                    })
                    .state('STUDENT', {
                        url: '/student',
                        controller: 'StudentDashboardController',
                        templateUrl: '/templates/StudentSettings.html',
                        display: "UpGradStudent Dashboard",
                        resolve: {
                            load: ['$ocLazyLoad', '$rootScope', function($ocLazyLoad, $rootScope) {
                                return $ocLazyLoad.load("StudentSettings");
                            }],
                            getlistforid: [ '$http', '$timeout', '$window', function( $http, $timeout, $window) {

                                // var c;
                                var req = {
                                    method: 'GET',
                                    url: '/getlist'

                                }
                                return $http(req).then(function(response) {
                                    return response.data;
                                });

                            }]
                        }
                    })
                    .state('AUTHOR', {
                        url: '/author',
                        controller: 'AuthorDashboardController',
                        templateUrl: '/templates/Author.html',
                        display: "UpGradAuthor Dashboard",
                        degree: 1,
                        resolve: {
                            load: ['$ocLazyLoad', '$rootScope', function($ocLazyLoad, $rootScope) {
                                return $ocLazyLoad.load("AuthorSettings");
                            }],
                            getlistforid: [ '$http', '$timeout', '$window', function( $http, $timeout, $window) {

                                // var c;
                                var req = {
                                    method: 'GET',
                                    url: '/getlist'

                                }
                                return $http(req).then(function(response) {
                                    return response.data;
                                });

                            }]
                        }
                    })

                $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }
        ])






        .controller("baseController", ['$scope', '$rootScope', '$q', '$http', '$timeout', '$window',
            function($scope, $rootScope, $q, $http, $timeout, $window) {
              // $scope.data=[{"id":1,"type":"mcq"},{"id":2,"type":"passage"},{"id":3,"type":"text"},{"id":4,"type":"mcq"}];
              // $window.localStorage.setItem('mystorage',JSON.stringify($scope.data));

                    $scope.x="TEACHER"
            }
        ]);





    angular.bootstrap(document, ["upgradapp"]);
})(window.angular, window.$, window._);
