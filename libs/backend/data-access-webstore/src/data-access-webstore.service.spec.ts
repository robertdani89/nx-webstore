import { Test, TestingModule } from '@nestjs/testing';
import { DataAccessWebstoreService } from './data-access-webstore.service';

describe('DataAccessWebstoreService', () => {
  let service: DataAccessWebstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataAccessWebstoreService],
    }).compile();

    service = module.get<DataAccessWebstoreService>(DataAccessWebstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
