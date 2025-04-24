import { z } from 'zod';
import { newPatientSchema } from './utils';

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export interface PatientEntry extends NewPatientEntry {
  id: string;
}

export type NonSensitivePatient = Omit<PatientEntry, 'ssn'>;

export type NewPatientEntry = z.infer<typeof newPatientSchema>;
