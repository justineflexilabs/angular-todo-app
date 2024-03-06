import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NoAuthGuard } from '@app/core/guards/no-auth.guard';

@NgModule({
  imports: [HttpClientModule],
  providers: [NoAuthGuard],
})
export class CoreModule {
  constructor() {}
}
