$(document).ready(function(){

    if($('#eaten-list').children().length < 1){
        $('#eaten').hide()
    }

    if($('#to-eat-list').children().length < 1){
        $('#to-eat').hide()
    }

    $('.delete-btn').on('click', () => {
        const id = $('#btn1').attr("class")
        console.log('delete')
        //console.log($(this).data("index"));
        console.log(id);
    })
})