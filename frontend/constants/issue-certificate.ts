import { FormState } from "@/interfaces/issueCertificate";

export const DEFAULT_FORM: FormState = {
  studentAddress: "",
  studentName: "",
  courseName: "",
  universityName: "",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
};