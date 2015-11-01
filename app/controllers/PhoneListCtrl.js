var phoneApp = angular.module('phoneApp', ['ui.router']);

phoneApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$urlRouterProvider.otherwise('/home');
	

	$stateProvider
		.state('home', {
		    url: '/home',
		    templateUrl: 'partial-home.html'
		})
		.state('home.list', {
		    url: '/list',
		    templateUrl: 'partial-home-list.html',
		    controller: function($scope) {
		        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		    }
		})
		.state('home.paragraph', {
		    url: '/paragraph',
		    template: 'I could sure use a drink right now.'
		})
		.state('about', {
		});
}]);
