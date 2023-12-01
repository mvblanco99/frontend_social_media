export function calcularTiempoTranscurrido(fecha) {
    
    const fechaActual = new Date();
    const fechaPost = new Date(fecha);
    const tiempoTranscurrido = fechaActual - fechaPost;
  
    // Convertir el tiempo transcurrido a días, horas, minutos y segundos
    const segundos = Math.floor(tiempoTranscurrido / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    let fecha_result;

    if(dias > 0){
      fecha_result = `${dias} d`;
    }else if(horas > 0){
      fecha_result = `${horas} h`
    }else if(minutos > 0){
      fecha_result = `${minutos} min`
    }else if(segundos  == 0){
      fecha_result = 'Now';
    }else if(segundos  > 0){
      fecha_result = `${segundos} seg`;
    }
  
    return {
      fecha_result
    };
  }