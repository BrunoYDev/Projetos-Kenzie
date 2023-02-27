// Utilizando o array dentro do método freeze, que literalmente congela os dados
// Métodos de alteração de array como push, pop, shift não funcionarão nesses arrays
// Métodos de iteração como map, some, forEach, filter funcionam normalmente

// Base de dados de usuários
const usuarios = Object.freeze([
    {
      id: 1,
      nome: "Samuel Persuhn",
      stacks: ["JavaScript", "PostgreSQL", "Node.js"],
      idade: 26,
      endereco: {},
      password: "51686aaasd2",
      email: "samu@kenzie.com",
    },
    {
      id: 2,
      nome: "Patrick Nekel",
      stacks: ["JavaScript", "MongoDB", "Python"],
      idade: 22,
      endereco: {},
      password: "supersenha123548",
      email: "patrick@kenzie.com",
    },
    {
      id: 3,
      nome: "Samuel Leão",
      stacks: ["HTML5", "CSS3", "React.js"],
      idade: 28,
      endereco: {},
      password: "hash*asdasda7788",
      email: "samueleao@kenzie.com",
    },
    {
      id: 4,
      nome: "Danrley",
      stacks: ["VideoMaker", "Effects", "Roteirista"],
      idade: 30,
      endereco: {},
      password: "889977",
      email: "danrley@kenzie.com",
    },
  ]);
  
  // Base de dados de endereços
  const enderecos = Object.freeze([
    {
      id: 1,
      userId: 2,
      endereco: {
        rua: "Avenida São Paulo",
        bairro: "Centro",
        zipCode: "45687-000",
        cidade: "São Paulo",
        estado: "São Paulo",
      },
    },
    {
      id: 2,
      userId: 1,
      endereco: {
        rua: "Rua Quitino",
        bairro: "Nações",
        zipCode: "78120-000",
        cidade: "Blumenau",
        estado: "Santa Catarina",
      },
    },
    {
      id: 3,
      userId: 4,
      endereco: {
        rua: "Rua do videomaker",
        bairro: "Hollywood",
        zipCode: "44744-000",
        cidade: "Hollywood",
        estado: "Los Angeles",
      },
    },
    {
      id: 4,
      userId: 3,
      endereco: {
        rua: "Avenida Brasil",
        bairro: "Centro",
        zipCode: "4587-000",
        cidade: "Natal",
        estado: "Rio Grande do Norte",
      },
    },
  ]);
  
  //Adicionar endereços aos usuarios pelo id
  
  function addAddresToUser() {
    let users = usuarios.map(user => {
       const { id } = user;
       const end = enderecos.find(end => {
            const { userId } = end;
            if(userId === id){
            return end
            }  
        })
        // console.log(end)
        user = {...user, endereco: end.endereco};
        return user;
    })
    return users;
  }
addAddresToUser();
  //funcao para deletar o password
  
  function deletePassword() {
  const deleted = addAddresToUser().map(user =>{
        delete user.password;
        return user
    })
    return deleted
  }
// deletePassword()
  
  //listar os usuarios sem a senha
  
  function listUsers() {
    const listedUsers = deletePassword().map(listed => {
        return listed;
    })
    return listedUsers
  }
listUsers();
  
  //listar somente nome, email e stack
  function listUserStacks() {
   const stacked =  listUsers().map(user => {
        const { email,nome,stacks } = user;
        const stackedUser = {
            nome:nome,
            email:email,
            stacks:stacks
        };
        return stackedUser
    })
    return stacked
  }
  listUserStacks();
  //deletar um usuário que tenha python na stack
  
  function deleteUser() {
    const deletePython = listUserStacks().filter(pythonUser => {
        const { stacks } = pythonUser;
        if(!stacks.includes('Python')){
           return pythonUser
        }
    })
    return deletePython
  }

  console.log(deleteUser());