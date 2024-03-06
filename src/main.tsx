import React from 'react'
import ReactDOM from 'react-dom/client'

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: '',
  name: 'Jan',
  lastName: 'Kowalski',
  position: 'Web Developer',
  experience: [
  {
    year: 2020,
    description: 'Google'
  },
  {
    year: 2022,
    description: 'Facebook'
  }
],
  education: ['Oxford'],
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>{cvData.education}</h1>
  </React.StrictMode>,
)
