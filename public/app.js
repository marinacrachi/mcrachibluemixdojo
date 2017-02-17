angular.module("favoritesApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "list.html",
                controller: "ListController",
                resolve: {
                    favorites: function (Favorites) {
                        return Favorites.getFavorites();
                    }
                }
            })
    })
    .service("Favorites", function ($http) {

        this.getFavorites = function () {
            return $http.get("http://youplugyapp01.mybluemix.net/api/favorites").
                then(function (response) {
                    console.log(response);
                    return response;
                }, function (response) {
                    alert("Error retrieving contacts.");
                });
        }
    })
    .controller("ListController", function (favorites, $scope) {
        $scope.favorites = favorites.data;
    });