import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('LocalStrategy.validate in');

    // const user = await this.authService.validateUser(username, password);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return true;
  }
}
