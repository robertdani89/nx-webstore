import { Module } from '@nestjs/common';
import { DataAccessWebstoreService } from './data-access-webstore.service';

@Module({
  providers: [DataAccessWebstoreService],
  exports: [DataAccessWebstoreService],
})
export class DataAccessWebstoreModule {}
