let AuthInterceptor = ($window, $q, $injector) => {
	return {
		request: function (request) {
			request.headers = request.headers || {};
			if ($window.localStorage.token) {
				request.headers.Authorization = 'Bearer ' + $window.localStorage.token;
			}
			return request;
		},
		responseError: function (rejection) {
			let token = rejection.config.headers.authorization;
			if (rejection.status === 401 && !token) {
				localStorage.removeItem('token');

				let stateService = $injector.get('$state');
				stateService.go('authentication');
			}
			return rejection || $q.when(rejection);
		}
	}
};

AuthInterceptor.$inject = ['$window', '$q', '$injector'];

export default AuthInterceptor;