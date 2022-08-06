export type CleanerStatus = 'default' | 'favorite' | 'blocked';

export interface CleanerApiModel {
  id: number,
  first_name: string,
  last_name: string,
  cleanings_count: number,
  status: CleanerStatus,
}

export interface CleanerModel {
  id: number,
  firstName: string,
  lastName: string,
  cleaningsCount: number,
  status: CleanerStatus,
}

export interface CleanerUpdateRequest {
  status: CleanerStatus,
}
