import { Header } from "./components/Header/Header";
import { Personal } from "./components/Personal/Personal";
import { CVData } from "./types/types";
import { Details } from "./components/Details/Details";

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

    const { name, lastName, photo, position, experience, education } = cvData;

    return (
        <div className="App">
            <main className='cv-main'>
                <Header name={name} lastName={lastName}/>
                <Personal name={name} lastName={lastName} photo={photo} position={position}/>
                <Details experience={experience} education={education}/>
            </main>
        </div>
    )
}