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
            burger_name: $(this).parent().text().replace("Eat me!", "").trim()
        }
        $.ajax({
            url: "/api/burgers/"+burger.id,
            method: "PUT",
            data: burger
          }).then(result => {
              console.log(result);
          }).catch((err)=>{
              location.reload();
          })
    }
   

    
});

