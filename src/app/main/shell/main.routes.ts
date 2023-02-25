import { Routes } from '@angular/router';
import { MainShellComponent } from './main.shell/main.shell.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainShellComponent,
    // canActivate: [AuthGuard],
    title: 'متا اکسپلور',
    children: [
      // {
      //   path:'e'
      //   loadChildren: async () =>{
      //     const m = await import()
      //   }
      // }
    ],
  },
];
