import React from 'react'

// custom select element funcctional component
const SelectComponent = ({data, onChange }) => {
    return(
        <select id="postCategoy" onChange={onChange} className=" border-solid border-[1px] p-2 mb-4  border-#ddd">
        {
            data.map((dataItem, index) => 
            <option className=' py-2 border-#ddd' key={index} value={dataItem.value}>{dataItem.name}</option>   
            )
        }
    </select>
    )
}

export default SelectComponent