$(document).ready(function(){

    if($('#eaten-list').children().length < 1){
        $('#eaten').hide()
    }

    if($('#to-eat-list').children().length < 1){
        $('#to-eat').hide()
    }

    $(document).on('click', 'button.eat-btn', eat) 


    function eat(){
        const burger = {
            id: parseInt($(this).data('id')),
            burger_name: $(this).parent().text().replace("Devour it!", "").trim()
        }
        const url = `/api/burgers/${burger.id}`
        ajax(url, burger);
    }
   function ajax(url, burger){
    $.ajax(url,{
        type: "PUT",
        data: JSON.stringify(burger),
        contentType: "application/json; charset=UTF-8"
      }).then(() => {
          location.reload()
      }).catch(()=>{
          location.reload();
      })
   }

    
});

