import { useState } from "react"
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"

interface Props{
    onClick: ()=> void;
}
const Like = ({onClick}: Props) => {
const [like, setLike] = useState(false);
const toggle = () => {
    setLike(!like);
    onClick();
}
if (like) return <AiFillHeart color="#ff6b81" size="40" onClick={toggle}/> ;
return <AiOutlineHeart size="40" onClick={toggle}/>
}

export default Like