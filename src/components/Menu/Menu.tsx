import ButtonMenu from '../ButtonMenu/ButtonMenu';
import './Menu.css';
import LeaguesMenuChild from './LeaguesMenuChild/LeaguesMenuChild';
import vk from './vk.png';
import inst from './inst.png';
import tg from './tg.png';
import ChampionsMenuChild from './ChampionsMenuChild/ChampionsMenuChild';

export const menuButtonsText = ['Главная', 'Лиги', 'Чемпионы', 'Регламент', 'Контакты'];

export default function Menu({ button, setButton }) {

    function handleClick(currentButton) {
        setButton(currentButton);
    }

    return null;

    return (
        <>
            <div className='menu'>
                {menuButtonsText.map(currentButton => {
                    return (
                        <ButtonMenu
                            isActiv={currentButton === button}
                            onClick={() => {
                                if (currentButton !== 'Лиги' && currentButton !== 'Чемпионы')
                                    handleClick(currentButton);
                            }}
                            key={currentButton}
                        >
                            <>{currentButton}
                                {currentButton === 'Лиги' && <LeaguesMenuChild />}
                                {currentButton === 'Чемпионы' && <ChampionsMenuChild />}
                            </>
                        </ButtonMenu>
                    );
                })}

                <a href="https://vk.com/klvl40" target="_blank"><img src={vk} className='socialNetworksIcons' alt='' style={{marginLeft: '150px'}}/></a>
                <a href="https://www.instagram.com/klvl40/" target="_blank"><img src={inst} className='socialNetworksIcons' alt='' /></a>
                <a href="https://t.me/kalugaVL" target="_blank"><img src={tg} className='socialNetworksIcons' alt='' /></a>

            </div>
        </>
    )
}