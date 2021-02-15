import React from 'react';
import './Contactme.css'
function Contactme() {
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"

            />
            <input
                type="email"
                name="email"
                placeholder="Email"

            />
            <textarea
                type="text"
                name="message"
                placeholder="Message"

            ></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>)
}
export default Contactme;