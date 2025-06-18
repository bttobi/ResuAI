import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('resume'))
  uploadResume(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    return this.resumeService.upload(file, body);
  }
}
