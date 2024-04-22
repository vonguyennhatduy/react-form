import React from 'react'

export const HangGhe = (props) => {
  const {hangGhe, soHangGhe} = props

  console.log('object', soHangGhe);

  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe,index) => {
      let cssData = '';
      let disable = false;
      if(ghe.daDat === true) {
        cssData = 'gheDuocChon';
        disable = true;
      } 

      return (
        <button disabled={disable} className={`ghe ${cssData}`} key={index}>{ghe.soGhe}</button>
      )
    })
  }

  const renderSoHangGhe = () => {
    return hangGhe.danhSachGhe.map((hang,index) => {
      return <button className='rowNumber'>
        {hang.soGhe}
      </button>
    })
  }

  const render = () => {
    if(soHangGhe === 0){
      return (
        <div className='ms-4'>
          {hangGhe.hang} {renderSoHangGhe()}
        </div>
      )
    }else {
      return (
        <div>
          {hangGhe.hang} {renderGhe()}
        </div>
      )
    }
  }
  
  return (
    <div>
        <div className="">
          {render()}
        </div>
    </div>
  )
}
