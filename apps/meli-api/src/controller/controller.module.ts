import { Module } from '@nestjs/common';
import { CoreModule } from '../app/infrastructure/core/core.module';

@Module({
    imports: [CoreModule]
})
export class ControllerModule { }
