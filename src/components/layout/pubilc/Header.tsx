import { INavLink } from '@/type/header.type';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  
  const navLink:INavLink[] =[
    {name:'Home',path:'/'},
    {name:'About',path:'/about'},
    {name:'Contact',path:'/contact'},

  ]
  return (
    <header className=" py-5 px-4 bg-accent shadow-sm flex justify-between items-center gap-3">
      <div></div>
      <nav className=" space-x-3">
        {navLink.map(nav => (
          <Link key={nav.path} href={nav.path}>
            {nav.name}{' '}
          </Link>
        ))}
      </nav>

      <div>
        <Button
          nativeButton={false}
          render={<Link href={'/login'}>Login</Link>}
        ></Button>
      </div>
    </header>
  );
};

export default Header;