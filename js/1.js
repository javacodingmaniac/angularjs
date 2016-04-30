var dirApp=angular.module('dirApp',[]);

//custom filter
dirApp.filter('myfilter',function(){
	return function(designation){
		switch (designation){
			case 'TL':
				return 'Team Lead';
			case 'SE':
				return 'Software Engineer';
			case 'MGR':
				return 'Project Manager';
		}
	}
});

dirApp.controller('mycontroller',function($scope){
	$scope.welcome="Hello Angular";
	$scope.fullname={firstname:'java',lastname:'codingmaniac'};
	$scope.emps=[
		{id:1,name:'maniace7',designation:'TL',votecount:0},
		{id:2,name:'maniace2',designation:'SE',votecount:0},
		{id:3,name:'maniace3SD',designation:'MGR',votecount:0}
	];
	$scope.visibleelement=false;
	$scope.mystyle={color:'red'};
	$scope.myclass='blue';
	$scope.disablebtn=true;
	$scope.nonbindable=true;
	//$scope.name='-name';//for descending order
	$scope.name='name';//for ascending order
	$scope.upvote=function(emp){
		emp.votecount++;
	}
	$scope.downvote=function(emp){
		emp.votecount--;
	}
})