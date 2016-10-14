function Model(data) {

	var self = this;

	self.data = data;

	self.addItem = function(item){
		if (item.lenght === 0){
			return;
		}

		self.data.push(item);

		localStorage.setItem('data', JSON.stringify(self.data));

		return self.data;
	}

	self.removeItem = function (item) {
		var index = self.data.indexOf(item);

		if (index === -1){
			return;
		}

		self.data.splice(index, 1);

		localStorage.setItem('data', JSON.stringify(self.data));

		return self.data;
	}

	self.editItem = function(num){
		var item = prompt('Введите правки', data[num]);
		if (item != null){
			self.data[num] = item;
		}

		localStorage.setItem('data', JSON.stringify(self.data));
		
		return self.data;
	}
}