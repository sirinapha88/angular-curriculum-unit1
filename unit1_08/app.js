var app = angular.module("myApp", []);
app.controller("MyFirstController", function($scope){
 	$scope.number = 5;
 	$scope.pickRandomNumber = function(){
		$scope.number = Math.floor(Math.random() * 10) + 1;
	};
	$scope.reverseText = function(){
		$scope.text = $scope.text.split('').reverse().join('');
	};

	$scope.enterCount = 0;

	$scope.randomColor = function() {
	    var x=Math.round(0xffffff * Math.random()).toString(16);
	    var y=(6-x.length);
	    var z="000000";
	    var z1 = z.substring(0,y);
	    var color = "#" + z1 + x;
	    $scope.color = color;
  	};

  	var replaying = false;

	$scope.replay = function() {
	  	var displayPrevColor = function() {
	    // do some logic to change color
	    // if done replay colors
	    replaying = false;
	    // else
	    $timeout(dispalyPrevColor, 1000);
	    // end if/else 
	  };
	  	if (!replaying) {
	    replaying = true;
	    // This timeout starts the timeout loop
	    $timeout(function() { displayPrevColor(); }, 500);
	  	}
	};
});

app.controller("PingPongCount", function($scope){
		$scope.player1 = 0;
		$scope.player2 = 0;
});


app.controller("addressForm", function($scope){
	$scope.list = [];
	$scope.submit = function(){
		$scope.list.push({ 
			street1: $scope.street1,
			street2: $scope.street2,
			city: $scope.city,
			state: $scope.state,
			zipcode: $scope.zipcode
		});
	};
	$scope.reset = function() {
    	$scope.list = [];
	};
});	


app.controller("contactList", function($scope){
	$scope.list = [];
	$scope.addList = function(){
		$scope.list.push({
			name: $scope.name,
			email: $scope.email,
			phone: $scope.phone
		});
		$scope.name = '';
		$scope.email = '';
		$scope.phone = '';
    };
});




