import React from 'react'
import roboLogo from '../public/chef-claude-icon.png'

export default function Header() {
  return (
    <header className='flex gap-3 py-4 border justify-center items-center'>
      <img  className='w-12'src={roboLogo} alt="robo image" />
      <h1 className='text-2xl font-semibold text-slate-800'>Chef Fefe</h1>
    </header>
  )
}
