import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  msg: string = ""
  produtos: any;

  constructor(private serviceProduto: ProdutoService) {
    this.serviceProduto.getAll().subscribe(mensagem => this.produtos = mensagem)
  }

  gravar(dados: any) {
    this.serviceProduto.gravar(dados).subscribe(mensagem => this.msg = "Produto cadastrado com sucesso")
  }

  limparMsg() {
    this.msg = "";
  }

  ngOnInit(): void {
  }

   excluir(id:any){
     this.serviceProduto.excluir(id).subscribe(x => {window.location.reload()})
  }

}
