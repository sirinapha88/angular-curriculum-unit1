var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});

app.controller("ExercisesController", function($scope){
  $scope.favColor = "Blue";
});

app.controller("seconsInACentury", function($scope){

});

app.controller("rightNow", function($scope){
	var date = new Date();
	var monthNames = ["January", "February", "March", "April", "May", 
	"June", "July", "August", "September", "October", "November", "December"
	];
	var dateName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var day = date.getDate();
	var year = date.getFullYear();
	$scope.currentTime = dateName[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + day + ', ' + year;
});