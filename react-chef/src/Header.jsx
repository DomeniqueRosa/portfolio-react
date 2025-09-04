import React from 'react'
import roboLogo from './assets/chef-claude-icon.png'

export default function Header() {
  return (
    <header className='flex gap-3 m-auto border justify-center items-center'>
      <img  className='w-12'src={roboLogo} alt="robo image" />
      <h1 className='text-2xl font-semibold text-slate-800'>Chef Claude</h1>
    </header>
  )
}
