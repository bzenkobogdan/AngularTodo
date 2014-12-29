var mainModule = angular.module("mainModule",[]);
mainModule.controller("mainCtrl",function($scope) {
	$scope.friends = [
		{
			name: "Богдан",
			groups: "friends",
			selected: false
		},
		{
			name: "Денис",
			groups: "friends",
			selected: false
		},
		{
			name: "Макс",
			groups: "friends",
			selected: false
		},
		{
			name: "Коля",
			groups: "friends",
			selected: false
		},
		{
			name: "Сергей",
			groups: "friends",
			selected: false
		},
		{
			name: "Влад",
			groups: "friends",
			selected: false
		},
		{
			name: "Ваня",
			groups: "friends",
			selected: false
		},
		{
			name: "Назар",
			groups: "friends",
			selected: false
		},
		{
			name: "Игорь",
			groups: "friends",
			selected: false
		},
		{
			name: "Стас",
			groups: "friends",
			selected: false
		}
	];

	$scope.addFriend = function(friendName,group) {
		if(!friendName || !group) {
			$scope.error = "Введите имя или группу";
		} else {
			$scope.error = "";
			$scope.friends.push({name:friendName,groups: group,selected: false});
			$scope.friendName = "";
		}
	};

	$scope.selected = function(friend) {
		friend.selected = !friend.selected;
	};

	$scope.removeFriend = function() {
		var friends = [];
		angular.forEach($scope.friends, function(friend) {
			if(friend.selected) return true;
			friends.push(friend);
		});
		$scope.friends = friends;
	};

	$scope.removeAllFriend = function() {
		$scope.friends = [];
	};

});
