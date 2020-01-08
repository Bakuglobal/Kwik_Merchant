import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'chatmodal', loadChildren: './chatmodal/chatmodal.module#ChatmodalPageModule' },
  { path: 'newchatmodal', loadChildren: './newchatmodal/newchatmodal.module#NewchatmodalPageModule' },
  { path: 'sokomodal', loadChildren: './sokomodal/sokomodal.module#SokomodalPageModule' },
  { path: 'comments', loadChildren: './comments/comments.module#CommentsPageModule' },
  { path: 'profilemodal', loadChildren: './profilemodal/profilemodal.module#ProfilemodalPageModule' },
  { path: 'infomodal', loadChildren: './infomodal/infomodal.module#InfomodalPageModule' },
  { path: 'postmodal', loadChildren: './postmodal/postmodal.module#PostmodalPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
