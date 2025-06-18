"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

const ResumeForm = () => {
  const { mutate } = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await api.post("/resume/upload", formData);
      return response.data;
    },
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (e: React.FormEvent) => {
    const form = e.currentTarget as HTMLFormElement;
    e.preventDefault();
    const formData = new FormData(form);
    mutate(formData);
  };

  return (
    <form
      onSubmit={onSubmit}
      encType="multipart/form-data"
      className="w-64 flex flex-col justify-center items-center self-center"
    >
      <Input type="text" placeholder="name" name="name" />
      <Input type="text" placeholder="job experience" name="job_exp" />
      <Input type="text" placeholder="education" name="education" />
      <Input type="text" placeholder="skills" name="skills" />
      <Input type="text" placeholder="contact info" name="contact_info" />
      <Input
        type="file"
        placeholder="resume in pdf"
        name="resume"
        accept="application/pdf"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ResumeForm;
