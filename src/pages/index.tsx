
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ButtonGroup, Card, Chip, Pagination, Progress, Skeleton, Spacer, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/searchicon";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import Sidebar from sidebar
import Sidebar from './sidebar';
import Navbar1 from './navbar';
import Rightside from './rightside'

export default function Home() {
  return (
    <div className='flex flex-col justify-normal'>
      <div className=' bg-white flex flex-row'>
        <div className='flex flex-col'>
          <Navbar1 />
          <Sidebar />
        </div>
        <Rightside />
        
      </div>
    </div>
  );
}


