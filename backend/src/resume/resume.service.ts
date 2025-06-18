import { Injectable } from '@nestjs/common';

@Injectable()
export class ResumeService {
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ): { statusCode: number; message: string } {
    return {
      statusCode: 200,
      message: 'Resume uploaded successfully!',
    };
  }
}
