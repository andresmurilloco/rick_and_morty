export function AlternarMostrar(estado){
    if(estado === 'ocultarParrafo'){
        estado = 'mostrarParrafo';
    } else{
        estado = 'ocultarParrafo';
    }
    return estado;
}