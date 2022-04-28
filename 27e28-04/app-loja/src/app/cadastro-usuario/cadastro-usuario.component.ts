import { CadastroUsuarioService } from './../cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  constructor(private serviceCadastroUsuario: CadastroUsuarioService) { }

  msg: string = " "

  salvarUsuario(data: any) {
    data.perfil = "USUARIO"
    this.serviceCadastroUsuario.salvar(data).subscribe(message => this.msg = "Usuário cadastrado com sucesso")
  }
}
