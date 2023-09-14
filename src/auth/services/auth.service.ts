import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { RegisterDto } from '../dto';
import { User } from 'src/users/';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(registerDto: RegisterDto) {
    const { password, ...userData } = registerDto;
    const userVerification = await this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (userVerification)
      throw new BadRequestException('El usuario con este correo ya existe');
    try {
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);
      delete user.password;
      return user;
    } catch (error) {
      console.log(error);
      this.handleDBErrors(error);
    }
  }
  private handleDBErrors(error: any): never {
    if (error.code == '23502') {
      throw new BadRequestException(error.detail);
    }
    throw new BadRequestException('revisar los logs del servidor');
  }
}
