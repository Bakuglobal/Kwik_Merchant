import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersPageModule' },
  { path: 'productmodal', loadChildren: './productmodal/productmodal.module#ProductmodalPageModule' },
  { path: 'order-preview', loadChildren: './order-preview/order-preview.module#OrderPreviewPageModule' },
  { path: 'view-notification', loadChildren: './view-notification/view-notification.module#ViewNotificationPageModule' },
  { path: 'image-display', loadChildren: './image-display/image-display.module#ImageDisplayPageModule' },
  { path: 'notification-model', loadChildren: './notification-model/notification-model.module#NotificationModelPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
