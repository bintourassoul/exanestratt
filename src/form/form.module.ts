
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Form } from './form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  providers: [FormService],
  controllers: [FormController],
})
export class FormModule {}
