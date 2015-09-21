
var app=angular.module('myApp', ['ngMaterial','xeditable','smart-table']);
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config(function($mdThemingProvider, $mdIconProvider){
                  $mdIconProvider
                      .defaultIconSet("./images/svg/avatars.svg", 128)
                      .icon("menu"       , "./images/menu.svg"        , 24)
                      .icon("share"      , "./images/svg/share.svg"       , 24)
                      .icon("google_plus", "./images/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./images/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./images/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./images/svg/phone.svg"       , 512);
                      $mdThemingProvider.theme('default')
                          .primaryPalette('blue')
                          .accentPalette('orange');
              });
              app.constant('appSettings', {
                  db: 'http://127.0.0.1:5984/expenses'
                });
              app.controller('sortCtrl', ['appSettings','$scope', '$http', '$filter',
               function (appSettings,$scope,$http, filter) {
                  $scope.itemsByPage=2;


                function getItems () {
                  $http.get('/api/expenses')
                    .success(function (data) {
$scope.rowCollection = [];
                      for(var i=0; i<data.length;i++)
                        $scope.rowCollection.push( data[i].value);
                        //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
                           $scope.displayedCollection = [].concat($scope.rowCollection);

                    });
                }
                getItems();



              }]);
