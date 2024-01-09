import React, { useRef } from 'react'
import Card from './Card';

function Fore() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, assumenda?",
      fileSize: ".9mb",
      color: "sky"
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, assumenda?",
      fileSize: ".9mb",
      color: "rose"
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, assumenda?",
      fileSize: ".9mb",
      color: "sky"
    }
  ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-transprent flex gap-5 flex-wrap'>
      {data.map((item, index) => (
        <Card reference={ref} data={item}/>
      ))}
    </div>
  )
}

export default Fore
