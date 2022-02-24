
import ReactDOM from "react-dom";
import React from "react";
import './index.css';

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse'
}

const tdStyle = {
    border: '1px solid black',
};


function Students(){
    var st1=  [ '1' ,'Thomas', '4AHEL', 'KSN', 'Dienstag',  '13:02' ];
    var st2=  [ '2' ,'Anna', '3BHEL', 'FSST', 'Montag',  '10:02' ];
    var st3=  [ '3' ,'Jacky', '1CHEL', '1CHEL', 'Donnerstag', , '14:02' ];


}

function Helpers(){
    var st4=  [  '1' ,'Mr. Mequi','',  'FSST' ];
    var st5=  [  '2' ,'Mag. Amlech', '', 'AM' ];
    var st6=  [  '3' ,'Mag. Stenach', '','KSN' ];

}

/*function GetIndexOfTabel(){
    for (let i= 0; i< 3; i++){
        if (Students.st1.[i] == st1.[i]){

            }
        }


    }
      ];
  }
}*/

const Table = ({students}) => (
    <div>
        <table style={tableStyle}>
            <tbody>
            <tr>
                <th style={tdStyle}>Id</th>
                <th style={tdStyle}>Name</th>
                <th style={tdStyle}>Klasse</th>
                <th style={tdStyle}>Fach</th>
                <th style={tdStyle}>Tag</th>
                <th style={tdStyle}>Uhrzeit</th>
            </tr>
            {students.map(({ id, name, klasse, fach, tag, uhrzeit }) => (
                <tr key={id}>
                    <td style={tdStyle}>{id}</td>
                    <td style={tdStyle}>{name}</td>
                    <td style={tdStyle}>{klasse}</td>
                    <td style={tdStyle}>{fach}</td>
                    <td style={tdStyle}>{tag}</td>
                    <td style={tdStyle}>{uhrzeit}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);


const App = () => {
    const [students, setStudents] = React.useState(Students);
    return (
        <div>

            <br />
            <Table students={students} />

            <div>

                <button onClick={() => setStudents(Students)}>Schüler anzeigen</button>
                <button onClick={() => setStudents(Helpers)}>Helfer anzeigen</button>

            </div>
        </div >
    );
};
const root = document.querySelector('#root');
ReactDOM.render(<App />, root );




