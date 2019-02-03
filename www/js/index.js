/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 favoriteColor = 'rgb(200, 185, 30)';
 normalColor = 'rgb(34, 38, 42)';
$(document).ready(function () {

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

	$('#cart').on('click', function () {
		var a = $(this).attr("data-url");
		console.log(a)

		loadPage(a);
	});

	//ukryj sidebar klikajac na strone
	$('#content').on('click', function () {
		if ($('#sidebar').hasClass('active')) {
			$("#sidebar").toggleClass('active')
		}
	})


	$(".wrapper").on('click', '.btn-sidebar', function () {
		var a = $(this).attr("data-url");
		loadPage(a);
	});

	$("#content").on('click', '#item-title', function () {
		var a = $(this).attr("data-url");
		loadPage(a);
	});

	$("#content").on('click', '#check-favorite', function () {
		var button = $(this);
		var buttonIcon = $(this.children[0]);
		if (buttonIcon.hasClass("far")) {
			buttonIcon.removeClass("far")
			buttonIcon.addClass("fas")
			buttonIcon.css("color", favoriteColor)
		}
		else
		{
			buttonIcon.removeClass("fas")
			buttonIcon.addClass("far")
			buttonIcon.removeAttr('style')
		}
	});
	function loadPage(href) {
		$('#content').empty();
		//dlaczego nie uzyc po prostu load? zeby mozna bylo wczytywac tylko poszczegolne czesci strony zamiast calosci?
		//$("#content").load(href) 
		$.ajax({
			url: href,
			type: 'GET',
			success: function (data) {
				$('#content').append(data);
			}
		});
	}

});

var app = {

	// Application Constructor
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	// deviceready Event Handler
	//
	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	onDeviceReady: function () {
		this.receivedEvent('deviceready');
	},

	// Update DOM on a Received Event
	receivedEvent: function (id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

app.initialize();