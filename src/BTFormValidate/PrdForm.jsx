import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { btFormValidateActions, btFormValidate} from '../store/BTFormValidateReducer/slice';
import { info } from 'sass';

const stateDefault = {
  id: '',
  name: '',
  phonenumber: '',
  email: '',
}


export const PrdForm = () => {

  const [stateForm, setStateForm] = useState(stateDefault)
  const [stateValidate, setValidate] = useState({});

  const {editSV} = useSelector((state) => state.btFormValidate);
  const {listSV} = useSelector((state) => state.btFormValidate);

  console.log('form: ', stateForm);

  const layThongTinForm = () => (ev) => {

    const {value, name} = ev.target;
    setStateForm ({
      ...stateForm,
      [name]: value,
    })
  }

  useEffect(() => {
    if(!editSV){
      setStateForm(stateDefault);
      return;
    }
    setStateForm(editSV)
  },[editSV])

  const dispatch = useDispatch();

  return (
    <form style={{marginBottom: "50px"}}
      onSubmit={
        (ev) => {
          // không load lại trang khi click vào button 
          ev.preventDefault();

          let error = {};

          if(stateForm.id.trim().length === 0){
            error.id = 'Vui lòng nhập ID';
          }else if(stateForm.id.trim().length !== 7){
            error.id = 'ID phải có đúng 7 kí tự';
          }

          const ID = stateForm.id.trim();
          let cnt = 0;
          for(let i = 0; i < listSV.length; i++){
            if(listSV[i].id === ID){
              cnt++;
              break;
            }
          }

          if(stateForm.name.trim().length === 0){
            error.name = 'Vui lòng nhập họ tên';
          }

          if(stateForm.phonenumber.trim().length === 0){
            error.phonenumber = 'Vui lòng nhập SĐT';
          }
          else if(!/^[0-9]+$/.test(stateForm.phonenumber)){
            error.phonenumber = 'Vui lòng nhập đúng định dạng';
          }

          if(stateForm.email.trim().length === 0){
            error.email = 'Vui lòng nhập email';
          }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stateForm.email)){
            error.email = 'Vui lòng nhập đúng định dạng';
          }

          setValidate(error);

          if(!editSV){
            if(cnt){
              error.id = 'Mã số sinh viên đã tồn tại';
            }
            if(Object.keys(error).length) return 
            dispatch(btFormValidateActions.themSinhVien(stateForm));
            setStateForm(stateDefault)
            return;
          }
          dispatch(btFormValidateActions.updateSV(stateForm));
        }

      }
    >
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <h4>Mã Sinh Viên</h4>
            <input 
              value={stateForm?.id || ''}
              disabled={editSV}
              name="id" 
              type="text" 
              className='form-control' 
              placeholder='Mã Sinh Viên'
              onChange={layThongTinForm()}
            />
            {!!stateValidate?.id && <span className='text-danger'>{stateValidate.id}</span>}
          </div>
          <div className="col-6">
            <h4>Họ tên</h4>
            <input
              value={stateForm?.name || ''}
              name="name" 
              type="text" 
              className='form-control' 
              placeholder='Họ và tên'
              onChange={layThongTinForm()}
            />
            {!!stateValidate?.name && <span className='text-danger'>{stateValidate.name}</span>}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <h4>Số điện thoại</h4>
            <input 
              value={stateForm?.phonenumber || ''}
              name="phonenumber" 
              type="text" 
              className='form-control' 
              placeholder='SĐT' 
              onChange={layThongTinForm()}
            />
            {!!stateValidate?.phonenumber && <span className='text-danger'>{stateValidate.phonenumber}</span>}
          </div>
          <div className="col-6">
            <h4>Email</h4>
            <input
              value={stateForm?.email || ''}
              name="email" 
              type="text" 
              className='form-control' 
              placeholder='Email' 
              onChange={layThongTinForm()}
            />
            {!!stateValidate?.email && <span className='text-danger'>{stateValidate.email}</span>}
          </div>
        </div>
          <div className="mt-5">
            {!editSV && <button className="btn btn-success add">Thêm Sinh Viên</button>}
            {!!editSV && <button className="btn btn-info">Cập Nhật SV</button>}
          </div>
      </div>

      
    </form>
  )
}

