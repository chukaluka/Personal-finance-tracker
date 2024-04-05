import Link from 'next/link';
import React from 'react'
import { TbBusinessplan } from "react-icons/tb";



const SidebarNav = () => {
  return (
    <nav>
      <div className='pb-5 flex'>
        <TbBusinessplan
          className=""
          size={24}
          style={{ color: "#9333EA" }}
        />
       <span>Finance Tracker</span>
      </div>
      <ul className=''>
        <li>
          <Link href='/'>Dashboard</Link>
        </li>
        <li>
          <Link href='/'>Expense</Link>
        </li>
        <li>
          <Link href='/'>Profile</Link>
        </li>
        <li>
          <Link href='/'>Sign out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNav