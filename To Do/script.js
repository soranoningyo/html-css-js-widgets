/*global document,alert ,console*/
var input = document.getElementById('inp'),
    btn = document.getElementById('btn'),
    show = document.getElementById('show'),
    storge = [],
    i = 1;
btn.addEventListener('click', function add() {
    'use strict';
    if (input.value === '') {
        alert('this is empty data');
    } else if (input.value === storge[storge.indexOf(input.value)]) {
        alert('mission already exist');
    } else {
        storge.push(input.value);
        console.log(storge);
        var dv = document.createElement('div');
        document.getElementById('show').append(dv);
        dv.setAttribute('id', 'note-' + i);
        dv.classList.add('notes');
        var innp = document.createElement('p');
        document.getElementById('note-' + i).append(innp);

        innp.innerHTML = storge[storge.length - 1];
        var rbtn = document.createElement('input');
        rbtn.setAttribute('type', 'checkbox');

        document.getElementById('note-' + i).prepend(rbtn);
        i = i + 1;
        input.value = '';
    }
});
