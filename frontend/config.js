import AuthenticationController from 'auth_module/authentication.controler'
import ChecklistController from 'checklist_module/checklist.controller'

let routes = ($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
		.state('authentication', {
			url: "/",
			templateUrl: './auth_module/authentication.html',
			controller: "AuthenticationController",
			authenticate: false
		})
		.state('checklist', {
			url: "/checklist",
			templateUrl: './checklist_module/checklist.html',
			controller: ChecklistController,
			authenticate: false
		});

	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(true);
};

routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default routes;