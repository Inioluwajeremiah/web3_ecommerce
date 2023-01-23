import React from 'react'

// custom select element funcctional component
const SelectComponent = ({data, onChange }) => {
    return(
        <select id="postCategoy" onChange={onChange} className="border-solid border-[1px] border-#ddd">
        {
            data.map((dataItem, index) => 
            <option className='text-text-color m-2 border-solid border-[1px] border-#ddd' key={index} value={dataItem.value}>{dataItem.name}</option>   
            )
        }
    </select>
    )
}

export default SelectComponent