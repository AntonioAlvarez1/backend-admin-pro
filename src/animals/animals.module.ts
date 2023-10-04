import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimalsService, SpeciesService } from './services';
import { AnimalsController, SpeciesController } from './controller';
import { Animal, Species, Biome, MedicalRecord } from './entities';
import { BiomeController } from './controller/biome.controller';
import { BiomeService } from './services/biome.service';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, Species, Biome, MedicalRecord])],
  controllers: [AnimalsController, SpeciesController, BiomeController],
  providers: [AnimalsService, SpeciesService, BiomeService],
})
export class AnimalsModule {}
