export class Produto {

  private id: number
  private produto: string
  private preco: number

  constructor(idProduto: number, nomeProduto: string, precoProduto: number) {
    this.id = idProduto
    this.produto = nomeProduto
    this.preco = precoProduto
  }

}
