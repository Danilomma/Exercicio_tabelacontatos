const form = document.getElementById('form-agenda');
const fotoContato = document.getElementById('Nome');
const nomeContato = document.getElementById('nome-contato');
const telContato = document.getElementById('tel-contato');
const totalContatos = document.getElementById('total-contatos');


let nomes = []
let tel = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTotalContatos();
});


// Formatando o número do telefone 
function formatarNumeroTel(numeroTel) {
    if(numeroTel.length === 11) {
        return numeroTel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (numeroTel.length === 10) {
        return numeroTel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        return numeroTel;
    }
}


// Adicionar Linha na tabela
function adicionarLinha(){
    if(nomes.includes(nomeContato.value) || tel.includes(telContato.value)) {
        alert(`O nome ${nomeContato.value} ou telefone ${telContato.value} já forão inseridos na lista`)
    } else {
        const corpoTabela = document.querySelector('tbody');
        const numeroTelFormatado = formatarNumeroTel(telContato.value)
        corpoTabela.innerHTML += `
            <tr>
                <td>${Nome.value ? 
                    `<img src=${Nome.value} alt="---">` : perfilDefault}
                </td>
                <td>${nomeContato.value}</td>
                <td>${numeroTelFormatado}</td>
            </tr>
        `
    nomes.push(nomeContato.value);
    tel.push(telContato.value);
    url.push(Nome.value);
    }

    nomeContato.value = '';
    telContato.value = '';
    Nome.value = '';
}


// Somar total de contatos
function atualizarTotalContatos(){
    let somaTotalContatos = nomes.length;
    totalContatos.innerHTML = somaTotalContatos;
}


// Limpar Tabela
function limparTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';
    nomes.splice(0, nomes.length);
    tel.splice(0, tel.length);
    url.splice(0, tel.length);
    totalContatos.innerHTML = '';
}