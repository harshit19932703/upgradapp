(function(angular, $) {
  angular.module("TeacherSettings", ["checklist-model"])
    .controller("TeacherDashboardController", ['$scope', '$rootScope', '$interval', '$window', '$http',
      function($scope, $rootScope, $interval, $window, $http) {




      }
    ])
    .directive("listPanels", ["$timeout", "$http",
      function() {
        return {
          restrict: "EA",
          transclude: true,
          scope: {
            listdata: '=',
          },
          controller: ['$scope', '$http', '$window',
            function($scope, $http, $window) {
              $scope.getdata = function(cb) {
                $http.get('/getlist').then(function(response) {
                  return cb(response.data);
                });
              }

              function callback(data) {
                console.log('data', data);
                $scope.my = data;
                //$window.localStorage.setItem('mystorage', JSON.stringify($scope.my));
              }

              $scope.getdata(callback);
              // $scope.my=JSON.parse($window.localStorage.mystorage);
              // console.log("HERE",$scope.my)
              $scope.user = {
                my: []
              }
              $scope.checkAll = function() {
                $scope.check=false;
                $scope.user.my = $scope.my.map(function(item) {
                  return item.id;
                });
              };
              $scope.assign = function() {
                console.log($scope.user.my);
                if($scope.user.my.length>0){
                $scope.assignclick = true;
                $scope.studentdata = function(cb) {
                  $http.get('/getstudentlist').then(function(response) {
                    return cb(response.data);
                  });
                }

                function callback(data) {
                  console.log('data', data);
                  $scope.students = data;
                }

                $scope.studentdata(callback);
              }
              else{
                alert("Select one atleast")
                window.location='/teacher'
              }
              }

              $scope.userstudent = {
                students: []
              }

              $scope.assignstudents = function() {
                console.log($scope.userstudent.students)
                for(i=0;i<$scope.userstudent.students.length;i++){
                  _.each($scope.students,function(d){
                    if(d.sname === $scope.userstudent.students[i]){
                      d.qassigned = $scope.user.my;
                    }
                  })
                }
                var req = {
                  method: 'POST',
                  url: '/updatestudent',
                  data: $scope.students
                }
                $http(req).then(function(response) {
                  console.log("RES", response);
                  window.location='/teacher'
                });
                alert("Question(s) Assigned Successfully");

              }

           $scope.deleteques=function(){
             console.log($scope.user.my);
             var req = {
               method: 'POST',
               url: '/deleteques',
               data: $scope.user.my
             }
             $http(req).then(function(response) {
               console.log("RES", response);
               window.location='/teacher'
             });
             alert("Question(s) Deleted Successfully");

           }

          $scope.check=true
          $scope.validation=function(){
            if($scope.user.my.length > 0){
              $scope.check=false;
            }
          }
            }
          ],
          templateUrl: "/templates/partials/listpanels.html",
          link: function(scope, elem, attrs) {

          }
        }
      }
    ])



})(window.angular, window.$, window._);
