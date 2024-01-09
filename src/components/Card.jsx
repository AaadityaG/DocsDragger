import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion"



function Card({data, reference}) {

    
  return (
    <motion.div drag whileHover={{ scale: 1.2 }} dragConstraints={reference} className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tifght font-light'>
        {data.desc}
        </p>

        <div className={`footer absolute bottom-0 text-black w-full bg-rose-400 px-8 py-5 left-0 `}>
            <div className='flex items-center justify-between'>
                <h5>{data.fileSize}</h5>
                <span className='flex items-center bg-zinc-200 justify-center rounded-full w-5 h-5'>
                    <MdOutlineFileDownload size=".7em" color='#282828'/>
                </span>
            </div>
        </div>

    </motion.div>
  )
}

export default Card
