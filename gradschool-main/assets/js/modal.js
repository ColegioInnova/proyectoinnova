
$(document).ready(function(){
    $("#btn1").click(function(){
        $('#modal1').modal('show');
    });
    
    $("#btn2").click(function(){
        $('#modal2').modal('show');
        $('#modal2').draggable({});
        
    });
   
    $("#btn3").click(function(){
        $('#modal3').modal('show');
    });
    
    $("#btn4").click(function(){
        $('#modal4').modal('hide');
    });

    $("#btn5").on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever')
        var modal = $(this)
        modal.fin('.modal-title').text('Nex message to ' + recipient)
        modal.find('modal-body input').val(recipient);
    })
   
    $("#btn_custom").click(function(){
        $("#modal_custom").find(".modal-header").css("background","linear-gradient(to left,#f5af19,#f12711)");
        $("#modal_custom").find(".modal-header").css("color","white");
        $("#modal_custom").find(".modal-title").text("Ejemplo en vivo de cambio de titulo");
        $("#modal_custom").modal('show'); 
    }); 
}); 
 