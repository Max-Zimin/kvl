import './VkNews.css';
import { vkNews } from './VkNewsData';

export default function VkNews() {
    return (
        <div className='news'>
            {vkNews.map((reels, index) => {
                return (
                    <div className='post' key={index}> {reels} </div>
                )
            })}
        </div>
    )
}