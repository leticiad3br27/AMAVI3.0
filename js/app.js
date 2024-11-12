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

  
document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const adminId = document.getElementById('admin-id').value;
    const password = document.getElementById('password').value;

    fetch('/ADMIndex.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ adminId: adminId, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Página não encontrada');
        }
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        // Aqui você pode adicionar lógica para redirecionar o usuário ou mostrar uma mensagem de sucesso
        window.location.href = 'ADMindex23.html'; // Redireciona para a página ADMIndex.html
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao tentar acessar a página. Verifique se a página ADMIndex.html existe e está no local correto.');
    });
});




  
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            dateClick: function(info) {
                // Preencher os campos do formulário automaticamente
                document.getElementById('data').value = info.dateStr; // Data clicada
                document.getElementById('descricao').focus(); // Focar no campo de descrição
            },
            events: [] // Aqui você pode carregar eventos do servidor, se necessário
        });

        calendar.render();

        // Envio do formulário
        document.getElementById('salvar').addEventListener('click', function() {
            var title = document.getElementById('descricao').value;
            var date = document.getElementById('data').value + 'T' + document.getElementById('horario').value; // Formatar data e horário

            // Adicionar evento ao calendário
            calendar.addEvent({
                title: title,
                start: date,
                allDay: false // Definir como all-day se necessário
            });

            // Limpar os campos do formulário
            document.querySelector('.form').reset();
            document.getElementById('imagePreview').style.display = 'none'; // Ocultar imagem
        });
    });

    function previewImage(event) {
        const image = document.getElementById('imagePreview');
        image.src = URL.createObjectURL(event.target.files[0]);
        image.style.display = 'block';
    }
