import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from '@modules/todo/pages/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
];

export const todoRoutes = RouterModule.forChild(routes);
