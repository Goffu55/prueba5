$("#invertir").click(function(e){
    e.preventDefault();
    var valor = $("#palabra").val();
    var numero = $('#numero').val();

    if (valor.length < 15) {
        alert("Palabra muy corta, minimo 15 caracteres" );
    }else if (numero.length < 5) {
        alert("numero muy pequeño, minimo 5 digitos" );
    }else{
        $("#textarea").html(invertir(valor) + convertir(numero));
    }
    
    
    
  })

  function noPuntoComa( event ) {
  
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if ( key === 110 || key === 190 || key === 188 ) {     
        
       e.preventDefault();     
    }
}

  $("#number").keyup(function(){              
    var ta      =   $("#number");
    letras      =   ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
  function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
   
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;

  }
  function convertir(numeral){
    var msg = numeral;
    var arr = msg.split('');
    arr.sort(function(a, b){return b - a});
    // var cadenaSinComas = arr.replace(","," ");
    return arr.join('');
  }
  