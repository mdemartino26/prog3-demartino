// A $( document ).ready() block.
$( document ).ready(function() {

    $('#handle_ajax').click(function(){
        //Llamado a Ajax
    $.ajax({
        url:"https://reqres.in/api/users",
        success: function(response){
            console.log(response.data);
            var listadoUsuarios = $("#listado");
            
            $.each(response.data, function(index, elemento) {
                //del index me trae la posicion y del elemento me tre el elemnto en si
                console.log(elemento.first_name);
                listadoUsuarios.append('<div class="card"<h2>' + elemento.first_name + '</h2><img src="'+elemento.avatar+'"></div>');
            })
        },
        error: function(e){
            console.log("Hubo un error :(", e);
        },
        beforeSend: function () { $("#loader").show(); console.log('buscando data')},           
        complete: function () { $("#loader").hide(); console.log('data buscada!') }  


});
    })
    
    $("#handle_ajax_delete").click(function(){
        console.log('click')
        $("#listado").html('');
    })
});