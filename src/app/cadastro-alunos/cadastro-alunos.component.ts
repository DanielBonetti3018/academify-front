import { Component } from '@angular/core';
import { IListAlunos } from '../model/IListAlunos';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from '../shared/aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.css']
})
export class CadastroAlunosComponent {

  nome: string = '';
  matricula: string = '';
  nascimento: string = '';

  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'dataHoraCadastro'];
  dataSource = new MatTableDataSource<IListAlunos>([]);

  constructor(private alunoService: AlunoService, private snackBar: MatSnackBar) {}

  cadastrarAluno(): void {
    if (!this.validarDataNascimento(this.nascimento)) {
      console.error('Data de Nascimento Inválida.');
      this.mostrarSnackBar('Data de Nascimento Inválida.');
      return;
    }

    const alunoData = {
      nome: this.nome,
      matricula: this.matricula,
      nascimento: this.nascimento,
      dataHoraCadastro: new Date().toISOString()
    };
    this.alunoService.addAluno(alunoData).subscribe(
      (alunos: IListAlunos[]) => {
        this.dataSource.data = alunos;
        this.mostrarSnackBar('Aluno Cadastrado com Sucesso');
      },
      (erro) => {
        console.error(erro);
        this.mostrarSnackBar('Falha ao cadastrar o aluno');
      }
    );

    this.limparCampos();
  }

  private mostrarSnackBar(mensagem: string): void {
    this.snackBar.open(mensagem, 'OK', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  validarDataNascimento(nascimento: string): boolean {
    const dataNascimento = new Date(nascimento);

    if (!(dataNascimento instanceof Date) || isNaN(dataNascimento.getTime())) {
      return false;
    }

    const dataAtual = new Date();
    return dataNascimento <= dataAtual;
  }

  private limparCampos(): void {
    this.nome = '';
    this.matricula = '';
    this.nascimento = '';
  }
}

