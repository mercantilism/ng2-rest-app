import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { FeaturedItemComponent } from './items/featured-item/featured-item.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { WidgetsRealComponent } from './widgets-real/widgets-real.component';


const routes: Routes = [
  {path: '',      redirectTo: '/widgets-real', pathMatch: 'full' },
  {path: 'items', component: ItemsComponent, children: [
    {path: 'featured/:id', component: FeaturedItemComponent}
  ]},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'structural-dir', component: StructuralDirComponent},
  {path: 'widgets-real', component: WidgetsRealComponent},
  {path: '**',     redirectTo: '/widgets-real', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
