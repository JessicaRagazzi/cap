import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  salvar(dados: any) {
    let url = 'http://localhost:3000/usuarios';
    return this.http.post(url, dados);

  }

  getAll() {
    return this.http.get('http://localhost:3000/usuarios');
  }

  save(dados: any) {

  }
}
