import React from 'react'
import { btFormValidate, btFormValidateActions } from '../store/BTFormValidateReducer/slice'
import { useDispatch, useSelector } from 'react-redux'

export const PrdTable = () => {

  const {listSV} = useSelector((state) => state.btFormValidate)

  const dispatch = useDispatch();

  console.log('list: ', listSV);
  return (
    <div className="container">
        <table className="table">
          <thead className='table-success'>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              listSV.map((sv) => {
                return <tr key={sv.id}>
                  <td>{sv.id}</td>
                  <td>{sv.name}</td>
                  <td>{sv.phonenumber}</td>
                  <td>{sv.email}</td>
                  <td>
                    <button className="btn btn-info me-2"
                      onClick={() => {
                        dispatch(btFormValidateActions.editSinhVien(sv));
                      }}
                    >
                      Chỉnh sửa
                    </button>
                    <button className="btn btn-danger" onClick={() => {
                      dispatch(btFormValidateActions.xoaSinhVien(sv));
                    }}>
                      Xóa
                    </button>
                  </td>
                </tr>
              })
            }

          </tbody>
        </table>
    </div>

    
  )
}
