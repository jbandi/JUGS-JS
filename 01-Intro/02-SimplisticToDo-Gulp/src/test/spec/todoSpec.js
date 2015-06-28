/*global $, describe, beforeEach, afterEach, it, expect, addText, registerButtonHandler */
describe('ToDo List', function(){
    'use strict';

    var app = $('<div id=app/>');
    $(document.body).append(app);
    console.log('Before suite ...');

    beforeEach(function() {
        console.log('Before test ...');

        // Set up dom for test
        $('#app').empty();
        var input = $('<input type="text" id="input"/>');
        var addBtn = $('<a id="addBtn" class="btn btn-primary btn-large" >Add &raquo;</a>');
        var todoList = $('<p id="do"> </p>');
        app.append(input);
        app.append(addBtn);
        app.append(todoList);

        registerButtonHandler();
    });

    afterEach(function() {
        //console.log($(document.body).html());
    });

    it('should extend list when adding item ', function() {
        //console.log('First test ...');
        var input = $('input');
        input.val('First ToDo');

        addText();

        var todoList = $('#do h3');
        expect(todoList.length).toBe(1);
        expect(todoList.eq(0).text()).toBe('First ToDo');
    });

//    it('should add item when clicking button', function() {
//        var input = $('input');
//        input.val('First ToDo');
//
//        var addBtn = $('#addBtn');
//        addBtn.trigger('click'); // in order for this to work the click handler has to be registered through jQuery
//
//        var itemCount = $('#do h3').length;
//        expect(itemCount).toBe(1);
//    });
});


