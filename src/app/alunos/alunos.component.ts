import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IListAlunos } from '../model/IListAlunos';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlunoService } from '../shared/aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'dataHoraCadastro', 'acoes'];
  dataSource = new MatTableDataSource<IListAlunos>([]);

  @ViewChild('input', { static: true }) input!: HTMLInputElement;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private alunoService: AlunoService, private snackBar: MatSnackBar, private router: Router) {}

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  deletarAluno(aluno: IListAlunos): void {
    console.log("Excluir Aluno:", aluno);

    this.alunoService.deleteAluno(aluno).subscribe(
      (response: any) => {
        console.log("Resposta:", response);

        if (response) {
          this.atualizarLista();
          console.log("Lista Atualizada");
          this.mostarSnackBar('Aluno excluído!');
        } else {
          console.error("Erro ao excluir aluno.", response);
          this.mostarSnackBar('Não foi possível excluir o aluno');
        }
      },
      (erro) => {
        console.error("Erro HTTP:", erro);
        this.mostarSnackBar('Não foi possível excluir o aluno');
      }
    );
  }

  editarAluno(id: number): void {
    console.log("Editar aluno");
    this.router.navigate(['/edit-alunos', id]);
  }

  private atualizarLista(): void {
    this.alunoService.getAlunos().subscribe(
      (alunos: IListAlunos[]) => {
        this.dataSource.data = alunos;
      },
      (erro) => {
        console.error("Erro ao buscar alunos", erro);
      }
    );
  }

  private mostarSnackBar(mensagem: string): void {
    this.snackBar.open(mensagem, 'OK', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
