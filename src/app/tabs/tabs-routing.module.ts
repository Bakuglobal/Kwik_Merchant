import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthService } from '../Auth/auth.service' ;

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule),
              canActivate :[AuthService] 
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule), canActivate :[AuthService]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      { 
        path: 'profile', 
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule) , canActivate :[AuthService]
      },
      {
         path: 'notifications', 
         loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule), canActivate :[AuthService]
      },
      { 
        path: 'login', 
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      { 
        path: 'signup', 
        loadChildren: () => import('../signup/signup.module').then(m => m.SignupPageModule)
      },
      { path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule), canActivate :[AuthService] },
      {
        path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab3',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
