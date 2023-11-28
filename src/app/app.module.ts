import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TopoComponent } from './topo/topo.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TopoComponent,
    AlunosComponent,
    CadastroAlunosComponent,
    EditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
