import { EditaprodutoComponent } from './edita-produto/edita-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path:'produtos/:idproduto',
    component: EditaprodutoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastroproduto',
    component: CadastroProdutoComponent,
  },

  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastroUsuario',
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
