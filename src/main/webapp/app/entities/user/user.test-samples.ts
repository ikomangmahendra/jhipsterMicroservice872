import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 702,
  login: '9W',
};

export const sampleWithPartialData: IUser = {
  id: 17457,
  login: 'n5.wT7',
};

export const sampleWithFullData: IUser = {
  id: 31635,
  login: 'ej',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
