
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from '../form/form.entity';
import { CreateFormDto } from './Dto/create-form.dto';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const form = this.formRepository.create(createFormDto);
    return this.formRepository.save(form as Form);
  }

  // Ajoutez d'autres méthodes si nécessaire
}

