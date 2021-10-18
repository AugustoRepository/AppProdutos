import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes : Routes = [
{path : 'cadastro-produtos', component : CadastrarProdutosComponent},
{path : 'consulta-produtos', component : ConsultaProdutosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutosComponent,
    ConsultaProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
