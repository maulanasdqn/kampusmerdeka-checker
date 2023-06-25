import { TMetaResponse } from "@/utils";

export type TDocsParams = {
  type: string;
};

export type TDocsItems = {
  id: string;
  name: string;
  description: string;
  type: string;
  submission_start: string;
  submission_end: string;
  valid_from: string;
  valid_to: string;
  cycle: string;
  image_url: string;
  template_url: string;
  upload_steps: string;
  programs: Array<string>;
  permission: {
    person_readers: Array<unknown>;
    group_readers: Array<unknown>;
    programs: Array<string>;
  };
  status: string;
  document_role: string;
  updated_at: string;
  updated_by: string;
};

export type TDocsResponse = TMetaResponse<TDocsItems[]>;
