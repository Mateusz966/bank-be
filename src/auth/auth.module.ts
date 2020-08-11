import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../clients/client.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwt-constants';
import { JwtStrategy } from './jwt-strategy';
import { LocalStrategy } from './local-strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ClientsModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2d' },
    }),
    PassportModule,
    TypeOrmModule.forFeature([Client]),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
