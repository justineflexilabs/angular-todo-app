import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { todoRoutes } from '@modules/todo/todo.routing';
import { TodoComponent } from '@modules/todo/pages/todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [todoRoutes, SharedModule],
})
export class TodoModule {}
