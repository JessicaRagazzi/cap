import { CadastroUsuarioService } from './../cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceCadastroUsuario: CadastroUsuarioService) { }

  usuarios: any = {}

  usuarioConectado = {
    id: 0,
    nome: "",
    email: "",
    senha: "",
    perfil: ""
  }

  fazerLogin(dados: any) {
    this.serviceCadastroUsuario.getAll().subscribe(user => {
      this.usuarios = user
      this.verificarLogin(dados.email, dados.senha, this.usuarios)
    })

  }

  verificarLogin(email: string, senha: string, dados: any) {
    localStorage.removeItem("userConectado")
    for (let i = 0; i < dados.length; i++){
      if (email == dados[i].email && senha == dados[i].senha) {
        this.usuarioConectado.id = dados[i].id
        this.usuarioConectado.nome = dados[i].nome
        this.usuarioConectado.email = dados[i].email
        this.usuarioConectado.senha = dados[i].senha
        this.usuarioConectado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()

      }
    }
    window.location.reload()
  }

  //simular authguard
  gravarDadosLocalStorage() {
    localStorage.setItem("userConectado", JSON.stringify(this.usuarioConectado))
  }

  ngOnInit(): void {
  }

}
