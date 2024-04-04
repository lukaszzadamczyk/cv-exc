import './header.scss';

type Props = {
    name: string;
    lastName: string;
}

export const Header = ({name, lastName}: Props) => {
    return (
        <header className='cv-header'>
            <h1>CV {name} {lastName}</h1>
        </header>
    )
}