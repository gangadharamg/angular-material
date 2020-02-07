import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: AddComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'map', component: MapComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
