import { Test } from '@nestjs/testing';
import { UUID_V4_REGEX } from '@src/__tests__/consts/uuid-regex.const';
import { IDGenerator } from '@src/application/services/interfaces/id-generator.service';
import { UUIDGeneratorService } from '@src/infra/services/uuid-generator/uuid-generator.service';

describe('UUID Generator - Service', () => {
  let service: IDGenerator;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: IDGenerator,
          useClass: UUIDGeneratorService,
        },
      ],
    }).compile();

    service = module.get<UUIDGeneratorService>(IDGenerator);
  });

  it('should generate an uuid', () => {
    const uuid = service.execute();

    expect(uuid).toBeDefined();
    expect(typeof uuid).toBe('string');
    expect(uuid).toMatch(UUID_V4_REGEX);
  });
});
