import { useState } from 'react'

const Content = () => {
    const [result, setResult] = useState('0');
    const [num , setNum] = useState('')
    const [operation, setOperation] = useState('')

  const  handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const handleClear = ( ) => {
        setResult('0')
    }

    const backSpace = () => {
        setResult(result.slice(0, -1))
    }

    const handleValue = (operation) => {
        setNum(result);
        setOperation((operation.target.name));
        setResult('');
    }

    const handleEqual = () => {
        if (operation === '+') {
        const add = parseFloat(num) + parseFloat(result);
        setResult((add).toString());
        console.log(add)
        }else if (operation === '-') {
            var minus = parseFloat(num) - parseFloat(result);
            setResult((minus).toString());
            console.log(minus)
        }else if (operation === '*') {
            var multi = parseFloat(num) * parseFloat(result);
            setResult((multi).toString());
            console.log(multi)
        }else if (operation === '/') {
            var divide = parseFloat(num) / parseFloat(result);
            setResult((divide).toString());
            console.log(divide) 
        } else { 
            setResult('Error')
            // clearInterval(setResult(''),2000);
        }
    }
  return ( 
    <>
    <div className='Container'>
            <input 
            type='text'
            value = {result}
            placeholder= 'Calculating........................'
            onChange={(e) => setResult(e.target.value)}
            />
        <div className='keypad'>
            <button  onClick={handleClear} >Clear</button>    
            <button  onClick={backSpace} >C</button>    <br />
            <button name="7" onClick={(e)=>handleClick(e)} >7</button>    
            <button name='8' onClick={handleClick} >8</button>    
            <button name='9' onClick={handleClick} >9</button>    
            <button name='/' onClick={(operation) => handleValue (operation)} >&divide;</button><br />    
            <button name='4' onClick={handleClick} >4</button>    
            <button name='5' onClick={handleClick} >5</button>    
            <button name='6' onClick={handleClick} >6</button>    
            <button name='*' onClick={(operation) => handleValue (operation)} >&times;</button>    <br />
            <button name='1' onClick={handleClick} >1</button>    
            <button name='2' onClick={handleClick} >2</button>    
            <button name='3' onClick={handleClick} >3</button>    
            <button name='-' onClick={(operation) => handleValue (operation)} >&ndash;</button>    <br />
            <button name='0' onClick={handleClick} >0</button>    
            <button name='+' onClick={(operation) => handleValue (operation)} >+</button>    
            <button name='.' onClick={handleClick} >.</button>    
            <button  onClick={handleEqual} >=</button>    
        </div>    

    </div>
    </>
  )
}

export default Content




// this calculator have some bugs => (8+-2 = 6)

// import { useState } from 'react'

// const Content = () => {
//     const [result, setResult] = useState('');

//   const  handleClick = (e) => {
//         setResult(result.concat(e.target.name));
//     }

//     const handleClear = ( ) => {
//         setResult('')
//     }

//     const backSpace = () => {
//         setResult(result.slice(0, -1))
//     }
//     const handleEqual = () => {
//         try{
//             setResult(eval(result).toString())
//         } catch (err) { 
//             setResult('error')
//         }
        
//         console.log(typeof result)
//     }
//   return ( 
//     <>
//     <div className='Container'>
//             <input 
//             type='text'
//             value = {result}
//             placeholder= 'Calculating........................'
//             />
//         <div className='keypad'>
//             <button  onClick={handleClear} >Clear</button>    
//             <button  onClick={backSpace} >C</button>    <br />
//             <button name="7" onClick={(e)=>handleClick(e)} >7</button>    
//             <button name='8' onClick={handleClick} >8</button>    
//             <button name='9' onClick={handleClick} >9</button>    
//             <button name='/' onClick={handleClick} >&divide;</button><br />    
//             <button name='4' onClick={handleClick} >4</button>    
//             <button name='5' onClick={handleClick} >5</button>    
//             <button name='6' onClick={handleClick} >6</button>    
//             <button name='*' onClick={handleClick} >&times;</button>    <br />
//             <button name='1' onClick={handleClick} >1</button>    
//             <button name='2' onClick={handleClick} >2</button>    
//             <button name='3' onClick={handleClick} >3</button>    
//             <button name='-' onClick={handleClick} >&ndash;</button>    <br />
//             <button name='0' onClick={handleClick} >0</button>    
//             <button name='+' onClick={handleClick} >+</button>    
//             <button name='.' onClick={handleClick} >.</button>    
//             <button name='=' onClick={handleEqual} >=</button>    
//         </div>    

//     </div>
//     </>
//   )
// }

// export default Content