import { Test, TestingModule } from '@nestjs/testing';
import { ProductAdapter } from './product.adapter';

describe('ProductService', () => {
  let service: ProductAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAdapter],
    }).compile();

    service = module.get<ProductAdapter>(ProductAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
