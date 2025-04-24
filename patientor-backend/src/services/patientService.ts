import data from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { PatientEntry, NonSensitivePatient, NewPatientEntry } from '../types';

const getPatients = (): PatientEntry[] => {
  return data;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  // mapping so that ssn of patient is not returned
  return data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };

  data.push(newPatientEntry);
  return newPatientEntry;
};

export default { getPatients, getNonSensitivePatients, addPatient };
