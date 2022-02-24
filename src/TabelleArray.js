import ReactDOM from "react-dom";
import './index.css';

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse'
}

const tdStyle = {
    border: '1px solid black',
};

const App = () => {
    const students = [
        { student: 'Thomas', klasse:'4AHEL', helper:'Mag. Stenach', fach:'KSN', datum:'Dienstag', uhrzeit: '13:02' },
        { student: 'Anna', klasse:'3BHEL', helper:'Mr Mequi', fach:'FSST', datum:'Montag', uhrzeit: '10:02' },
        { student: 'Jacky', klasse:'1CHEL', helper:'Mag. Amlech', fach:'AM', datum:'Donerstag', uhrzeit: '14:02' },

    ];
    return (
        <div>
            <table style={tableStyle}>
                <tbody>
                <tr>

                    <th style={tdStyle}>Schüler</th>
                    <th style={tdStyle}>Klasse</th>
                    <th style={tdStyle}>Helfer</th>
                    <th style={tdStyle}>Fach</th>
                    <th style={tdStyle}>Datun</th>
                    <th style={tdStyle}>Uhrzeit</th>
                </tr>
                {students.map(({ student, klasse, helper, fach, datum, uhrzeit }) => (
                    <tr key={student}>

                        <td style={tdStyle}>{student}</td>
                        <td style={tdStyle}>{klasse}</td>
                        <td style={tdStyle}>{helper}</td>
                        <td style={tdStyle}>{fach}</td>
                        <td style={tdStyle}>{datum}</td>
                        <td style={tdStyle}>{uhrzeit}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root );



