import './VkReels.css';
import { vkReels } from './VKReelsData';

export default function News() {
    return (
        <div className='reels'>
            {vkReels.map((reels, index) => {
                return (
                    <div className='oneReels' key={index}> {reels} </div>
                )
            })}
        </div>
    )
}


