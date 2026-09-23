import { TApprovedStatus } from "./addminAccess/teacher.approved.type";

export interface ITeacherQuery {
  search?: string | undefined;
  status?: TApprovedStatus | undefined;
  isActive?: boolean | undefined;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface IStudentQuery {
  search?: string;
  status?: TApprovedStatus;
  batch?: number;
  semester?: number;
  isActive?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}
