export class Trainer {
  id: number = null!;
  name: string= null!;
  skills: string[]= null!;
  trainingType: string= null!;
  certification?: Certification[]= null!;
  imageUrl: string = null!;
}

export class Certification {
  name: string= null!;
  issuingOrganization: string= null!;
  dateIssued: Date= null!;
}