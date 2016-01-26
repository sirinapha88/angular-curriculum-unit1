var app = angular.module("myApp", []);
app.controller("redditController", function($scope){
	var d = new Date();
	var dd = d.getDate();
	var mm = d.getMonth()+1; //January is 0!
	var yyyy = d.getFullYear();
	$scope.date = mm+'/'+dd+'/'+yyyy;
	$scope.newComment = {};
  	$scope.newPost = {};
  	$scope.view = {};
  	$scope.votes = 0;

  	$scope.view.posts = [
  		{
	  		title: "Teach something",
	  		author: "Tum",
	  		desc: "If you're passionate about a particular subject, and you have a lot of experience in that area",
	  		imgURL: "http://barkpost.com/wp-content/uploads/2015/10/reddit-dog-jokes-20-808x808.jpg",
	  		votes: 2,
	  		date: mm+'/'+dd+'/'+yyyy,
	  		comments: [
	        {
	          author: "Matt",
	          text: "Cool costume."
	        }
	      	]
  		},{
  			title: "Teach something",
	  		author: "Siri",
	  		desc: "If you're passionate about a particular subject, and you have a lot of experience in that area",
	  		imgURL: "http://barkpost.com/wp-content/uploads/2015/10/reddit-dog-jokes-20-808x808.jpg",
	  		votes: 2,
	  		date: mm+'/'+dd+'/'+yyyy,
	  		comments: [
	        {
	          author: "Matt",
	          text: "Cool costume."
	        }
	      	]
	    }
  	];
	
	$scope.submitForm = function(isValid) {
		
		$scope.view.posts.push({
			title: $scope.newPost.title,
			author: $scope.newPost.author,
			desc: $scope.newPost.desc,
			imgURL: $scope.newPost.imgURL,
			date: mm+'/'+dd+'/'+yyyy,
			comments: [],
			votes: 0,
		});
		$scope.newPost.title = '';
		$scope.newPost.author = '';
		$scope.newPost.desc = '';
		$scope.newPost.imgURL = '';
  	};

  	$scope.addComment = function(post,newComment){
  		post.comments.push(newComment);
  		$scope.newComment = {};
  	};
	

  	$scope.updateVotes = function(changeVal) {
    	$scope.view.posts.votes += changeVal;
  	};

});




