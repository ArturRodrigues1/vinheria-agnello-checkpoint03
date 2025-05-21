//  função objeto Vinho
function Vinho(nome, tipo, safra, estoque) {
  this.nome = nome;
  this.tipo = tipo;
  this.safra = safra;
  this.estoque = estoque;
}

// Cadastro de vinhos
const vinhos = [
  new Vinho("Don Melchor", "Tinto", 2014, 3),
  new Vinho("Pêra-Manca", "Branco", 2021, 6),
  new Vinho("Gaja Barbaresco", "Tinto", 2017, 2),
  new Vinho("Whispering Angel", "Rosé", 2020, 10),
  new Vinho("Dom Pérignon", "Espumante", 2008, 1)
];

// Função para adicionar um novo vinho
function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push(new Vinho(nome, tipo, safra, estoque));
}

// Listar todos os vinhos com forEach
function listarVinhos() {
  console.log("LISTA COMPLETA DE VINHOS:");
  vinhos.forEach((v, i) => {
    console.log(`--- Vinho ${i + 1} ---`);
    console.log(`Nome: ${v.nome}`);
    console.log(`Tipo: ${v.tipo}`);
    console.log(`Safra: ${v.safra}`);
    console.log(`Estoque: ${v.estoque}`);
  });
}

// Mostrar vinhos com estoque baixo usando filter
function vinhosComEstoqueBaixo() {
  const baixos = vinhos.filter(v => v.estoque < 5);
  console.log("VINHOS COM ESTOQUE BAIXO (<5):");
  baixos.forEach(v => console.log(`-> ${v.nome}`));
}

// Calcular estoque total com reduce
function estoqueTotal() {
  const total = vinhos.reduce((soma, v) => soma + v.estoque, 0);
  console.log(`ESTOQUE TOTAL: ${total}`);
}

//  nomes dos vinhos em caixa alta com map
function exibirNomesCaixaAlta() {
  const nomesCaixaAlta = vinhos.map(v => v.nome.toUpperCase());
  console.log("NOMES EM CAIXA ALTA:");
  nomesCaixaAlta.forEach(nome => console.log("-> " + nome));
}

// Exibir todas as informações
function exibirResumo() {
  listarVinhos();
  console.log("");
  vinhosComEstoqueBaixo();
  console.log("");
  estoqueTotal();
  console.log("");
  exibirNomesCaixaAlta();
}

// Executar resumo
exibirResumo();

// Alert
alert("Resumo exibido no console. Inspecione para visualizar os dados.");