import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
    { path: 'items', loadChildren: () => import('./pages/result/result.module').then(m => m.ResultModule) },
    { path: 'items/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
