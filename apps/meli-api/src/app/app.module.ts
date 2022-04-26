import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ControllersModule } from './infrastructure/controller/controllers.module';

@Module({
  imports: [
    ControllersModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ]

})
export class AppModule { }
