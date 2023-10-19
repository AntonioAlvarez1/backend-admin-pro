import { Body, Controller, Post } from '@nestjs/common';

import { BiomeService } from '../services/biome.service';
import { CreateBiomeDto } from '../dto';
import { MyResponse } from 'src/core';
import { Biome } from '../entities';
import { Auth } from 'src/auth';

@Controller('biome')
@Auth()
export class BiomeController {
  constructor(private readonly biomeService: BiomeService) {}

  @Post()
  create(@Body() createBiomeDtio: CreateBiomeDto): Promise<MyResponse<Biome>> {
    return this.biomeService.create(createBiomeDtio);
  }
}
