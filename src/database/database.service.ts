
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';

export const databaseProviders = [
    TypeOrmModule.forRootAsync( {
        imports: [ ConfigModule ],
        inject: [ ConfigService ],
        async useFactory( config: ConfigService ) {
            return {
                ssl: false,
                type: 'postgres' as 'postgres',
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                database: config.get(Configuration.DATABASE),
                port: 5444,

                entities: [  __dirname + '/../**/*.entity.js'],
                migrations: [  __dirname + '/migrations/*{.js, .ts}'],

            } as ConnectionOptions;
        }
    }),
]