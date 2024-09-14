
import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from './form.entity';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() createFormDto: CreateFormDto): Promise<Form> {
    return this.formService.create(createFormDto);
  }
}
