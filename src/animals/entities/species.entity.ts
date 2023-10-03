import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Animal } from './animal.entity';
import { Biome } from './biome';

@Entity('species')
export class Species {
  @PrimaryGeneratedColumn('uuid')
  species_id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  scientific_name: string;

  @OneToMany(() => Animal, (animal) => animal.species)
  animals: Animal[];

  @ManyToOne(() => Biome, (biome) => biome.species)
  biome: Biome;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  update_at: Date;
}