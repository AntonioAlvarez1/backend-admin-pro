import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimalsService, SpeciesService } from './services';
import { AnimalsController, SpeciesController } from './controller';
import { Animal, Species } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Animal, Species])],
  controllers: [AnimalsController, SpeciesController],
  providers: [AnimalsService, SpeciesService],
})
export class AnimalsModule {}
