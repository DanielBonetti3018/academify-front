import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
