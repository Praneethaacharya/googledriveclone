import { Input, Navbar, Spacer } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// import { Link } from 'react-router-dom'
import Settingpage from './Settingpage'

const Navigationbar = () => {
  return (
    <div className='ml-20'>
    <Navbar>
        <Image width={40} height={40} src="/Googledrive.png" alt="NextUI Album Cover" className="-ml-20" />
        <p className="flex flex-row font-normal  text-2xl text-inherit text-stone-950">Drive</p>
        <div className="flex flex-wrap md:flex-nowrap gap-4 ml-12 ">
          <Input
            className="rounded-full ml-24 font-medium"
            style={{ width: '900px' }}
            height={100}
            size={"lg"}
            radius="full"
            type="email"
            placeholder="Search in Drive"
            startContent={
              <Image width={45} height={45} src="/search.png" alt="NextUI Album Cover" className="" />
            }
            endContent={
              <Image width={45} height={45} src="/advance.png" alt="NextUI Album Cover" className="-ml-64 " />
            }
          />
        </div>
        <Spacer x={72} />
        <Image width={20} height={20} src="/offline.png" alt="NextUI Album Cover" className="gap-3 m-1 " />
        <Image width={20} height={20} src="/support.png" alt="NextUI Album Cover" className="gap-3 ml-1 -mr-2" />
        {/* <div className='w-30 h-30 mt-4'> */}
        <Link href='/Settingpage' >
        <Image width={40} height={20} src="/settings.png" alt="NextUI Album Cover" className="w-40 h-5 m-3 gap-3 "/>
        </Link>
        {/* </div> */}
        
        <Image width={20} height={20} src="/googleApps.png" alt="NextUI Album Cover" className="gap-3 ml-4" />
        <Image width={30} height={30} src="/profile.png" alt="NextUI Album Cover" className="gap-3 ml-3" />
      </Navbar>
      </div>
  )
}

export default Navigationbar
