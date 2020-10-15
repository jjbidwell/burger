console.log($('#eaten-list').children().length);

if($('#eaten-list').children().length < 1){
    $('#eaten').hide()
}

if($('#to-eat-list').children().length < 1){
    $('#to-eat').hide()
}

$('h1').on('click', ()=> {
    console.log('jquery connected');
})