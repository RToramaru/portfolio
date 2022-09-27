const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const toggleMenu = () => {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const projects = [
  {
    name: 'Chat em Grupo',
    details: ['Chat', 'Mobile', '2022'],
    smallDescription:
      'Um aplicativo para conversa em grupo',
    bigDescription:
      "O aplicativo Chat, é um aplicativo de bate papo simples desenvolvido utilizado Flutter e fireBase. Seu funcionamento ocorre através da conexão ao e-mail do google e conversando por um grupo já cadastrado. Todas as conversas são feitas somente através dos grupos.",
    imageUrlMobile: 'assets/chat.png',
    imageUrlDesktop: 'assets/chat.png',
    popupImageUrlMobile: 'assets/chat.png',
    popupImageUrlDesktop: 'assets/chat.png',
    technologiesPopup: [
      'Flutter',
      'Firebase',
    ],
    technologies: ['Flutter', 'Firebase'],
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/chat',
  },
  {
    name: 'Clima',
    details: ['Clima', 'Mobile', '2022'],
    smallDescription:
      'Aplicativo para ver o clima.',
    bigDescription:
      "Clima App é um aplicativo desenvolvido utilizando o Flutter para exibir o clima da localização atual ou um local específico. O aplicarivo funciona consumindo a Weather API, que oferece um plano grátis para utilizar da mesma.",
    imageUrlMobile: 'assets/clima.png',
    imageUrlDesktop: 'assets/clima.png',
    technologiesPopup: ['Flutter', 'API'],
    technologies: ['Flutter', 'API',],
    popupImageUrlMobile: 'assets/clima.png',
    popupImageUrlDesktop: 'assets/clima.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/clima-app',
  },
  {
    name: 'Contador Pomodoro',
    details: ['Pomodoro', 'Mobile', '2018'],
    smallDescription:
      "Contador poodoro de tarefas.",
    bigDescription:
      "Contador Pomodoro é um aplicativo desenvolvido utilizando o Flutter e o MobX para realizar a tarefa do contador Pomodoro. O aplicativo foi desenvolvido para controlar o tempo de descanso e o tempo de trabalho utilizando a técnica Pomodoro",
    imageUrlMobile: 'assets/pomodoro.png',
    imageUrlDesktop: 'assets/pomodoro.png',
    technologiesPopup: ['Flutter'],
    technologies: ['Flutter'],
    popupImageUrlMobile: 'assets/pomodoro.png',
    popupImageUrlDesktop: 'assets/pomodoro.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/contador-pomodoro',
  },
  {
    name: 'Lista de Tarefa',
    details: ['Lista', 'Mobile', '2022'],
    smallDescription:
      'Aplicativo Flutter para registro de tarefas.',
    bigDescription:
      "Lista de Tarefa App é um aplicativo Flutter desenvolvido para realizar o armazenamneto de tarefas. O aplicativo foi desenvolvido para que se possa inserir as atividades que pretende fazer e em qual dia ela será realizada.",
    imageUrlMobile: 'assets/lista-tarefa.png',
    imageUrlDesktop: 'assets/lista-tarefa.png',
    technologiesPopup: ['Flutter', 'Firebase'],
    technologies: ['Flutter', 'Firebase'],
    popupImageUrlMobile: 'assets/lista-tarefa.png',
    popupImageUrlDesktop: 'assets/lista-tarefa.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/lista-de-tarefa-app',
  },
  {
    name: 'Sicoin - Sistema de Controle de Insumos',
    details: ['Sicoin', 'Web', '2022'],
    smallDescription:
      'Sistema de Controle de Insumos para o IFNMG Campus Salinas',
    bigDescription:
      "O Sicoin é um sistema desenvolvido para o IFNMG - Campus Salinas para realizar ações no setor de venda. Seu funcionamento permite cadastrar Usuários, Produtos, Setores, Notas de Entrada, Notas de Saída, e Gerar Relatórios.",
    imageUrlMobile: 'assets/sicoin.png',
    imageUrlDesktop: 'assets/sicoin.png',
    technologiesPopup: ['PHP', 'MySQL'],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    popupImageUrlMobile: 'assets/sicoin.png',
    popupImageUrlDesktop: 'assets/sicoin.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/web-sicoin',
  },

  {
    name: 'Cerbero',
    details: ['Sicoin', 'Web', '2022'],
    smallDescription:
      'Sistema de detecção de placas veiculares',
    bigDescription:
      "O cerbero é um sistema de detecção de placas veiculares. Desenvolvido como projeto de pesquisa, o cerbero foi pensado para melhorar o funcionamento do IFNMG - Campus Salinas, realizando o registro automático de placas veiculares.",
    imageUrlMobile: 'assets/cerbero.png',
    imageUrlDesktop: 'assets/cerbero.png',
    technologiesPopup: ['Python', 'PHP'],
    technologies: ['Python', 'PHP', 'YOLO', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    popupImageUrlMobile: 'assets/cerbero.png',
    popupImageUrlDesktop: 'assets/cerbero.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/cerbero',
  },
  {
    name: 'Lista de Tarefa',
    details: ['Lista de Tarefa', 'Web', '2021'],
    smallDescription:
      'Aplicação para o gerenciamento de tarefas',
    bigDescription:
      "Aplicação Java usando o framework Spring Boot e Maven. Lista de Tarefa é uma aplicação para o gerenciamento de tarefas. incluindo as ações de inserção, pesquisa, atualização e exclusão.",
    imageUrlMobile: 'assets/lista-tarefa-spring-r.png',
    imageUrlDesktop: 'assets/lista-tarefa-spring-r.png',
    technologiesPopup: ['Java', 'Spring'],
    technologies: ['Java', 'Spring', 'Maven', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    popupImageUrlMobile: 'assets/lista-tarefa-spring.png',
    popupImageUrlDesktop: 'assets/lista-tarefa-spring.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/lista-tarefas',
  },
  {
    name: 'Chat Java',
    details: ['Chat Java', 'Desktop', '2020'],
    smallDescription:
      'Chat Java com Sockets',
    bigDescription:
      "Aplicação Java Swing usando Sockets para realizar um chat ao vivo, a aplicação funciona em dois níveis, sendo o primeiro o servidor que inscia um ip para uso, e o segundo o cliente que pode se conectar ao servidor. Todos os clientes que se conectarem no servidor podem trocar mensagens entre si.",
    imageUrlMobile: 'assets/chat-java.png',
    imageUrlDesktop: 'assets/chat-java.png',
    technologiesPopup: ['Java', 'Sockets', 'Swing'],
    technologies: ['Java', 'Sockets', 'Swing'],
    popupImageUrlMobile: 'assets/chat-java.png',
    popupImageUrlDesktop: 'assets/chat-java.png',
    linkLive: '',
    linkSource: 'https://github.com/RToramaru/chat-java',
  },
];

function g(e, isClass = false) {
  if (isClass) {
    return document.getElementsByClassName(e)[0];
  }
  return document.getElementById(e);
}

function init() {
  for (let k = 0; k < projects.length; k += 1) {
    const project = projects[k];
    const template = document.createElement('template');
    const technologies = project.technologies.map(
      (t) => `<li class="langu">${t}</li>`,
    );
    template.innerHTML = `<div class="project-card desktop">
      <div class="mobile-image">
        <img src="${project.imageUrlMobile}" alt="First Card" />
      </div>
      <div class="desktop-image">
        <img src="${project.imageUrlDesktop}" alt="First card-desktop" />
      </div>
      <div class="contents-two">
        <h2 class="head">${project.name}</h2>
        <h4 class="desktop_show">${project.name}</h4>
        <div class="card-detail-box">
          <ul class="cards-container">
            <li class="card-detail option">${project.details[0]}</li>
            <li class="card-detail option">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              ${project.details[1]}
            </li>
            <li class="card-detail option">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              ${project.details[2]}
            </li>
            <li class="card-detail optiond2_full">${project.details[0]}</li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              ${project.details[1]}
            </li>
            <li class="card-detail optiond2_full">
              <img src="assets/bullets.png" alt="bullet" class="circle" />
              ${project.details[2]}
            </li>
          </ul>
          <p class="instruction">${project.bigDescription}</p>
          <p class="instruction-show">${project.bigDescription}</p>
          <div class="language1 inline">
            <ul> ${unescape(technologies.join(''))}</ul>
          </div>
        </div>
          <button type="button" class="btn-one see-project" onclick="javascript:window.open('${project.linkSource}', '_blank');" formtarget="_blank">
            Visualizar Código
            <span>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                  fill="#6070FF" />
              </svg>
            </span>
          </button>
        </div>
    </div>`;

    g('projects').appendChild(template.content.firstChild);
  }
}

window.onload = init();
