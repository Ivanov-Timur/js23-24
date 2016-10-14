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