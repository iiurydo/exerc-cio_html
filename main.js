$(document).ready(function(){
    $('.container-form').on('submit', function(e){
        e.preventDefault();

        let idUnica = Math.floor(Math.random() * 998)+1;
        const pegaNome = $('#pegaNome').val();
        const atualizaNome = $(`<li id="${idUnica}"></li>`);
        $(`<li id="${idUnica}">${pegaNome}</li>`).appendTo(atualizaNome);
        $('ul').append(atualizaNome);
        $(`#${idUnica}`).click(function(event){
            $(`#${idUnica}`).css("text-decoration", "line-through");
        })
        $('#pegaNome').val('');
    })

})
