const SEU_NUMERO_WHATSAPP = "5566999856584"; 

const checkboxes = document.querySelectorAll('.calc-box input[type="checkbox"]');
const totalDisplay = document.getElementById('totalValue');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let total = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                total += parseFloat(cb.value);
            }
        });
        
        totalDisplay.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    });
});

function enviarWhatsApp() {
    let servicosSelecionados = [];
    let total = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            servicosSelecionados.push(cb.getAttribute('data-name'));
            total += parseFloat(cb.value);
        }
    });

    if (servicosSelecionados.length === 0) {
        alert("Por favor, selecione ao menos um serviço para o orçamento!");
        return;
    }

    let mensagem = `Olá! Gostaria de um orçamento na *Studio SIXN*:\n\n`;
    mensagem += `*Serviços Selecionados:*\n`;
    
    servicosSelecionados.forEach(item => {
        mensagem += `• ${item}\n`;
    });

    mensagem += `\n*Valor Estimado:* R$ ${total.toFixed(2).replace('.', ',')}`;
    
    const url = `https://wa.me/${5566999856584}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}