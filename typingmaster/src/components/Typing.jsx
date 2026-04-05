import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Typing = () => {
const [currentText, setcurrentText] = useState('');
const [userClick, setuserClick] = useState('')

    document.body.addEventListener('keydown',(e)=>{
    setuserClick(userClick+e.key);
    })
    useEffect(()=>{
setcurrentText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero impedit, quis laboriosam hic fugiat laborum voluptas similique molestias maxime unde tempore nemo doloribus, saepe cumque repudiandae velit aperiam facilis! Exercitationem cupiditate excepturi inventore provident quae aliquid, autem dolores. Dignissimos?')
    },[])
  return (
    <div>

        <div className='textContainer'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero impedit, quis laboriosam hic fugiat laborum voluptas similique molestias maxime unde tempore nemo doloribus, saepe cumque repudiandae velit aperiam facilis! Exercitationem cupiditate excepturi inventore provident quae aliquid, autem dolores. Dignissimos?

        </div>
        <div>
            hey
            {userClick}
        </div>
    </div>
  )
}

export default Typing