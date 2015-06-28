window.onload = function(){
    'use strict';
    console.log('Onload ...');
    registerButtonHandler();
};

function registerButtonHandler(){
    'use strict';
    console.log('Registering handler ...');
    var addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addText);
}

function addText(){
    'use strict';
    var input = document.getElementById('input');
    var node=document.createElement('h3');
    var textnode=document.createTextNode(input.value);
    node.appendChild(textnode);
    document.getElementById('do').appendChild(node);
    input.value = '';
}
