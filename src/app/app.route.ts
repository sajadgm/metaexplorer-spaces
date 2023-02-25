import { Routes } from '@angular/router';

export const appMainRoutes: Routes = [
  {
    path: 'e',
    loadChildren: async () => {
      const m = await import('@main/shell/main.routes');
      return m.MAIN_ROUTES;
    },
  },
  {
    path: '',
    redirectTo: 'e',
    pathMatch: 'full',
  },
];
