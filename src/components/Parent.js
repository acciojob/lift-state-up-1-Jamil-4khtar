import React, {useState} from 'react'
import Child from './Child'

function Parent() {
    const [showModal, setshowModal] = useState(false)

    return (
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child showModal={showModal} setshowModal={setshowModal}/>
        </div>
    )
}

export default Parent