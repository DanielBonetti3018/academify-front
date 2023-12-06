import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  {path:'home', component:HomeComponent},
  {path:'listar', component:AlunosComponent},
  {path:'editar', component:EditarAlunoComponent},
  {path:'cadastrar', component:CadastroAlunosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
