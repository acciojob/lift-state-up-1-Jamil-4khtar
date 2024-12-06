import React from 'react'

function Child({showModal, setshowModal}) {
    return (
        <div className='child'>
            <h2>Child Component</h2>
            <button onClick={() => setshowModal(!showModal)}>Show Modal</button>
            {showModal && <h3>Modal Content</h3>}
            {showModal && <p>This is the modal content.</p>}
        </div>
    )
}

export default Child