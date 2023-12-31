import { Body, Controller, Post } from '@nestjs/common';

import { DietService } from '../services';
import { MyResponse } from 'src/core';
import { Diet } from '../entities';
import { CreateDietDto } from '../dto';
import { Auth } from 'src/auth';

@Controller('diet')
@Auth()
export class DietController {
  constructor(private readonly dietService: DietService) {}

  @Post()
  create(@Body() createDietDto: CreateDietDto): Promise<MyResponse<Diet>> {
    return this.dietService.create(createDietDto);
  }
}
