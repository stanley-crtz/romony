import React from 'react'
import RomonyLogo from 'assets/images/Romony.jpeg';
import MaterialIcons from 'assets/Icons/MaterialIcons';
import { Avatar } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 md:items-center w-full items-center p-2 px-5 fixed backdrop-filter backdrop-blur-sm z-50">
      <Avatar
        src={RomonyLogo.src}
        alt="Romony Logo"
        sx={{width: 50, height: 50}}
      />
      <div className="text-right md:text-center font-bold text-xl">
        <h1>Romony</h1>
      </div>
      <ul className="w-full flex gap-x-4 justify-center md:justify-end col-span-2 md:col-span-1 my-5 md:my-0">
        <Link href="/">Shops</Link>
        <li>¿Quienes somos?</li>
        <li>FAQ</li>
        <li>{MaterialIcons.Person}</li>
      </ul>
    </nav>
  )
}

export default Navbar