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