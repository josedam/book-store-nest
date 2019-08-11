import * as fs from 'fs';
import { parse } from 'dotenv';


export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    // Configuracion para Desarrollo

    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../.env';
      const existFilePath = fs.existsSync(envFilePath);

      if (!existFilePath) {
        console.log('no existe archivo de configuracion (.env)' + envFilePath);
        process.exit(0);

      } else {
        this.envConfig = parse(fs.readFileSync(envFilePath));
      }

    // configuracion para PRODUCCION

    } else {
        this.envConfig = {
            PORT: process.env.PORT,
        };
    }
  }

  get( key: string ): string {
      return this.envConfig[ key ];
  }
}
