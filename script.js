new Vue({
    el: '#app',
    data: {
      nomePessoa: '',
      pessoas: [],
      produtos: [
        { nome: 'Pizza', valor: 42.00 },
        { nome: 'Refrigerante', valor: 8.00 },
        { nome: 'Suco', valor: 7.00 },
        { nome: 'Cerveja', valor: 8.80},
        { nome: 'Sorvete', valor: 7.20},
        { nome: 'Espresso', valor: 6.90}
      ],
      contaCalculada: false
    },
    methods: {
      adicionarPessoa() {
        if (this.nomePessoa !== '') {
          this.pessoas.push({
            nome: this.nomePessoa,
            consumos: []
          });
          this.nomePessoa = '';
        }
      },
      calcularConta() {
        this.pessoas.forEach(pessoa => {
          pessoa.total = 0;
          pessoa.consumos.forEach(produto => {
            pessoa.total += produto.valor;
          });
          pessoa.total *= 1.1; // Aplica a taxa de serviço de 10%
        });
        this.contaCalculada = true;
      }
    }
});
  
  
  




  