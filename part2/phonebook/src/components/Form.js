import React from 'react'

const Form = ({onSubmit, value, onChange}) => {
    const[setName,setPhone] = onChange
    const[name, phone]=value

    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input value={name} onChange={setName } />
                </div>
                <div>
                    number: <input value={phone} onChange={setPhone } />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;