import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateBiomeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  image_url: string;
}
