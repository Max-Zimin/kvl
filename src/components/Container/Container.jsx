import './Container.css';
import Main from './Main/Main';
import Leagues from './Leagues/Leagues';
import Champions from './Champions/Champions';
import Regulation from './Regulations/Regulations';
import Contacts from './Contacts/Contacts';
import VkVideo from './VkReels/VkReels'

export default function Container({ state }) {

    return (
        <div className='container'>
            <div className='mainBlock'>
                {state === 'Главная' && <Main />}
                {state === 'Лиги' && <Leagues />}
                {state === 'Чемпионы' && <Champions />}
                {state === 'Регламент' && <Regulation />}
                {state === 'Контакты' && <Contacts />}
            </div>
            <VkVideo/>

        </div>
    )
}