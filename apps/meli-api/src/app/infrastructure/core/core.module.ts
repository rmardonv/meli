import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ResponseInterceptor } from "./interceptors/response.interceptor";
import { HttpModule } from '@nestjs/axios';
@Module({
    imports: [HttpModule],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseInterceptor
        }
    ],
    exports: [HttpModule]
})

export class CoreModule { }