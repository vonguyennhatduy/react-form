import React from 'react'
import { PrdForm } from './PrdForm'
import { PrdTable } from './PrdTable'
import { SearchBar } from './SearchBar'
import './style.css'

export const BTFormValidate = () => {
  return (
    <div>
        <div className="info">
            <div style={{backgroundColor: 'black', height: "100px", fontSize: "30px"}} className="text-center text-white">
                <div className="title">
                    THÔNG TIN SINH VIÊN 
                </div>
            </div>
        </div>

        <div className="mt-5">
           <PrdForm/>
        </div>

        <div className="mt-2">
            <SearchBar/>
        </div>

        <div className="mt-5">
            <PrdTable/>
        </div>

    </div>
  )
}
