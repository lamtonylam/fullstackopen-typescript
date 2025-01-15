import express from 'express';
import { Response } from 'express';
import { Patient } from '../types';

import toNewPatientEntry from '../utils';

import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res: Response<Patient[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
