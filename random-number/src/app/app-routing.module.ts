import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: { animation: 'main' } }, //да, путь "" - считается тут нормой, он как "/"
  { path: 'check', component: RandomComponent, data: { animation: 'check' } },
  { path: '**', redirectTo: '/check' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
