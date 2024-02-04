document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('contadorAAAA');

    function updateCountdown() {
        const DataAtual = new Date();
        const DataFinal = new Date('February 4, 2024 00:10:00');
        const timeDifference = DataFinal - DataAtual;
        if (timeDifference > 0) {
            let dias = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hora = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((timeDifference % (1000 * 60)) / 1000);
            if(hora < 10){
                hora = "0" + hora
            }
            if(minutos < 10){
                minutos = "0" + minutos
            }
            if(dias < 10){
                dias = "0" + dias
            }
            if(segundos < 10){
                segundos = "0" + segundos; 
            }
            countdownElement.innerHTML = `${dias} <sub>Dias</sub> : ${hora} : ${minutos} : ${segundos}`;
        } else {
           window.document.getElementById("mensagemFinal").hidden = false
           window.document.getElementById("areaContagem").hidden = true

        }
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
});
