import { Test, TestingModule } from '@nestjs/testing';
import { FeatureWebstoreService } from './feature-webstore.service';

describe('FeatureWebstoreService', () => {
  let service: FeatureWebstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeatureWebstoreService],
    }).compile();

    service = module.get<FeatureWebstoreService>(FeatureWebstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
