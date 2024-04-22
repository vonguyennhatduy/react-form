import React from 'react'

export const ThongTinDatGhe = () => {
  return (
    <div>
        <div className="d-flex flex-row">
          <div className="gheDuocChon"></div>
          <div style={{fontSize: '25px'}} className='text-white ms-2'>Ghế đã đặt</div>
        </div>
        <div className="d-flex flex-row mt-2">
          <div className="gheDangChon"></div>
          <div style={{fontSize: '25px'}} className='text-white ms-2'>Ghế đang đặt</div>
        </div>
        <div className="d-flex flex-row mt-2 ">
          <div className="ghe gheChuaDat"></div>
          <div style={{fontSize: '25px'}} className='text-white ms-2'>Ghế chưa đặt</div>
        </div>

        <div className="mt-5">
          <div
            class="table-responsive-xxl"
          >
            <table
              class="table table-success"
            >
              <thead>
                <tr>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
          
        </div>
        
    </div>
  )
}
