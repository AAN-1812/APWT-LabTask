import { Injectable, Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => 'ENROLLMENT_SERVICE'))
    private enrollmentService: any,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent',
      student: studentName,
      notification: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: 'Enrollment checked and notification sent',
      student: studentName,
      courseId,
      enrollments,
    };
  }
}