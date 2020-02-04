import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersPageModule' },
  { path: 'productmodal', loadChildren: './productmodal/productmodal.module#ProductmodalPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'remove-category', loadChildren: './remove-category/remove-category.module#RemoveCategoryPageModule' },
  { path: 'order-preview', loadChildren: './order-preview/order-preview.module#OrderPreviewPageModule' },
  { path: 'view-notification', loadChildren: './view-notification/view-notification.module#ViewNotificationPageModule' },

  // { path: 'chatmodal', loadChildren: './chatmodal/chatmodal.module#ChatmodalPageModule' },
  // { path: 'newchatmodal', loadChildren: './newchatmodal/newchatmodal.module#NewchatmodalPageModule' },
  // { path: 'sokomodal', loadChildren: './sokomodal/sokomodal.module#SokomodalPageModule' },
  // { path: 'comments', loadChildren: './comments/comments.module#CommentsPageModule' },
  // { path: 'profilemodal', loadChildren: './profilemodal/profilemodal.module#ProfilemodalPageModule' },
  // { path: 'infomodal', loadChildren: './infomodal/infomodal.module#InfomodalPageModule' },
  // { path: 'postmodal', loadChildren: './postmodal/postmodal.module#PostmodalPageModule' },
  // { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },
  // { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  // { path: 'stock', loadChildren: './stock/stock.module#StockPageModule' },
  // { path: 'order-stats', loadChildren: './order-stats/order-stats.module#OrderStatsPageModule' },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
