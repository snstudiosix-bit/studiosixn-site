// Substitua pelo número real do WhatsApp da empresa (com DDD)
const SEU_NUMERO_WHATSAPP = "5511999999999"; 

const checkboxes = document.querySelectorAll('.calc-box input[type="checkbox"]');
const totalDisplay = document.getElementById('totalValue');

// Atualiza o valor total em tempo real
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

// Envia a mensagem com os itens selecionados via WhatsApp
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

    let mensagem = `Olá! Gostaria de um orçamento na *STUDIO SIXN*:\n\n`;
    mensagem += `*Serviços Selecionados:*\n`;
    
    servicosSelecionados.forEach(item => {
        mensagem += `• ${item}\n`;
    });

    mensagem += `\n*Valor Estimado:* R$ ${total.toFixed(2).replace('.', ',')}`;
    
    const url = `https://wa.me/${66999856584}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}