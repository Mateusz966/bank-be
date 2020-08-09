import { Module } from '@nestjs/common';
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientsService],
  exports: [ClientsService]
})
export class ClientsModule {}
