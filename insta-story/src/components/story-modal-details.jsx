import React from 'react'

const StoryModal = ({url,setopenModal}) => {
  if(!url){
return '';
  }
    return (
    <div>
        <div className='full-image'>
        <img src={url} alt="" />
        <button className='close-btn'  onClick={()=>setopenModal(null)}>close</button>
  </div>
    </div>
  )
}

export default StoryModal