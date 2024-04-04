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
                <header className='cv-header'>
                    <h1>CV {cvData.name} {cvData.lastName}</h1>
                </header>
                <aside className='cv-personal'>
                    <h2>Personal data</h2>
                    <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile photo.`} />
                    <p>{cvData.name} {cvData.lastName}</p>
                    <small>{cvData.position}</small>
                </aside>
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