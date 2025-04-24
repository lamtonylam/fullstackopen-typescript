import express from 'express';
import { Response, Request } from 'express';
import { NonSensitivePatient } from '../types';
import { NewPatientEntry, PatientEntry } from '../types';
import patientService from '../services/patientService';

import { newPatientParser } from '../middleware/newPatientParser';
import { errorMiddleware } from '../middleware/errorParser';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post(
  '/',
  newPatientParser,
  (
    req: Request<unknown, unknown, NewPatientEntry>,
    res: Response<PatientEntry>,
  ) => {
    const addedEntry = patientService.addPatient(req.body);
    res.json(addedEntry);
  },
);

router.use(errorMiddleware);

export default router;
