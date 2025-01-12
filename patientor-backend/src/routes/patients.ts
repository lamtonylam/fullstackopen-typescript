import express from 'express';
import { Response } from 'express';
import { Patient } from '../types';

import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res: Response<Patient[]>) => {
  res.send(patientService.getNonSensitivePatients());
});

export default router;
