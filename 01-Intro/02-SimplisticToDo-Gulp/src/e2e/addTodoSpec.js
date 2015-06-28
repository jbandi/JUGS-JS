describe('Simple ToDo App: Add a new todo item', function() {

	beforeEach(function() {
		browser.ignoreSynchronization = true; // We are not testing an Angular application
		browser.get('http://localhost:8000/index.html');
	});

	it('should have a descriptive title', function() {
		expect(browser.getTitle()).toEqual('Simplistic ToDo');
	});

	it('should list a new todo item after it was entered', function() {

		var toDos = element.all(by.css('#do h3'));
		expect(toDos.count()).toEqual(0);

		var userInput = element(by.id('input'));
		userInput.sendKeys('Drink Coffee');

		var addBtn = element(by.id('addBtn'));
		addBtn.click();

		toDos = element.all(by.css('#do h3'));
		expect(toDos.count()).toEqual(1);
		expect(toDos.get(0).getText()).toEqual('Drink Coffee');

	});
});