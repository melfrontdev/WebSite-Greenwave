const textosProdutos = {
  'CONTROLADOR GW3': 'Os controladores semafóricos da marca Greenwave - modelo GW3 Tempo Fixo, são equipamentos eletrônicos, microprocessados e desenvolvidos de acordo com os mais elevados padrões da Indústria. Equipamento robusto com baixa necessidade de manutenção, equipado com Sistema de Monitoramento (SM GW), podendo ser integrado com a Central GW, para fins de manutenção e forçamento de planos.',
  'CONTROLADOR GW-1': 'Os controladores semafóricos de tráfego da marca Greenwave - modelo GW1são equipamentos eletrônicos, microprocessados, de concepção modular, que possuem circuitos de saídas dos focos semafóricos controlados por dispositivos de estado sólido.Os controladores GW1 podem operar semáforos isoladamente, como membros de uma rede de semáforos coordenados ou ainda interligados a uma central de tráfego.',
  'BOTOEIRA SONORA': 'A Botoeira sonora BSC - GW foi desenvolvida para atender as necessidades de seus usuários, conforma á resolução Contran 704/2017. Possui inteligência de operar em modo convencional e sonoro ajudando na segurança de portadores de deficiência visual ou com mobilidade reduzida. Conforme a resolução Contran 704/ 2017.',
  'CENTRAL SEMAFÓRICA': 'Funciona na forma de Monitoramento (supervisão) em mapa, mostrando todos os pontos cadastrados com seus respectivos estados operacionais que deverão ser enviados pelos controladores semafóricos para Central em períodos determinados. É um sistema para controle de tráfego urbano, que apresenta grande flexibilidade e pode satisfazer a todos os requisitos de pequenas ou médias aplicações.',
  'SISTEMA NOBREAK': 'Pode ser acoplado a controladores e/ou no-break de qualquer fabricante.É a solução para dar agilidade à manutenção e garantir a redução de custos.Supervisiona remotamente falta de energia, subtensão, amarelo intermitente, desligado/apagado e porta aberta.Possibilita reinicialização (reset remoto) do controlador.Possibilita utilização simultânea de dois "chips".',
};

const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.produto-card').forEach(card => {
  card.addEventListener('click', () => {
    const produto = card.textContent.trim();
    modalText.textContent = textosProdutos[produto] || 'Descrição não encontrada.';
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");
    const wrapper = document.querySelector(".produtos-wrapper");

    const cardWidth = wrapper.querySelector(".produto-card").offsetWidth + 36; // card + gap
    const scrollByAmount = cardWidth * 3; // 3 cards por clique

    leftBtn.addEventListener("click", () => {
      wrapper.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth"
      });
    });

    rightBtn.addEventListener("click", () => {
      wrapper.scrollBy({
        left: scrollByAmount,
        behavior: "smooth"
      });
    });
  });