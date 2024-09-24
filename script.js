// Selecionando os elementos da página
const inputTarefa = document.getElementById('tarefa');
const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar uma tarefa
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    // Criar um item de lista com a tarefa
    const itemLista = document.createElement('li');
    itemLista.textContent = textoTarefa;

    // Botão de remover tarefa
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => {
        listaTarefas.removeChild(itemLista);
    };

    itemLista.appendChild(botaoRemover);
    listaTarefas.appendChild(itemLista);

    // Limpar o campo de entrada após adicionar a tarefa
    inputTarefa.value = '';
}

// Evento de clique para o botão de adicionar tarefa
botaoAdicionarTarefa.addEventListener('click', adicionarTarefa);

// Função para realizar o teste de adição e remoção de 3 tarefas
function testarTarefas() {
    const tarefas = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

    tarefas.forEach(tarefa => {
        inputTarefa.value = tarefa;
        adicionarTarefa();
    });

    console.log('Teste de adição realizado! Todas as 3 tarefas foram adicionadas.');

    // Remover todas as tarefas
    const botoesRemover = document.querySelectorAll('#listaTarefas button');
    botoesRemover.forEach(botao => botao.click());

    console.log('Teste de remoção realizado! Todas as tarefas foram removidas.');
}

// Chame a função de teste ao carregar a página
window.onload = testarTarefas;