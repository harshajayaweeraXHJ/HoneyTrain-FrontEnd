module.exports = function(config){
  config.set({

	reporters: ['story'],
	
    basePath : './',

    files : [
	
	'app/scripts/jquery-1.11.1.min.js',
	'app/scripts/jQuery-Countdown/jquery.countdown.min.js',
	'app/scripts/angular.js',
	'app/scripts/angular-animate.js',
	'app/scripts/angular-mocks.js',
	'app/scripts/CodoPlayerFree-2.1/CodoPlayer.js',
	'app/scripts/sanitizemaster/angular-sanitize.min.js',
	'app/scripts/app.js',
	'e2e-tests/mocks/angular-socket.io-mock-master/angular-socket.io-mock.js',
	'app/scripts/factories/socketFactory.js',
	'app/scripts/controllers/playerController.js',
	'e2e-tests/units/controllerUnit.js'
	
    
	],

	port : 6969,
    autoWatch : true,


    frameworks: ['jasmine'],

 

  });
};
