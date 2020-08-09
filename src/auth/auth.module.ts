import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../clients/client.entity';

@Module({
  imports: [ClientsModule,
    TypeOrmModule.forFeature([Client]),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
