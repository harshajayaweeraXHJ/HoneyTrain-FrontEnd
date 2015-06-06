describe('Unit test playerController: ', function(){
	  
	  

	  beforeEach(function(){
	  	module('TrainAppController');
	  	module('btford.socket-io');
	  	
		  });
	  
		var $controller;
		var $scope;
		var socket;

		 beforeEach(inject(function($controller, $rootScope, _socket_){
	      $scope = $rootScope.$new();
	      socket = _socket_;
		  $controller = $controller('playerController', {$scope : $scope});
		  
			 }));
//..................................................................................................
	describe('Initial values of arrays ', function(){

	  it('Should have the initial value of 00:00 for nextTrain',
	  	  function(){
	  	  	
		 	expect($scope.nextTrain[0].time).toBe("00:00");
 	  });

	  it('should contain initial value 00:00 for Train 1',
	       function(){
			expect($scope.notificationList[0].time).toBe("00:00");
 	  });
	  it('should contain initial value 00:00 for Train 2',
	       function(){
		    expect($scope.notificationList[1].time).toBe("00:00");
	  });
	  it('should contain initial value 00:00 for Train 3',
		   function(){
			expect($scope.notificationList[2].time).toBe("00:00");
	  });
	   it('should contain initial value 00:00 for Train 4',
	    function(){
		    expect($scope.notificationList[3].time).toBe("00:00");
	   });
	  it('should contain initial value 00:00 for Train 5',
	   function(){
		    expect($scope.notificationList[4].time).toBe("00:00");
	   });

	});

	describe('UpdateNextTrain function', function(){
		it('it updates the nextTrain with next train arrival time', function(){
			//Arrange..............
			$scope.notificationList[0].time = "11:00";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("11:00");

			//Arrange..............
			$scope.notificationList[1].time = "12:00";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			   expect($scope.nextTrain[0].time).toBe("11:00");

			//Arrange..............
			$scope.notificationList[2].time = "13:15";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("11:00");

			//Arrange..............
			$scope.notificationList[3].time = "09:00";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("09:00");

			//Arrange..............
			$scope.notificationList[4].time = "09:15";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("09:00");

			//Arrange..............
			$scope.notificationList[3].time = "08:51";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("08:51");

			  //Arrange..............
			$scope.notificationList[2].time = "08:01";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("08:01");

			   //Arrange..............
			$scope.notificationList[4].time = "07:46";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("07:46");	

			  //Arrange..............
			$scope.notificationList[4].time = "21:22";
			 //Act..................
			 $scope.updateNextTrain();
			  //Assert...............
			  expect($scope.nextTrain[0].time).toBe("08:01");	
		});

	});

    describe('pushQ function', function(){
    	it('Updates the corresponding array element of notificationList', 
    		function(){
    		//Arrange 	
    		 var obj = { station	: "STATION 1", start	: "kandy",   end :"colombo", nowprev : "petta",   nownext	: "malabe",  time	: "07:00", id :"TRN_001" };
  			//Act 
  			 $scope.pushQ(obj);
  			//Assert
  			 expect($scope.nextTrain[0].time).toBe("07:00");
  			 expect($scope.notificationList[0].time).toBe("07:00");
  			 expect($scope.notificationList[2].time).toBe("00:00");

 			 //Arrange 	
    		 var obj = { station	: "STATION 1", start	: "kandy",   end :"colombo", nowprev : "petta",   nownext	: "malabe",  time	: "06:59", id :"TRN_003" };
  			//Act 
  			 $scope.pushQ(obj);
  			//Assert
  			 expect($scope.nextTrain[0].time).toBe("06:59");
  			 expect($scope.notificationList[2].time).toBe("06:59");
  			 
			
			//Arrange 	
    		 var obj = { station	: "STATION 1", start	: "kandy",   end :"colombo", nowprev : "petta",   nownext	: "malabe",  time	: "04:44", id :"TRN_001" };
  			//Act 
  			 $scope.pushQ(obj);
  			//Assert
  			 expect($scope.nextTrain[0].time).toBe("04:44");
  			 expect($scope.notificationList[0].time).toBe("04:44");
  			 expect($scope.notificationList[2].time).toBe("06:59");
 	 	
    		});

    });
	
	describe('Check watch function which will trigger the train arrival timeout', function(){
		it('Will start countdown if the next train is two miniuts away from the station',
		 function(){
		   date
		   var baseTime = new Date(2015, ); 	
		 });		
	});

	  		
}); 

