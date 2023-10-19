import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimalsService, SpeciesService } from './services';
import { AnimalsController, SpeciesController } from './controller';
import { Animal, Species, Biome, Diet } from './entities';
import { BiomeController } from './controller/biome.controller';
import { BiomeService } from './services/biome.service';
import { DietService } from './services/diet.service';
import { DietController } from './controller/diet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, Species, Biome, Diet])],
  controllers: [
    AnimalsController,
    SpeciesController,
    BiomeController,
    DietController,
  ],
  providers: [AnimalsService, SpeciesService, BiomeService, DietService],
})
export class AnimalsModule {}
