angular.module('myapp',[])
.controller('mycntrl',function($scope){
	$scope.Name="Abc";
	$scope.Save=function(emp,myform){
	alert('asdf');
	console.log(myform);
		if(myform.$isvalid){
			alert('Hi '+emp.name+' is saved');
		}
	}
})