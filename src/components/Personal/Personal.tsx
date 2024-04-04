import './personal.scss';

type Props = {
    name: string;
    lastName: string;
    photo: string;
    position: string;
}

export const Personal = ({name, lastName, photo, position}: Props) => {
    return (
        <aside className='cv-personal'>
            <h2>Personal data</h2>
            <img className='cv-photo' src={photo} alt={`${name} ${lastName} profile photo.`} />
            <p>{name} {lastName}</p>
            <small>{position}</small>
        </aside>
    )
}