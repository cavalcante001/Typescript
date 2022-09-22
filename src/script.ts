type Opcoes = {
    width: number,
    height: number
}
function configurar(props: Opcoes | 'auto') {
}

configurar({width: 200, height: 200});
configurar('auto');
configurar('automatico');

// function temNome(nome: string): true | false {
//     if (nome !== '') {
//         return true;
//     } else {
//         return false;
//     }
// }


// function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {
//     return `<div style="text-align: ${alinhamento}">${texto}</div>`;
// }

// mostrarTexto('Paulo', 'left');
// mostrarTexto('Paulo', 'right');
// mostrarTexto('Paulo', 'blabla');