$(document).ready(function(){

$('form').on('submit', function(e){
    e.preventDefault();

    const enderecoNovaTarefa = $('#tarefa').val();
    const novoItem = $('<li></li>').text(enderecoNovaTarefa);
    $('ul').append(novoItem);
    $('#tarefa').val('');

    novoItem.click(function(){
        $(this).toggleClass('tarefa-feita')
    })

})

})