// rafc
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BTFormReducer/slice'

const FORMDEFAULT = {
    id: '',
    image: '',
    name: '',
    productType: 'mobile',
    price: '',
    description: '',
}

export const ProductForm = () => {
    // 1. button nằm trong thẻ form => thuộc tính type mặc định = submit
    // 2. type = submit => btn submit, type = button, type = reset => reset form
    const [formValue, setFormValue] = useState(FORMDEFAULT)
    const [formErrors, setFormErrors] = useState({})

    console.log('formValue: ', formValue)
    console.log('formErrors: ', formErrors)

    // const handleFormValue = (ev, name) => {
    //     setFormValue({
    //         ...formValue,
    //         [name]: ev.target.value,
    //     })
    // }

    // closure funciton
    // const handleFormValue = ()=> {
    //     return ()=>{
    //     }
    // }

    // currying function
    const handleFormValue = () => (ev) => {
        // console.log('ev: ', ev)
        // console.log('name: ', ev.target.name)
        const { value, name } = ev.target

        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    // const value = handleFormValue() // (ev)=>{}
    // value = ()=>{}

    const dispatch = useDispatch()

    const { productEdit } = useSelector((state) => state.btFormReducer)

    useEffect(() => {
        console.log('useEffect')
        // không có productEdit
        if (!productEdit) {
            setFormValue(FORMDEFAULT)

            return
        }
        setFormValue(productEdit)

        // if(productEdit){
        //     setFormValue(productEdit)
        // }
    }, [productEdit])

    return (
        <form
            onSubmit={(ev) => {
                console.log('onSubmit')

                // Ngăn browser reload khi submit form
                ev.preventDefault()

                let errrors = {}

                // validation
                // ID
                // Kiểm tra rỗng
                if (!formValue.id.trim().length) {
                    errrors.id = 'Vui lòng nhập ID'
                } else if (formValue.id.length < 4 || formValue.id.length > 10) {
                    errrors.id = 'ID chỉ từ 4 đến 10 ký tự'
                } else if (!/^[0-9][A-Za-z0-9 -]*$/.test(formValue.id)) {
                    // Kiểm tra id có phải là number
                    errrors.id = 'ID phải là number'
                }

                //IMAGE
                if (!formValue.image.trim().length) {
                    errrors.image = 'Vui lòng nhập image'
                } else if (
                    !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
                        formValue.image
                    )
                ) {
                    errrors.image = 'Vui lòng nhập đúng định dạng (vd: https://www.google.com)'
                }

                //NAME
                if (!formValue.name.trim().length) {
                    errrors.name = 'Vui lòng nhập name'
                }

                setFormErrors(errrors)

                // Kiểm tra object rỗng
                if (Object.keys(errrors).length) return

                if (!productEdit) {
                    // action thêm mới
                    dispatch(btFormActions.addProduct(formValue))
                    return
                }

                // action chỉnh sửa
                dispatch(btFormActions.updateProduct(formValue))
            }}
        >
            <h2 className="bg-dark text-warning p-3">Product Info</h2>
            <div className="row">
                <div className="col-6">
                    <p>ID</p>
                    <input
                        // optional chainning
                        // value={productEdit ? productEdit?.id : ''} // null || ""
                        disabled={!!productEdit}
                        value={formValue?.id || ''} // null || ""
                        name="id"
                        type="text"
                        className="form-control"
                        onChange={handleFormValue()}
                    />
                    {!!formErrors?.id && <p className="text-danger">{formErrors.id}</p>}
                </div>
                <div className="col-6">
                    <p>IMAGE</p>
                    <input
                        value={formValue?.image || ''}
                        name="image"
                        type="text"
                        className="form-control"
                        // onChange={(ev) => {
                        //     // setFormValue({
                        //     //     ...formValue,
                        //     //     image: ev.target.value,
                        //     // })
                        //     handleFormValue(ev, 'image')
                        // }}
                        onChange={handleFormValue()}
                    />
                    {!!formErrors?.image && <p className="text-danger">{formErrors.image}</p>}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <p>NAME</p>
                    <input
                        value={formValue?.name || ''}
                        name="name"
                        type="text"
                        className="form-control"
                        // onChange={(ev) => {
                        //     // setFormValue({
                        //     //     ...formValue,
                        //     //     name: ev.target.value,
                        //     // })
                        //     handleFormValue(ev, 'name')
                        // }}
                        // onChange={handleFormValue('name')}
                        onChange={handleFormValue()}
                    />
                    {!!formErrors?.name && <p className="text-danger">{formErrors.name}</p>}
                </div>
                <div className="col-6">
                    <p>PRODUCT TYPE</p>
                    <select
                        value={formValue?.productType || 'mobile'}
                        name="productType"
                        className="form-control"
                        // onChange={(ev) => handleFormValue(ev, 'productType')}
                        // onChange={handleFormValue('productType')}
                        onChange={handleFormValue()}
                    >
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <p>PRICE</p>
                    <input
                        value={formValue?.price || ''}
                        name="price"
                        type="text"
                        className="form-control"
                        // onChange={(ev) => handleFormValue(ev, 'price')}
                        // onChange={handleFormValue('price')}
                        onChange={handleFormValue()}
                    />
                </div>
                <div className="col-6">
                    <p>DESCRIPTION</p>
                    <textarea
                        value={formValue?.description || ''}
                        name="description"
                        rows={3}
                        className="form-control"
                        // onChange={(ev) => handleFormValue(ev, 'description')}
                        // onChange={handleFormValue('description')}
                        onChange={handleFormValue()}
                    />
                </div>
            </div>
            <div>
                {!productEdit && <button className="btn btn-success">Thêm Mới</button>}

                {!!productEdit && <button className="btn btn-info ms-3">Cập nhật</button>}
            </div>
        </form>
    )
}
