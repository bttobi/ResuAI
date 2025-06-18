import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('resume')
export class ResumeController {
  constructor(private resumeController: ResumeController) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('resume'))
  uploadResume() {
    return this.resumeController.uploadResume();
  }
}
