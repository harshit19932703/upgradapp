(function(angular, $) {
  angular.module("AuthorSettings", [])
    .controller("AuthorDashboardController", ['$scope', '$rootScope', '$interval', '$window', '$http','getlistforid',
      function($scope, $rootScope, $interval, $window, $http,getlistforid) {
          $scope.list=getlistforid;
          $scope.total=$scope.list.length;
          $scope.id=$scope.list[$scope.total - 1].id;
          console.log("Last id",$scope.id+1);
     $scope.data=[]
        $scope.addques = function(d) {
          if (d === "submission") {
            $scope.data.push({
              "id":$scope.id+1,
              "type":d,
              "title":$scope.submtitle,
              "description":$scope.submdescription,
              "instruction":$scope.subminstruction
            })
            var req = {
              method: 'POST',
              url: '/addlist',
              data: $scope.data
            }
            $http(req).then(function(response) {
              console.log("RES", response);
              window.location="/teacher"
            });
            alert("Saved Successfully");
          }
          if (d === "mcq") {
            $scope.data.push({
              "id":$scope.id+1,
              "type":d,
              "title":$scope.mcqtitle,
              "description":$scope.mcqdescription,
              "instruction":$scope.mcqinstruction,
              "options":[$scope.mcqansA,$scope.mcqansB,$scope.mcqansC,$scope.mcqansD],
              "rightanswer":[$scope.mcqrightansA,$scope.mcqrightansB,$scope.mcqrightansC,$scope.mcqrightansD]
            })
            var req = {
              method: 'POST',
              url: '/addlist',
              data: $scope.data
            }
            $http(req).then(function(response) {
              console.log("RES", response);
              window.location="/teacher"
            });
            alert("Saved Successfully");
          }
          if (d === "passage") {
            $scope.data.push({
              "id":$scope.id+1,
              "type":d,
              "title":$scope.passtitle,
              "description":$scope.passdesc,
              "instruction":$scope.passintruc,
              "answer":$scope.passanswer
            })
            var req = {
              method: 'POST',
              url: '/addlist',
              data: $scope.data
            }
            $http(req).then(function(response) {
              console.log("RES", response);
                window.location="/teacher"
            });
            alert("Saved Successfully");
          }

          // $scope.data = [{
          //   "id": $scope.myid,
          //   "type":$scope.mytype
          // }]
          // console.log($scope.data)
          // var req = {
          //   method: 'POST',
          //   url: '/addlist',
          //   data: $scope.data
          // }
          // $http(req).then(function(response) {
          //   console.log("RES", response);
          // });
          // alert("Saved Successfully");

        }
      }
    ])
    .directive("mcq", ["$timeout", "$http",
      function() {
        return {
          restrict: "EA",
          transclude: true,
          controller: ['$scope', '$http', '$window',
            function($scope, $http, $window) {



            }
          ],
          templateUrl: "/templates/partials/mcq.html",
          link: function(scope, elem, attrs) {

          }
        }
      }
    ])
    .directive("subm", ["$timeout", "$http",
      function() {
        return {
          restrict: "EA",
          transclude: true,
          scope: false,
          controller: ['$scope', '$http', '$window',
            function($scope, $http, $window) {
              $scope.getvalues = function() {
                console.log($scope.submtitle)
              }


            }
          ],
          templateUrl: "/templates/partials/sub.html",
          link: function(scope, elem, attrs) {

          }
        }
      }
    ])
    .directive("pass", ["$timeout", "$http",
      function() {
        return {
          restrict: "EA",
          transclude: true,
          controller: ['$scope', '$http', '$window',
            function($scope, $http, $window) {



            }
          ],
          templateUrl: "/templates/partials/pass.html",
          link: function(scope, elem, attrs) {

          }
        }
      }
    ])


})(window.angular, window.$, window._);
