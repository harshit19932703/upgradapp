(function(angular, $) {
  angular.module("StudentSettings", [])
    .controller("StudentDashboardController", ['$scope', '$rootScope', '$interval', '$window', '$http', 'getlistforid',
      function($scope, $rootScope, $interval, $window, $http, getlistforid) {
        $scope.mainlist = getlistforid
        $scope.getdata = function(cb) {
          $http.get('/getstudentlist').then(function(response) {
            return cb(response.data);
          });
        }

        function callback(data) {
          console.log('data', data);
          $scope.studentlist = data;
        }

        $scope.getdata(callback);
        //code for student Questions
        $scope.getQues = function(d) {
          $scope.name = d;
          _.each($scope.studentlist, function(x) {
            if (x.sname === d) {
              $scope.ques = x.qassigned;
            }
          })
          $scope.showques = [];
          for (i = 0; i < $scope.ques.length; i++) {

            _.each($scope.mainlist, function(d) {
              if (d.id === $scope.ques[i]) {
                $scope.showques.push(d);
              }
              //console.log("QUES", $scope.showques);
            })
          }
        }


        $scope.record = [];
        $scope.myCountry = {
          selected: {}
        };

        $scope.answerdata=[]

        $scope.submitanswer = function(d) {
          console.log($scope.myCountry.selected)
          console.log($scope.record);
          $scope.answerdata.push({
            "Name":d,
            "Answers":[$scope.record,$scope.myCountry.selected]
          })
          console.log($scope.answerdata);
          alert("Answers Recorded Successfully");
          localStorage.setItem('answers',JSON.stringify($scope.answerdata));
          window.location='/student'
        }


        $scope.answer = function() {
          $scope.ans = true;

        }
        $scope.close = function() {
          $scope.ans = false;
        }

      }
    ])



})(window.angular, window.$, window._);
