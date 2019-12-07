$(function() {
    let $list = $('ul.todoList');
    let $liCount =$('ul.todoList li');
    let count = $liCount.length;

    $('#submitItem').click(function(){
        count += 1;
        var text = $('#newItemText').val();
        if (text.length >0) {
            $list.append(`<li><input type="checkbox" id="${count}">
            <label for="${count}">${text}</label></li>`)
            $('#newItemText').focus().val('');
        }
    });
});
