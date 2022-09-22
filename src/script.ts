function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}

let usuario = {
    nome: 'Paulo', idade: 23
};

console.log(resumo(usuario));