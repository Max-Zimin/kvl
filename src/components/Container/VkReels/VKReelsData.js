
function makeReels(src) {
    return <iframe src={src} width="325" height="646" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="1" allowFullScreen > </iframe>
}

export const vkReels = [];

vkReels.unshift(makeReels("https://vk.com/video_ext.php?oid=-209707040&id=456239218&hd=2&autoplay=0"));
vkReels.unshift(makeReels("https://vk.com/video_ext.php?oid=-209707040&id=456239275&hd=2&autoplay=0"));
vkReels.unshift(makeReels("https://vk.com/video_ext.php?oid=-209707040&id=456239278&hd=2&autoplay=1"));