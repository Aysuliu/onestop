import { NestFactory } from '@nestjs/core';
import { OnestopBatchModule } from './batch.module';

async function bootstrap() {
  const app = await NestFactory.create(OnestopBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
