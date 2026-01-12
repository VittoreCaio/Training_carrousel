import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const MoveButtons = () => {
  return (
    <>
    <div className='moveButtons'>
      <div className='moveButtons__Intern'>
      <FontAwesomeIcon icon={faAngleLeft} className='moveButtons__Intern__left'/>
      <FontAwesomeIcon icon={faAngleRight} className='moveButtons__Intern__right'/>
      </div>
    </div>
    </>
  )
}

export default MoveButtons