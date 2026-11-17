import { Module, forwardRef } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { NotificationController } from './notification.controller.js';
import { EnrollmentModule } from '../enrollment/enrollment.module.js';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Module({
  imports: [forwardRef(() => EnrollmentModule)],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    {
      provide: 'ENROLLMENT_SERVICE',
      useExisting: EnrollmentService,
    },
  ],
  exports: [NotificationService],
})
export class NotificationModule {}