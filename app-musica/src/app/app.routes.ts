import { Routes } from '@angular/router';

import { MusicaComponent } from './features/musicas/musicas';

export const routes: Routes = [
    { path: '', redirectTo: 'musicas', pathMatch: 'full' },
    {path:'musicas', component:MusicaComponent}
];
