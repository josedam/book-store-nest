import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService()
        },
    ],
    exports: [
        ConfigService,
    ]
})
export class ConfigModule {
 
}

/*
  // Es otra forma de definir los "providers"
    {
        provide: ConfigService,
        useValue: new ConfigService()
    }
*/
