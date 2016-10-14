function Model(data) {

	var self = this;

	self.data = data;

	self.addItem = function(item){
		if (item.lenght === 0){
			return;
		}

		self.data.push(item);

		return self.data;
	}

	self.removeItem = function (item) {
		var index = self.data.indexOf(item);

		if (index === -1){
			return;
		}

		self.data.splice(index, 1);

		return self.data;
	}

	self.editItem = function(num){
		var item = prompt('Введите правки', data[num]);
		if (item != null){
			self.data[num] = item;
		}
		
		return self.data;
	}
}

function View(model) {

	var self = this;

	function init() {
		var wrapper = tmpl('wrapper');

		$('body').append(wrapper);

		self.elements = {
			input: $('.toDo__add'),
			addBtn: $('.addBtn'),
			listContainer: $('.toDo')
		};

		self.renderList(model.data);
	};

	self.renderList = function(data){

		var list = tmpl('toDo', {data: data});

		self.elements.listContainer.html(list);
	};

	init();

}

function Controller (model, view) {

	var self = this;

	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.icon-del', removeItem);
	view.elements.listContainer.on('click', '.icon-edit', editItem);

	function addItem(){
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('')
	}

	function removeItem() {
		var item = $(this).attr('data-value');
		model.removeItem(model.data[item]);
		view.renderList(model.data);
	}

	function editItem() {
		var num = $(this).next().attr('data-value');
		console.log(num);
		model.editItem(num);
		view.renderList(model.data);
	}

}

$(function(){
	var firstToDoList = ['learn JS', 'learn html', 'learn css'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});