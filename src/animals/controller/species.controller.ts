import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { SpeciesService } from '../services';
import { CreateSpeciesDto } from '../dto/create-species.dto';
import { MyResponse } from 'src/core';
import { Species } from '../entities';
import { Auth } from 'src/auth';

@Controller('species')
@Auth()
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Post()
  Create(
    @Body() createSpeciesDto: CreateSpeciesDto,
  ): Promise<MyResponse<Species>> {
    return this.speciesService.create(createSpeciesDto);
  }
  @Get(':species_id')
  getSpecies(
    @Param('species_id', ParseUUIDPipe) species_id: string,
  ): Promise<MyResponse<Species>> {
    return this.speciesService.getSpecies(species_id);
  }
}
