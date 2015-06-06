var trainAppSocketFactory = angular.module('trainAppSocketFactory',['btford.socket-io']);
 	trainAppSocketFactory.factory('socket',['socketFactory', function(socketFactory){
console.log("+++++++++++++++++" + typeof(socketFactory)); 		
return socketFactory(); 	
 	}
   ]);



