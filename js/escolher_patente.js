function toggleTab(tabId) {
    // Remove a classe 'active' de todas as abas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Adiciona a classe 'active' à aba clicada
    document.getElementById(tabId).classList.add('active');
}

function redirectTo(tabId) {
    // Define os caminhos de redirecionamento
    const paths = {
        'responsavel': '/cadastrar_documentacao_responsavel/cadastrar_responsavel_index.html',
        'beneficiario':'/cadastrar_documentacao_responsavel/cadastrar_beneficiario.html' 
    };

    
    window.location.href = paths[tabId];
}