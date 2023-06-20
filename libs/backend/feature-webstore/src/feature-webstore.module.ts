import { Module } from '@nestjs/common';
import { FeatureWebstoreService } from './feature-webstore.service';

@Module({
  providers: [FeatureWebstoreService],
  exports: [FeatureWebstoreService],
})
export class FeatureWebstoreModule {}
