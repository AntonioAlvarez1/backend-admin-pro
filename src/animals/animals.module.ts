import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnimalsService } from './services';
import { AnimalsController } from './controller/animals.controller';
import { Animal } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
