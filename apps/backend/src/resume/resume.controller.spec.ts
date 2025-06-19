import { Test, TestingModule } from '@nestjs/testing';
import { ResumeController } from './resume.controller';

describe('ResumeController', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeController],
    }).compile();

    controller = module.get<ResumeController>(ResumeController);
  });

  describe('getResumes', () => {
    it('should return resume list', () => {
      expect(controller.getResumes()).toBe("Fetching list of resumes");
    });
  });

  describe('uploadResume', () => {
    it('should return uploaded resume data', () => {
      const mockBody = { name: "John Doe", job_exp: "Software Engineer" };
      expect(controller.uploadResume(mockBody)).toBe(
        `Uploading resume with data: ${JSON.stringify(mockBody)}`
      );
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
