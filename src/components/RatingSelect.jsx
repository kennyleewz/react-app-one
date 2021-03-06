import React from 'react'
import {useState} from 'react'

function RatingSelect({select}) {

    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(selected)
    }

    return (
        <ul className='rating'>
            <li>
                <input type='radio' id='num1' name='rating' value='1' onChange={handleChange} checked={selected === 1} />
                <label htmlFor='num1'>1</label>
            </li>
            <li>
                <input type='radio' id='num5' name='rating' value='5' onChange={handleChange} checked={selected === 5} />
                <label htmlFor='num5'>5</label>
            </li>
            <li>
                <input type='radio' id='num10' name='rating' value='10' onChange={handleChange} checked={selected === 10} />
                <label htmlFor='num10'>10</label>
            </li>
        </ul>
    )
}

export default RatingSelect
