interface Experience {
    year: number;
    description: string;
  }
  
export interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    experience: Experience[];
    education: string[];
  }