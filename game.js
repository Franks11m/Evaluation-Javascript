let protagonistGame = {
    name: "Mumtaz Mahal",
    situation: "embarazo riesgoso",
    deathAvoided: false,
    husband: {
        name: "Shan Jahan",
        emotion: "Triste por su esposa",
        palace: {
            name: "Taj Mahal",
            creator: "Esposo de Mumtaz Mahal",
            emotion: "Counstruido en memoria a su esposa",
            newborn: {
                name: "El hijo",
                Date: 1631,
            }
        }
    }
}
function evitarMuerteMumtaz() {

    console.log("Estás en una situación crítica " + protagonistGame.name + " está embarazada y corre peligro de muerte.");
    
    let decisionInitial = prompt("¿Qué harás para ayudar a " + protagonistGame.name + "?\n1. Intervenir de inmediato.\n2. Observar la situación antes de actuar.\n3. Llamar a su esposo.\n4 Ver situacion de muerte.");
    
    switch (decisionInitial) {
        case "1":
          console.log("Has decidido intervenir de inmediato.");

          let medicalhelp = prompt("¿Cómo planeas buscar ayuda médica para " + protagonistGame.name + " y " + protagonistGame.husband.palace.newborn.name + "? \n1. Llamar a una ambulancia.\n2. Buscar un médico cercano.");
        
          delete protagonistGame.husband.palace.newborn.name;
          document.getElementById('messageContainerOne').innerHTML = `Objeto actual: ${JSON.stringify(protagonistGame)}`;
          console.log( "MUERE " + protagonistGame.husband.palace.newborn.name);
          console.log(protagonistGame.name + " fue atendida imediatamente");
          protagonistGame.deathAvoided = true;
  
          break;
    
        case "2":
          console.log("Has decidido observar la situación antes de actuar.");
          let observation = prompt("¿Qué detalles observarás antes de tomar una decisión?\n1. Síntomas de la persona.\n2. Ponerme a rezar.");
         
          delete protagonistGame.name;
          document.getElementById('messageContainerTwo').innerHTML = `Objeto actual: ${JSON.stringify(protagonistGame)}`;
          console.log("MUERE " + protagonistGame.name);
          console.log("Mala desicion " + protagonistGame.husband.name + " se encuentra " + protagonistGame.husband.emotion);
          protagonistGame.deathAvoided = false;
  
          break;
    
        case "3":
          console.log("Has decidido llamarle a su esposo");
          let call = prompt("En esa epoca no existian los celulares y " + protagonistGame.husband.name + " se encontraba a 5min de Agaria. ¿Escoge una respuesta?\n1 Fueras a buscale al esposo.\n2 Buscarias a su esposo y llamarias a un doctor");

          console.log("¡Justo a tiempo! " + protagonistGame.husband.name + " vio a su esposa pero no a "+ protagonistGame.husband.palace.newborn.name);
          console.log ("La construccion del " + protagonistGame.husband.palace.name + " no se crearia nunca porque fue " + protagonistGame.husband.palace.emotion);
          delete protagonistGame.husband.palace.name;
          document.getElementById('messageContainerThree').innerHTML = `Objeto actual: ${JSON.stringify(protagonistGame)}`;
          console.log("NUNCA SE CONSTRUYO " + protagonistGame.husband.palace.name);
          protagonistGame.deathAvoided = true;
  
          break;

          case "4":
            console.log("¡Sorpresa inesperada! " + protagonistGame.name + " y " + protagonistGame.husband.palace.newborn.name + " han muerto");
            delete protagonistGame.name;
            delete protagonistGame.husband.palace.newborn.name;
            document.getElementById('messageContainerThree').innerHTML = `Objeto actual: ${JSON.stringify(protagonistGame)}`;
            console.log(protagonistGame.name);
            console.log(protagonistGame.husband.palace.newborn.name);
            console.log("Este acontecimiento fue en el año " + protagonistGame.husband.palace.newborn.Date);
            protagonistGame.deathAvoided = false;
    
        default:
          console.log("Decisión no válida. La situación no cambia.");
      }
    
      if (protagonistGame.deathAvoided) {
        console.log("¡Felicidades! Has logrado evitar la muerte de " + protagonistGame.name + " por su " + protagonistGame.situation + " pero no a el " + protagonistGame.husband.palace.newborn.name + " por ende no se contruiria nunca el palacio " + protagonistGame.husband.palace.name);

      } else {
        console.log("Lamentablemente "+ protagonistGame.name + " y " + protagonistGame.husband.palace.newborn.name + " han fallecido.");
      }
  
      let feedbackFinal = prompt("¿Cómo te sientes después de la situación?\n1. Aliviado por haber ayudado.\n2. Sorprendido por el giro inesperado.\n3. Triste por la pérdida.");
      console.log("Gracias por tu participación. Tu respuesta final es: " + feedbackFinal);
    }
    
    evitarMuerteMumtaz();
    