import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  mensagemSucesso : string | undefined;  
  mensagemErro : string | undefined;  

  errosNome = [];
  errosPreco = [];
  errosQuantidade = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

cadastrarProduto(formCadastro: { form: { value: any; reset: () => void; }; }) : void{

  this.mensagemSucesso = "";
  this.mensagemErro = "";


  this.errosNome =[];
  this.errosPreco =[];
  this.errosQuantidade =[];

  this.httpClient.post('http://localhost:12676/api/produtos', formCadastro.form.value,
  { responseType  : 'text'}).subscribe(
    success => {
      this.mensagemSucesso = success;

      formCadastro.form.reset();
    },
    e =>{
      var response = JSON.parse(e.error);

      if(response.status == 400){

        this.errosNome = response.errors.Nome;
        this.errosPreco = response.errors.Preco;
        this.errosQuantidade = response.errors.Quantidade;        
      }
      this.mensagemErro = "Ocorreram erros, por favor tente novamente"
    }
  );
}

fecharMensagemSucesso() : void{
  this.mensagemSucesso = ""
}

fecharMensagemErro() : void{
  this.mensagemErro = ""
}

}
