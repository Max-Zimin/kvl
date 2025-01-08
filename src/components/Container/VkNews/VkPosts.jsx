import { useEffect, useRef } from "react"

export const VkPost = ({ownerId, postId, hash}) => {
    const postContainer = useRef(null);
    const vkPostDivId = `vk_post_${ownerId}_${postId}`;
    useEffect(() => {
        window.VK.Widgets.Post(vkPostDivId, ownerId, postId, hash, {width: 315});
    }, []);

    return(
        <div ref={postContainer} id={vkPostDivId} />
    )
}