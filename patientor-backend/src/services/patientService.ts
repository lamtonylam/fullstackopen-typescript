import data from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { Patient, NonSensitivePatient, NewPatientEntry } from '../types';

const getPatients = (): Patient[] => {
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

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };

  data.push(newPatientEntry);
  return newPatientEntry;
};

export default { getPatients, getNonSensitivePatients, addPatient };
