import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center dark:bg-purple-900 text-xl dark:text-white h-10vh w-full py-6 bg-custom-pink'>
      <a href='https://digitalhouse.com/ar' target='_blank' rel='noreferrer' className='flex items-center justify-center w-full h-full'>
        <p className='pr-4 font-bold dark:text-white text-lg max-w-[80vw] text-center mx-auto'>Powered by ➡️ Gonzalo Varela & Matias Montañez</p>
      </a>
    </footer>
  )
}

export default Footer