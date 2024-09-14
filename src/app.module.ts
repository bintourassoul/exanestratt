import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Form } from './form/form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module';


@Module({
  imports: [
    
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'bd-portoflio',
        entities: [Form],
        autoLoadEntities: true,
        synchronize: true, 
      }),
      FormModule,
   
    ],
  })



export class AppModule {}


  
  

