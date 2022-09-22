let names = ['paulo', 'pedro', 'cristina',90];
names.forEach(function(nome) {
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase());
        return;
    }
    console.log(nome);
});