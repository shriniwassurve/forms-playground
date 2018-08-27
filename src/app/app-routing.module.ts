import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {ModelDrivenComponent} from './model-driven/model-driven.component';
import {SemiModelDrivenComponent} from './semi-model-driven/semi-model-driven.component';

const routes: Routes = [
  { path: '', component: TemplateDrivenComponent },
  { path: 'templateDriven', component: TemplateDrivenComponent },
  { path: 'modelDriven', component: ModelDrivenComponent },
  { path: 'semiModelDriven', component: SemiModelDrivenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
