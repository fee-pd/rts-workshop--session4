import { useState } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  const [counter, setCounter] = useState(0);
  const [memory, setMemory] = useState([]);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  //save counter in memory
  const save = () => {
    setMemory([counter, ...memory]);
  };
  return (
    <>
      <div>
        <h1>React Counter</h1>
      </div>
      <div className="card">
        <Button
          onClick={() => increase}
          variant="outlined"
          className="spaceBtns"
        >
          +
        </Button>
        <button>Count is {counter}</button>
        <Button onClick={() => decrease()} variant="outlined" className="spaceBtns">
          -
        </Button>
        <div className="btn__container">
          <Button onClick={() => reset} variant="contained">
            Reset
          </Button>
          <Button onClick={() => save} variant="contained" sx={{ bgcolor: 'green' }}>
            Save Data
          </Button>
        </div>
        <div>
          <TableContainer
            component={Paper}
            sx={{ width: 300, margin: '2rem auto' }}
          >
            <Table sx={{ width: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memory.map((row) => (
                  <TableRow
                    key={0}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default App;
