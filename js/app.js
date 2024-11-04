document.addEventListener('DOMContentLoaded', function() {
  // Toggle da barra lateral
  const toggleButton = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');

  if (toggleButton && sidebar) {
    toggleButton.addEventListener('click', toggleSidebar);
  }

  function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
  }

  function toggleSubMenu(button) {
    const subMenu = button.nextElementSibling;

    // Fecha todos os submenus, exceto o que está sendo aberto
    if (!subMenu.classList.contains('show')) {
      closeAllSubMenus();
    }

    // Alterna o submenu atual
    subMenu.classList.toggle('show');
    button.classList.toggle('rotate');
  }

  function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show');
      ul.previousElementSibling.classList.remove('rotate');
    });
  }

  // Adiciona event listeners aos botões de submenu
  const subMenuButtons = sidebar.querySelectorAll('.dropdown-btn');
  subMenuButtons.forEach(button => {
    button.addEventListener('click', function() {
      toggleSubMenu(button);
    });
  });

  // Configuração do tema
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('light-mode');
        document.querySelector('header').classList.add('light-mode');
        document.querySelectorAll('.sidebar a').forEach(link => link.classList.add('light-mode'));
      } else {
        document.body.classList.remove('light-mode');
        document.querySelector('header').classList.remove('light-mode');
        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('light-mode'));
      }
    });
  }

  // Configuração do calendário
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'pt-br',
      events: [
        {
          title: 'Reunião',
          start: '2024-10-30',
          description: 'Reunião com a equipe para discutir o projeto'
        },
        {
          title: 'Aniversário',
          start: '2024-10-31',
          description: 'Aniversário do João'
        }
      ],
      eventClick: function(info) {
        alert('Título: ' + info.event.title + '\nDescrição: ' + info.event.extendedProps.description);
      }
    });

    calendar.render();
  }

  // Modo ADM
  const adminSwitch = document.getElementById('adminSwitch');
  if (adminSwitch) {
    adminSwitch.addEventListener('change', function() {
      if (this.checked) {
        window.location.href = 'ADM.html';
      }
    });
  }
});
function mostrarSecao(secaoId) {
  // Esconde todas as seções
  const secoes = document.querySelectorAll('.content-documentos');
  secoes.forEach(secao => {
      secao.style.display = 'none';
  });

  // Mostra a seção selecionada
  const secaoSelecionada = document.getElementById(secaoId);
  secaoSelecionada.style.display = 'block';
}

function visualizar(arquivo) {
  window.open(arquivo, '_blank');
}

function editar(arquivo) {
  // Lógica para editar o arquivo
  alert('Editar ' + arquivo);
}

