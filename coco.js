

let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log('Exemplo de Array:', frutas);


let produto = {
  nome: 'Notebook',
  preco: 2500,
  emEstoque: true
};
console.log('Exemplo de Objeto:', produto);



let inventario = [
  { nome: 'Teclado', preco: 100, emEstoque: true },
  { nome: 'Mouse', preco: 50, emEstoque: false },
  { nome: 'Monitor', preco: 600, emEstoque: true }
];


console.log('Inventário Inicial:', inventario);


inventario.push({ nome: 'Cadeira Gamer', preco: 1200, emEstoque: true });
console.log('Após adicionar Cadeira Gamer:', inventario);


inventario.pop();
console.log('Após remover o último produto:', inventario);


inventario[0].preco = 120;
console.log('Após modificar o preço do Teclado:', inventario);


inventario[2].emEstoque = false;
console.log('Após marcar o Monitor como fora de estoque:', inventario);


console.log('Produtos em estoque:');
for (let i = 0; i < inventario.length; i++) {
  if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
  }
}


let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log('Produtos em estoque (filtrados):', produtosEmEstoque);
