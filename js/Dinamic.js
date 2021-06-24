function crear(){
    var col = document.getElementById("cols").value;
    var filas = document.getElementById("rows").value;
    var tabla="<table border=\"0\">";
    for(i=0;i<filas;i++){
    tabla+="<tr>";
    for(j=0;j<col;j++){ 
    tabla+="<td>"+"<input type=\"text\" size=\"1\">"+ "</td>";
    }
    tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado").innerHTML=tabla;
    }
    