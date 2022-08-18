export interface JobResumeSendRequest {
  name: string,
  email: null|string,
  phone: string,
  note: string,
  resume: File,
}
