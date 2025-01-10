import './LeaguesMenuChild.css';
import majorLeague from './Высшая мужская.jpg';

export default function LeaguesMenuChild({ ...props }) {
    console.log(majorLeague);
    return (
        <div className='leaguesMenu' {...props}>
            <button className='leagueImgButton' style={{backgroundImage: `url('${majorLeague}')`,
            }}></button>
            <button className='leagueImgButton' ></button>
            <button className='leagueImgButton' ></button>
            <button className='leagueImgButton' ></button>
            <button className='leagueImgButton' ></button>
        </div>
    )
}