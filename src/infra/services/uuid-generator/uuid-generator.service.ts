import { IDGenerator } from '@src/application/services/interfaces/id-generator.service';
import crypto from 'crypto';

export class UUIDGeneratorService implements IDGenerator {
  execute(): string {
    const uuid = crypto.randomUUID();

    return uuid;
  }
}
