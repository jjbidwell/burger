$(document).ready(function(){

    if($('#eaten-list').children().length < 1){
        $('#eaten').hide()
    }

    if($('#to-eat-list').children().length < 1){
        $('#to-eat').hide()
    }

    $(document).on('click', ['class=eat-btn'],() => {
        const id = $(this).attr('id');
        console.log('Burger eaten!');
        //console.log($(this).data("index"));
        console.log(id);
    })
})