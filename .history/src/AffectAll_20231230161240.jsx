import React from 'react'

const AffectAll = ({clearAll, completeAll}) => {



  return (
    <div className='affect-all'>
        <button onClick={clearAll}>Clear all</button>
        <button onClick={completeAll}>Complete all</button>
    </div>
  )
}

export default AffectAll