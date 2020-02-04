import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthService } from '../Auth/auth.service' ;
import { LogsService } from '../Auth/logs.service';

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
         // tslint:disable-next-line: max-line-length
         loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule), canActivate :[AuthService]
      },
      { 
        path: 'login', 
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule), canActivate: [LogsService]
      },
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then(m => m.SignupPageModule)
      },
      // tslint:disable-next-line: max-line-length
      { path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule), canActivate : [AuthService] },
      {
        // tslint:disable-next-line: max-line-length
        path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule), canActivate: [AuthService]
      },
      {
        path: 'orders', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule), canActivate :[AuthService]
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'order-stats', loadChildren: () => import('../order-stats/order-stats.module').then(m => m.OrderStatsPageModule), canActivate :[AuthService]
      },
      {
        // tslint:disable-next-line: whitespace
        path: 'sales', loadChildren: () => import('../sales/sales.module').then(m => m.SalesPageModule), canActivate :[AuthService]
      },
      {
        path: 'stock', loadChildren: () => import('../stock/stock.module').then(m => m.StockPageModule), canActivate :[AuthService]
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersPageModule), canActivate: [AuthService]
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'profilemodal', loadChildren: () => import('../profilemodal/profilemodal.module').then(m => m.ProfilemodalPageModule), 
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'productmodal', loadChildren: () => import('../productmodal/productmodal.module').then(m => m.ProductmodalPageModule), canActivate: [AuthService]
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'category' , loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule), canActivate: [AuthService]
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'remove', loadChildren: () => import('../remove-category/remove-category.module').then(m => m.RemoveCategoryPageModule), canActivate: [AuthService]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
