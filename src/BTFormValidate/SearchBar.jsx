import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { btFormValidateActions, btFormValidate } from '../store/BTFormValidateReducer/slice';


const initial = {
    id: '',
    name: '',
    phonenumber: '',
    email: '',
  }

export const SearchBar = () => {

  const [searchInfo, setSearchInfo] = useState(initial);

  const {listSV,listSV2} = useSelector((state) => state.btFormValidate)
  console.log(listSV);
  console.log(listSV2);


  let cnt = 1;
  if(listSV.length === 1 && listSV2.length > 1)
    cnt = 0;

  console.log(cnt);

  const dispatch = useDispatch();

  const getInfo = () => (ev) => {
    const {value, name} = ev.target;

    setSearchInfo ({
        ...searchInfo,
        [name]: value,
    })
  }

  return (
    <div>
        {
            cnt === 1 ? 
            <div className='container d-flex'>
                <input 
                    style = {{
                        width: "300px",
                    }}
                    type="text" 
                    name="id"
                    className='form-control' 
                    placeholder='Tìm kiếm sinh viên bằng ID'
                    onChange={getInfo()}
                />

                <button className="btn btn-warning ms-2" onClick={() => {
                    dispatch(btFormValidateActions.searchSinhVien(searchInfo));
                    dispatch(btFormValidateActions.Clear());
                    console.log('se: ', searchInfo);
                }}> 
                        <i class="fa-solid fa-magnifying-glass"></i>
                </button>
             </div>
            
            :
            <div className='container'>
                <button className="btn btn-info" onClick={() => {
                    dispatch(btFormValidateActions.Return())
                }}>Quay lại</button>
            </div>
        }
    </div>
  )
}
