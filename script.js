// Data alvo
const targetDate = new Date('November 02, 2025 12:00:00').getTime();

// Atualiza a contagem regressiva a cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe os resultados
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Se a contagem acabar, mostra uma mensagem
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Chegou a hora do ENEM!";
    }
}, 1000);
