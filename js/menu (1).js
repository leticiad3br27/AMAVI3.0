document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menuBar');
    const menuIcon = document.getElementById('menuIcon');

    Object.assign(menuBar.style, {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        top: '0',
        left: '0',
        right: '0',
        boxSizing: 'border-box',

    });

    Object.assign(menuIcon.style, {
        width: '50px',
        height: 'auto',
        borderRadius: '100%',
        margin: '12px',
        maxWidth: '100%',
        zIndex: '3'
    });

    const menuItens = [
        { name: 'Home', url: 'index.html' },
        { name: 'Atendimento', url: 'atendimentos.html' },
        { name: 'Eventos', url: 'eventos.html' },
        { name: 'Doações', url: 'doacoes.html' }
    ];

    const linkDiv = document.createElement('div');
    Object.assign(linkDiv.style, {
        display: 'flex',
        gap: '10px',
        paddingRight: '30px',
        maxWidth: '100%'
    });

    menuItens.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.name;
        Object.assign(link.style, {
            fontSize: '18px',
            padding: '27px 10px',
            marginRight: '10px',
            display: 'block',
            color: 'white',
            textAlign: 'center',
            textDecoration: 'none',
            backgroundColor: '#00435D',
            maxWidth: '100%'
        });
        linkDiv.appendChild(link);
    });

    menuBar.appendChild(menuIcon);
    menuBar.appendChild(linkDiv);

    Object.assign(menuBar.style, {
        display: 'flex',
        backgroundColor: '#00435D',
        overflow: 'hidden'
    });

    const sideMenu = document.createElement('div');
    sideMenu.id = 'sideMenu';
    Object.assign(sideMenu.style, {
        height: '100%',
        width: '0',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: '#002E40',
        overflowX: 'hidden',
        transition: '1.5s',
        paddingTop: '60px',
        zIndex: '2'
    });

    const menulat = [
        { nome: 'Conta', url: 'conta.html' },
        { nome: 'Configurações', url: 'config.html' },
        { nome: 'Requerimentos', url: 'req.html' }
    ];

    let nameTi = document.createElement('h1');
    let txtname = document.createTextNode('Fulano Medeiros da Silva de oliveira');
    Object.assign(nameTi.style, {
        height: '80px',
        fontSize: '18px',
        marginTop: '-45px',
        paddingLeft: '80px'
    });
    nameTi.appendChild(txtname);
    sideMenu.appendChild(nameTi);

    const closeBtn = document.createElement('a');
    closeBtn.href = 'javascript:void(0)';
    closeBtn.addEventListener('click', closeSideMenu);
    sideMenu.appendChild(closeBtn);

    menulat.forEach(item => {
        const sidelink = document.createElement('a');
        sidelink.href = item.url;
        sidelink.textContent = item.nome;
        Object.assign(sidelink.style, {
            padding: '8px 8px 8px 32px',
            textDecoration: 'none',
            fontSize: '18px',
            color: 'white',
            display: 'block',
            backgroundColor: '#25718f',
            transition: '0.3s',
            marginTop: '5px'
        });
        sideMenu.appendChild(sidelink);
    });

    document.body.appendChild(sideMenu);

    function openSideMenu() {
        sideMenu.style.width = '250px';
    }

    function closeSideMenu() {
        sideMenu.style.width = '0';
    }

    let isMenuOpen = false;

    menuIcon.addEventListener('click', function () {
        if (isMenuOpen) {
            closeSideMenu();
        } else {
            openSideMenu();
        }
        isMenuOpen = !isMenuOpen;
    });
});