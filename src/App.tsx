import { Header } from "./components/Header/Header";
import { Personal } from "./components/Personal/Personal";
import { CVData } from "./types/types";

import './app.scss';
  
  const cvData: CVData = {
    photo: 'https://placehold.co/400x400?text=JK',
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

export const App = () => {
    return (
        <div className="App">
            <main className='cv-main'>
                <Header name={cvData.name} lastName={cvData.lastName}/>
                <Personal name={cvData.name} lastName={cvData.lastName} photo={cvData.photo} position={cvData.position}/>
                <section className='cv-details'>
                    <h2>Experience</h2>
                    <ul>
                    {cvData.experience.map(experience => (
                        <li key={experience.year}>
                        <strong>{experience.year}</strong> - {experience.description}
                        </li>
                    ))}
                    </ul>
                    <h2>Education</h2>
                    <ul>
                    {cvData.education.map((education, index) => (
                        <li key={index}>{education}</li>
                    ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}