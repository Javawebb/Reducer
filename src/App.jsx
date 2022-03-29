import { useReducer, useState } from 'react'
import { minusAction,resetAction, plusAction, reducer } from './store/store';

function App() {
  const [username,setUsername] = useState('')
  const [surname,setSurname] = useState('')
 
  const [state,dispatch] = useReducer(reducer, 0);

  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="App">
      <div className="container mx-auto">
        <form onSubmit={submitHandler} className="max-w-md mx-auto mt-80 border shadow ">
          <div className="bg-green-400 text-white w-full p-8 text-4xl font-black">
            <h1>Form</h1>
          </div>
          <div className="py-4 px-10">
            <div className="mb-5">
              <input type="text" placeholder='Name' value={username} onChange={event => setUsername(event.target.value)} className="rounded-lg border w-full p-3 text-md focus:outline-green-400" />
            </div>
            <div className="mb-5">
              <input type="text" placeholder='Lastname' value={surname} onChange={event => setSurname(event.target.value)} className="rounded-lg border w-full p-3 text-md focus:outline-green-400" />
            </div>
          </div>
          <button className='bg-green-400 w-full text-lg font-bold text-white hover:bg-green-300 p-4 ease-in-out'>Submit</button>
          
        </form>
        
        {/* <div className="w-96 p-10 roudend-2xl border-inherit border mx-auto mt-80 shadow-md">
          <h1 className="text-center text-8xl ml-6">{state}</h1>
          <div className="flex gap-8  mt-10">
            <button onClick={() => dispatch(plusAction)} className="text-4xl py-3 px-8 rounded-md bg-green-500 text-white shadow">+</button>
            <button onClick={() => dispatch(resetAction)} className="text-4xl py-3 px-8 rounded-md bg-blue-500 text-white shadow">0</button>
            <button onClick={() => dispatch(minusAction)} className="text-4xl py-3 px-8 rounded-md bg-red-500 text-white shadow">-</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
