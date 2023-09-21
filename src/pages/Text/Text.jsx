import { useState } from 'react'
import Heading from '../../Components/Heading'

const Text = () => {

  const [text, setText] = useState('')

  const handleUppercase = () => {

    setText(text.toUpperCase())
    
  }
  const handleLowercase = () => {

    setText(text.toLowerCase())

  }

  const handleCountWords = ()=>{
    setText(text.length);
  }


  return (
    <div className='text__container w-full min-h-screen bg-slate-200'>
      <Heading />
      <div className=' w-full p-3 border-3 border-slate-900'>
        <textarea
          className='w-full px-4 py-2 mt-10'
          name='textarea'
          onChange={e => setText(e.target.value)}
          id='textarea'
          cols='30'
          rows='10'
          placeholder='Enter Text'
        ></textarea>
      </div>
      <div className='buttons__container w-full p-2 mt-3 mx-auto lg:grid grid-cols-3 gap-3'>
        <button className='btn' onClick={handleUppercase}>
          {' '}
           Uppercase{' '}
        </button>
        <button className='btn' onClick={handleLowercase}>
          {' '}
          LowerCase{' '}
        </button>
        <button className='btn'onClick={handleCountWords}> Count words </button>
        <button className='btn'> Phone Number </button>
        <button className='btn'> Convert To Uppercase </button>
        <button className='btn'> Convert To Uppercase </button>
        <button className='btn'> Convert To Uppercase </button>
      </div>

      <div className='preview'>
        <h2 className='text-lg font-bold text-slate-800 '> Preview: </h2>
        <p> {text} </p>
      </div>
    </div>
  )
}

export default Text
