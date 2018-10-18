function ChatSpamViewModel() {
	this.Name = ko.observable('GREGLE');
	this.Icon = ko.observable('lowcoLove');
	Output = ko.computed(function(){
		var name = this.Name();
		var icon = this.Icon();
		var output = [icon, ' '];
		for (var i = 0 ; i < name.length; i++){
			output.push(name[i], ' ', icon , ' ');
		}
		return output.join('');
	}, this);
}

var bindingContainer = document.getElementById( 'ChatSpamViewModel' );
if ( bindingContainer !== null ) {
	ko.applyBindings( ChatSpamViewModel, bindingContainer );
	bindingContainer.style.display = 'block';
}
