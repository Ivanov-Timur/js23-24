requirejs.config({
	paths:{
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
		'tmpl': 'tmpl',
		'Model':'model',
		'View':'view',
		'Controller':'controller'
	},
	shim:{
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		},
		'Model': {
			exports: 'Model'
		},
		'View': {
			exports: 'View'
		},
		'Controller': {
			exports: 'Controller'
		}
	}
});

require(
	[
		'Model',
		'View',
		'Controller',
		'jquery',
		'tmpl'
	],

	function(Model, View, Controller, $, tmpl){

		var firstToDoList;

		if (localStorage.data == undefined){
			localStorage.setItem('data', '[]')
		}
		firstToDoList = JSON.parse(localStorage.getItem('data'));
		var model = new Model(firstToDoList);
		var view = new View(model);
		var controller = new Controller(model, view);
	}
);