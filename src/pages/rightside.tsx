import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ButtonGroup, Card, Chip, Pagination, Progress, Skeleton, Spacer, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/searchicon";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const rightside = () => {
    
  const [icon, seticon] = useState(true);
  const [color, setcolor] = useState(true);
  return (
    <div>
      <div className='text-black flex flex-col ml-[-50rem] mt-20 text-3xl'>
        <div>Home
        <ButtonGroup radius='full' className='ml-[900px] -mt-6 ' variant="bordered" color='default'>
            <Button size="sm" className={color?'bg-blue-300':'bg-white' } onClick={()=>setcolor(true)}  startContent={ color ?
              <Image width={20} height={20} className='flex justify-center items-center m-2' src="/tick.png" alt="NextUI Album Cover" /> :
              <Image width={20} height={20} className='flex justify-center items-center m-2' src="/list.png" alt="NextUI Album Cover" /> 

            } ></Button>
            <Button size="sm" className={color?'bg-white':'bg-blue-300'} onClick={()=>setcolor(false)} startContent={color ?
              <Image width={15} height={15} className='flex justify-center items-center m-2' src="/grid.png" alt="NextUI Album Cover" /> :
              <Image width={20} height={20} className='flex justify-center items-center m-2' src="/tick.png" alt="NextUI Album Cover" />
            }></Button>
          </ButtonGroup>

          <Image width={20} height={20} className='ml-[1130px] -mt-7 ' src="/details.png" alt="details" />

          
          </div>
          <div className='flex flex-col '>
          <Image width={20} height={20} className='ml-[1180px] -mt-5 ' src="/calender.png" alt="details" />
          <Image width={20} height={20} className='ml-[1180px] mt-10' src="/keep.png" alt="details" />
          <Image width={20} height={20} className='ml-[1180px] mt-10' src="/task.png" alt="details" />
          <Image width={20} height={20} className='ml-[1180px] mt-10' src="/contacts.png" alt="details" />
          <Image width={20} height={20} className='ml-[1180px] mt-10' src="/addons.png" alt="details" />
          </div>
        <div className='text-black text-sm flex flex-row font-semibold mt-5'>
          <p className='-mt-60 '>Suggested</p>

          <ButtonGroup radius='full' className='ml-7 border-slate-950 -mt-[450px]' variant="bordered" color='default'>
            <Button size="sm" className={icon?'bg-blue-300':'bg-white' } onClick={()=>seticon(true)}  startContent={ icon ?
              <Image width={20} height={20} className='flex justify-center items-center m-2' src="/tick.png" alt="NextUI Album Cover" /> :
              <Image width={20} height={20} className='flex justify-center items-center m-2' src="/files.png" alt="NextUI Album Cover" /> 

            }><p className='text-base'>Files</p></Button>
            <Button size="sm" className={icon?'bg-white':'bg-blue-300'} onClick={()=>seticon(false)} startContent={icon ?
              <Image width={25} height={25} className='flex justify-center items-center m-2' src="/folders.png" alt="NextUI Album Cover" /> :
              <Image width={20} height={20} className='flex justify-center items-center m-2' src="/tick.png" alt="NextUI Album Cover" />
            }><p className='text-base'>Folders</p></Button>
          </ButtonGroup>
        </div>
      </div>
      
    </div>
  )
}

export default rightside
