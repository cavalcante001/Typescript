function resumo(usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", tudo bem? Voc\u00EA tem ").concat(usuario.idade, " anos");
}
var usuario = {
    nome: 'Paulo', idade: 23
};
console.log(resumo(usuario));
