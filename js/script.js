var app=angular.module('demo', ['ngAnimate', 'ui.bootstrap','ngSanitize']);

app.controller("allypopover",function($scope,$timeout,$sce) {
	$scope.openPopover = function (focusElem, foc) {
		$timeout(function () {
			angular.element("#" + focusElem).click();
		})
		$scope.setFocus(focusElem, foc);
	}
	$scope.esctoclose = function (focusElem, event) {
		event.preventDefault();
		if (event.keyCode === 27) {
			$timeout(function () {
				angular.element("#" + focusElem).click();
				$scope.setFocus(focusElem, 100);
			})			
		}
	}
	$scope.setFocus = function (foc, time, event) {
		//alert("Test");
		$timeout(function () {
			angular.element('#' + foc).focus();
		}, time);
		if (event) {
			event.stopPropagation();
			event.preventDefault();
		}
	},
	$scope.bindhtmlcode = function() {
		   return $sce.trustAsHtml($scope.allyTemplate);
		   
	 };	
});



app.directive("allyUibPopover",function(){
	return {
		restrict:'E',		
		scope:{
			allyAria:"@",
			allyIcon:"@",
			allyBack:"@",
			allyTemplate:"=",
			allyPlacement:"@",
			allyTrigger:"@"
		},
		templateUrl:"popover-template.html",
		controller:'allypopover'
	}
})



