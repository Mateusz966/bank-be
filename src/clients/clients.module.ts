import { Module } from '@nestjs/common';
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Client])]
})
export class ClientsModule {}
