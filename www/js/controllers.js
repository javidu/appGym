angular.module('starter.controllers', ['starter.services'])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
        })

        .controller('PlaylistsCtrl', function ($scope) {
            $scope.playlists = [
                {title: 'Reggae', id: 1},
                {title: 'Chill', id: 2},
                {title: 'Dubstep', id: 3},
                {title: 'Indie', id: 4},
                {title: 'Rap', id: 5},
                {title: 'Cowbell', id: 6}
            ];
        })

        .controller('TiendasCtrl', function ($scope) {
            $scope.tiendas = [
                {nombre: 'Betel', id: 1},
                {nombre: 'Montes', id: 2},
                {nombre: 'Victoria Plaza', id: 3},
                {nombre: 'Cosechero', id: 4},
                {nombre: 'Al Maximo', id: 5},
                {nombre: 'Exito', id: 6}
            ];
        })

        .controller('GuardarRestaurantesCtrl', function($scope, $http) {
        
                    var defaultHTTPHeaders = {
                        'Content-Type':'aplicacation/json',
                        'Accept':'aplication/json'                       
                    };
                    $http.defaults.headers.post=defaultHTTPHeaders;
                    
        $scope.restaurantes ={
        nombre: '',
        descripcion: '',
        direccion: ''
        };
        
        $scope.guardarRestaurante()=function(){
        $http.post('http://sandbox1.ufps.edu.co/~ufps_42/persistenciaRestaurante.php', $scope.restaurantes)
                .then(
                function() {
                alert("Exito");
                },
                function(){
                    alert("Error");
                });
            };
        }
        )

        .controller('SessionCtrl', function($scope, Session) {
        $scope.dishes = Session.query();
                })

        .controller('PlaylistCtrl', function($scope, $stateParams) {
        });
