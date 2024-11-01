import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '28fe6e77-1136-4cc7-b84f-0bda77ca2241',
};

export const sampleWithPartialData: IAuthority = {
  name: '8bc9d290-a79c-47c3-a81e-d5f0b235f308',
};

export const sampleWithFullData: IAuthority = {
  name: 'b701a127-279e-48c8-8b2d-646091483690',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
