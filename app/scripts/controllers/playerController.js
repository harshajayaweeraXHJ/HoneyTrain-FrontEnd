
var TrainAppController = angular.module('TrainAppController', ['trainAppSocketFactory']);
	
	TrainAppController.controller('playerController',
		["$sce","$scope","$interval", "$rootScope", "$document", "socket", function($sce,scope,$interval, rootScope, $document, socket){

			scope.notificationList = [
			
						{ station	: "STATION 1", start	: "kandy",   end :"colombo", nowprev : "petta",   nownext	: "malabe",  time	: "00:00", id :"TRN_001" },
						{ station	: "STATION 2", start	: "colombo", end :"kandy",   nowprev : "gall",    nownext	: "petta",   time	: "00:00", id :"TRN_002" },
						{ station	: "STATION 3", start	: "gall",    end :"petta",   nowprev : "petta",   nownext	: "gall",    time	: "00:00", id :"TRN_003" },
						{ station	: "STATION 4", start	: "petta",   end :"gall",    nowprev : "kandy",   nownext	: "colombo", time	: "00:00", id :"TRN_004" },
						{ station	: "STATION 5", start	: "malabe",  end :"petta",   nowprev : "colombo", nownext	: "kandy",   time	: "00:00", id :"TRN_005" }		

									];

			scope.nextTrain = [{ station	: "xxx", start	: "xxx", end 	:"xxx", nowprev : "xxx", nownext	: "xxx", time	: "00:00", id :"TRN_004" }];

		 	scope.updateNextTrain = function(){
		 		var lowest = Number.POSITIVE_INFINITY;
				var highest = Number.NEGATIVE_INFINITY;
				var tmp;
				var arrIndex;
					for (var i=scope.notificationList.length-1; i>=0; i--) {
		    			if (scope.notificationList[i].time!="00:00") {

		    			tmp = scope.notificationList[i].time.split(":")[0].toString() + scope.notificationList[i].time.split(":")[1].toString();
		    			if (tmp < lowest){ lowest = tmp; arrIndex = i;}
		    			
		    			}
					}

		 			scope.nextTrain[0] = scope.notificationList[arrIndex];	

		 			 }
				console.log("************************" + typeof(socket));
				console.log("***socket on ***" + typeof(socket.on));
				console.log("***socket on obj ***" + socket);	

		 		socket.on('sockStation21', function (data) {
        			console.log("stringified json " + JSON.stringify(data));	
        			

        			if (data != undefined) {
        			scope.pushQ(data);
        			console.log("%c 3. Recerved data from server pushed: " + data.time, 'background: green; color: white; font-size: 110%; padding-top: 3px; padding-bottom: 3px; padding-left: 2px; padding-right: 2px;');
    				}
    				});
		
		 	scope.pushQ = function(obj){


		 			for (var i = 0;  i < scope.notificationList.length ; i++) { // update entry with new value
		 				if (scope.notificationList[i].id==obj.id) {
		 					scope.notificationList[i] = obj;
		 				} 
		 			}

		      		scope.updateNextTrain(); // update next train value.	


				   }	

					

			scope.counter = 4; // not being used yet.
			scope.isTimerRunning = false;
			scope.currentTime;
			scope.arrivalTime;



			scope.$watch('notificationList',
			 function(newVal, oldVal){ if(scope.notificationList.length > 0){
				scope.currentTime = (new Date()).getTime();
				scope.arrivalTime = new Date();	
				
																										
				//scope.currentTime = (new Date()).getTime();   //current time in milliseconds
				

				var nextTrainId  = scope.notificationList.map(function(ele, indx){
					if(ele.id == scope.nextTrain[0].id){

							return indx;

						}
				}).filter(isFinite);

				scope.arrivalTime.setHours((scope.nextTrain[0].time).split(":")[0]);
				scope.arrivalTime.setMinutes((scope.nextTrain[0].time).split(":")[1]); //!important MM-DD-YY should be set to today 
				scope.arrivalTime = scope.arrivalTime.getTime(); //arrival time to millisconds.
				scope.timeDifference = scope.arrivalTime - scope.currentTime;  //time difference in milliseconds.


						if (scope.timeDifference >= 0 && scope.timeDifference <= 120000 && !scope.isTimerRunning) { // should be 6000 for testting purposes its 12000 
							 
							 scope.isTimerRunning = true;						 									
							 if (scope.notificationList[nextTrainId].time == scope.nextTrain[0].time) {
							 	scope.notificationList[nextTrainId].time = "00:00";
							 	console.log("Arrived time has set to zero");

							 }
							 
							 scope.nextTrain[0] = { station	: "xxx", start	: "xxx", end 	:"xxx", nowprev : "xxx", nownext	: "xxx", time	: "00:00", id :"TRN_004" };

  								adPlayer.media.pause();
  								$("#countdown").css("display", "initial");	
  								$("#notifiNGreet").css("display", "initial");	
  								
  								$("#leftDiv").css("display", "none");	
  								$("#bottomDiv").css("display", "none");
  								$("#vidguContainer").css("display", "none"); 
																  													
							    var currDate = new Date();									   
									   currDate = new Date(currDate.getTime() + 120000);								
										window.location.hash = "#TimerNaviTarget";										
										var currDateStr = (currDate.getMonth() + 1) + "/" + currDate.getDate() + "/" + currDate.getFullYear() + " " + currDate.getHours() +":"+ currDate.getMinutes() +":" + currDate.getSeconds();
								    
								        $('#example').countdown({
											date: currDateStr,
											offset : +6 
											}, function () {

												$("#countdown").css("display", "none");	
				  								$("#notifiNGreet").css("display", "none");

				  								$("#leftDiv").css("display", "initial");	
				  								$("#bottomDiv").css("display", "initial");
				  								$("#vidguContainer").css("display", "initial");

											  window.location.hash = "#"; 
											  adPlayer.media.play();
											  
											});																
								
							

						}

						scope.isTimerRunning = false;

					}

				}, true);

			scope.isMax = function(index){
				var boolval = true;
				if (index==0) {
					boolval = false;
				}

			  	return boolval;		
			}

			scope.sortByTime = function(index){
				var timeval = scope.notificationList[index].time;
				timeval = timeval.split(":");
				timeval = timeval[0] + timeval[1];
				timeval = parseInt(timeval);
				return timeval;

			}

			scope.doFunc = function(){
								scope.counter++;
								var vall = scope.counter;
	
							}

							}]

		);

