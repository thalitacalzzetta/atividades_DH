function ligar(tempoIdeal, tempoProgramado) {
    if (tempoProgramado < tempoIdeal){
        console.log(`Tempo Insuficiente`)
    } else if (tempoProgramado <= 2*tempoIdeal){
        console.log(`Prato Pronto`)  
    } else if (tempoProgramado <= 3*tempoIdeal){
        console.log(`Queimou`)
    } else if (tempoProgramado  > 3*tempoIdeal){
        console.log(`Kabuum`)
    }
}

function programar(opcao, tempoProgramado){
   switch (opcao){
    case "Pipoca":
        ligar(10, tempoProgramado)
        console.log("Fim")
        break;
    case "Macarrao":
        ligar(8, tempoProgramado)
        console.log("Fim")
        break;
   case "Carne":
        ligar(15, tempoProgramado)
        console.log("Fim")
        break;
    case "Feijao":
        ligar(12, tempoProgramado)
        console.log("Fim")
        break;
    case "Feijao":
        ligar(8, tempoProgramado)
        console.log("Fim")
        break;
    default:
        console.log(`Prato Inexistente`)
   }
}


programar("Arroz", 16)
