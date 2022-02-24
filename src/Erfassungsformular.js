import React from 'react';
import ReactDOM from 'react-dom';

function FormularStudent() {
    return (
        <form>
            <label>Name
                <input type="text" />
                placeholder="Name eingeben" name="name">
            </label>

            <label>Klasse
                <input type="text" />
                placeholder="Klasse eingeben" name="klasse">
            </label>

            <label>Fach
                <input type="text" />
                placeholder="Fach eingeben" name="fach">
            </label>

            <label>Datum
                <input type="text" />
                placeholder="Datum eingeben" name="datum">
            </label>

            <label>Uhrzeit
                <input type="text" />
                placeholder="Uhrzeit eingeben" name="uhrzeit">
            </label>
            <button type="Senden" className="btn btn-default">Senden</button>
        </form>


    )
}

ReactDOM.render(<FormularStudent />, document.getElementById('root'));


