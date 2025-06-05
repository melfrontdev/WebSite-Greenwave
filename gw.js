  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.getElementById('modal-close');

  // Dados dos produtos com título e características
  const produtos = {
    'CONTROLADOR GW3': {
      titulo: 'CONTROLADOR GW3',
      texto: 'Os controladores semafóricos da marca Greenwave - modelo GW3 Tempo Fixo, são equipamentos eletrônicos, microprocessados e desenvolvidos de acordo com os mais elevados padrões da Indústria. \n\nEquipamento robusto com baixa necessidade de manutenção, equipado com Sistema de Monitoramento (SM GW), podendo ser integrado com a Central GW, para fins de manutenção e forçamento de planos.'
    },
    'CONTROLADOR GW-1': {
      titulo: 'CONTROLADOR GW-1',
      texto: 'Os controladores semafóricos de tráfego da marca Greenwave - modelo GW1 são equipamentos eletrônicos, microprocessados, de concepção modular, que possuem circuitos de saídas dos focos semafóricos controlados por dispositivos de estado sólido. \n\nOs controladores GW1 podem operar semáforos isoladamente, como membros de uma rede de semáforos coordenados ou ainda interligados a uma central de tráfego. \n\nSão equipamentos robustos, com baixa necessidade de manutenção e programados através de software específico executado em equipamentos com interface Ethernet - PC (desktop), notebook ou tablet com sistema Windows.'
    },
    'BOTOEIRA SONORA': {
      titulo: 'BOTOEIRA SONORA',
      texto: 'A Botoeira Sonora BSC - GW foi desenvolvida para atender as necessidades de seus usuários, conforme a resolução Contran 704/ 2017. \n\nTrazendo segurança e eficiência aos portadores de deficiência visual, pois contém uma placa em Braile na parte superior da Botoeira. \n\nPossui inteligência de operar em modo convencional e sonoro ajudando na segurança de portadores de deficiência visual ou com mobilidade reduzida.'
    },
    'CENTRAL SEMAFÓRICA': {
      titulo: 'CENTRAL SEMAFÓRICA',
      texto: 'Funciona na forma de Monitoramento (supervisão) em mapa, mostrando todos os pontos cadastrados com seus respectivos estados operacionais que deverão ser enviados pelos controladores semafóricos para Central em períodos determinados. \n\nÉ um sistema para controle de tráfego urbano, que apresenta grande flexibilidade e pode satisfazer a todos os requisitos de pequenas ou médias aplicações.'
    },
    'SISTEMA NOBREAK': {
      titulo: 'SISTEMA NOBREAK',
      texto: 'Pode ser acoplado a controladores e/ou no-break de qualquer fabricante. \n\nÉ a solução para dar agilidade à manutenção e garantir a redução de custos. Supervisiona remotamente falta de energia, subtensão, amarelo intermitente, desligado/apagado e porta aberta. Possibilita reinicialização (reset remoto) do controlador. \n\nPossibilita utilização simultânea de dois "chips"'
    }
  };

  // Evento de clique para os cards
  document.querySelectorAll('.produto-card').forEach(card => {
    card.addEventListener('click', () => {
      const nomeProduto = card.textContent.trim();
      const dados = produtos[nomeProduto];

      if (dados) {
        modalTitle.textContent = dados.titulo;
        modalText.textContent = dados.texto;
        modal.style.display = 'flex';
      }
    });
  });

  // Fechar o modal
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Fechar clicando fora
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const wrapper = document.querySelector('.produtos-wrapper');
const btnLeft = document.querySelector('.arrow.left');
const btnRight = document.querySelector('.arrow.right');

// Define quanto vai rolar para cada clique (ajuste conforme o tamanho do card)
const scrollAmount = 300;

btnLeft.addEventListener('click', () => {
  wrapper.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  wrapper.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});