$(document).ready(function() {

    $("#validate").click(function(){
        try {
            let exp = new RegExp( $("#expression").val() );
            let text = $("#textValidate").val();
            let result = exp.exec(text);
            if( result != null && result == text ){
                alert("La clave ingresada es correcta");
            }else {
                alert("La clave ingresada es invalida");
            }        
        }catch(e) {
            alert("Expresión regular invalida");
        }
    });

});