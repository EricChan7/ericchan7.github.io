'use strict';

var angular = require("angular");

$(function() {
	$(window).on("scroll", function(e) {
		var $window = $(window);
		if ($(".menu-list").height() > window.innerHeight) {
			var percentage = $window.scrollTop() / ($window.height()-window.innerHeight);
			var scrollAmount = $(".menu-list").height() - window.innerHeight + 50;
			$(".menu-list").css("margin-top", -scrollAmount*percentage);
		} else {
			$(".menu-list").css("margin-top", 0);
		}
	}).trigger("scroll");
});

var sof = angular.module('sof', ['ngSanitize']);

sof.controller('lyric', function ($scope, $http, $timeout) {
	var domain = "http://soundofate.herokuapp.com";
	$scope.isActive = "";
	// $scope.backgroundImage = "https://lh3.googleusercontent.com/-fvIlNH8gFLA/VEx1xROHUII/AAAAAAABLZE/AFjPaXnS1dI/w1280/1.jpg";
	$scope.backgroundImage = {"background-image":"url('https://lh3.googleusercontent.com/-cfE8BfwIZ4c/VEx6TSCFIAI/AAAAAAABLZE/omBMjA13jUQ/w1280/motto.net.ua-27161.jpg')"};

	$http.get(domain + "/api/performer").success(function (data, status) {
		if (status === 200) {
			$scope.performer = data;
			$scope.changeSong($scope.performer[0].songs[3].id, 0, 3);
		}
	});

	$scope.toggleMenu = function(index) {
		var status = $scope.performer[index].activeClass;
		
		angular.forEach($scope.performer, function (v) {
			v.activeClass = "";
		});

		if (status == "active") {
			$scope.performer[index].activeClass = "";
		} else {
			$scope.performer[index].activeClass = "active";
		}
		$(window).trigger("scroll");
	};
	
	$scope.changeSong = function(id, indexP, indexS, $event) {
		if ($event) $event.stopPropagation();
		$scope.isActive = "";
		$http.get(domain + "/api/song/" + id).success(function (data, status) {
			$timeout(function () {
				$scope.isActive = "active";
			}, 1000);
			if (status === 200) {
				$scope.name = data.content.replace(/%E3%80%80/g, "　").replace(/\r?\n/g, "<br/>");
				$scope.backgroundImage["background-image"] = "url(" + data.url_base + "w1280/1.jpg)";
				angular.forEach($scope.performer, function (v) {
					angular.forEach(v.songs, function (vv) {
						vv.activeClass = "";
					});
				});
				$scope.performer[indexP].songs[indexS].activeClass = "active";
			}
		});
	};
});
