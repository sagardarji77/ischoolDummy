import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'explore-schools', pathMatch: 'full' },
  {
    path: 'explore-schools',
    loadChildren: () =>
      import('./schools/schools-routing.module').then(
        (m) => m.SchoolsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
