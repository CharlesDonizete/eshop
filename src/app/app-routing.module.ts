import { ManagerGuard } from './guards/manager.guard';
import { AuthorizedGuard } from './guards/authorized.guard';
import { HomePageModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/account/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: '',
    component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
