
let usuarios = [];


function adicionarUsuario(nome, idade, email) {
    let usuarioNovo = {
        nome: nome,
        idade: idade,
        email: email,
    };

    
    if (idade < 18) {
        console.log(nome, "muito novinho");
    } else if (!nome || !email) {
        console.log("Os dados estão errados :(");
    } else {
        usuarios.push(usuarioNovo);
        console.log("Usuário adicionado com sucesso!");
    }
}


function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    console.log("Usuários cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}


adicionarUsuario("Natan Nreno Ferreira", 40, "nata@gmail.com");
adicionarUsuario("Crystian Pedrado", 19, "fedorento@gmail.com");
adicionarUsuario("Lucas Medeiros", 8, "pada@gmail.com");
adicionarUsuario("Fausto Ferents", 8, "fasuto@gmail.com");

listarUsuarios();