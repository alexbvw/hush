import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component'; // Assuming TabsComponent is your component with the ion-tabs
import { BaseComponent } from 'src/app/element/base/base.component';
import { OrderComponent } from 'src/app/element/order/order.component';
import { StrainComponent } from 'src/app/element/strain/strain.component';
import { DeliveryComponent } from 'src/app/element/delivery/delivery.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      { path: 'base', component: BaseComponent },
      { path: 'order', component: OrderComponent },
      { path: 'strain', component: StrainComponent },
      { path: 'delivery', component: DeliveryComponent },
      { path: '', redirectTo: '/tabs/base', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/base', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}