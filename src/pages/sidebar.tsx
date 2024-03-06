import { Chip, Image, Input, Progress, Textarea } from '@nextui-org/react'
import React from 'react'

const sidebar = () => {
  return (
    <div className='h-full bg-white'>
        <div className='w-fit h-fit ml-24'>
          <Input
            
            color='default'
            placeholder="New"
            className="h-16 w-28 mt-4 -ml-20 flex justify-center items-center shadow-yellow-950"
            startContent={
              <Image width={25} height={25} className='flex justify-center items-center' src="/addons.png" alt="NextUI Album Cover" />
            }
          />
        </div>
        <div className=' text-black flex flex-col text-sm'>
        <div className=' text-black flex flex-row mt-5 text-sm'>
        <Image width={23} height={23} src="/home.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
          <p className='ml-10'>Home</p>
        </div>
        <div className=' text-black flex flex-row mt-2  text-sm'>
        <Image width={23} height={23} src="/mydrive.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>My Drive</p>
        </div>
        <div className=' text-black flex flex-row mt-2  text-sm'>
        <Image width={23} height={23} src="/computer.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Computer</p>
        </div>
        <div className=' text-black flex flex-row mt-5  text-sm'>
        <Image width={23} height={23} src="/shared.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Shared with me</p>
        </div>
        <div className=' text-black flex flex-row mt-2  text-sm'>
        <Image width={23} height={23} src="/clock.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Recent</p>
        </div>
        <div className=' text-black flex flex-row mt-2  text-sm'>
        <Image width={23} height={23} src="/star.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Starred</p>
        </div>
        <div className=' text-black flex flex-row mt-5  text-sm'>
        <Image width={23} height={23} src="/spam.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Spam</p>
        </div>
        <div className=' text-black flex flex-row mt-2  text-sm'>
        <Image width={23} height={23} src="/bin.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Bin</p>
        </div>
        <div className=' text-black flex flex-row mt-2  text-sm'>
        <Image width={23} height={23} src="/cloud.png" alt="NextUI Album Cover" className='mr-4 ml-6'  />
        <p className='ml-10'>Storage</p>
        </div>
        <div className='w-40 h-3'>
        <Progress size='sm' aria-label="Loading..." value={60} className="h-2 ml-4 mt-3"/>
        </div>
        <p className=' text-black ml-5 text-sm mt-4'>
          9 GB out of 15 GB used
        </p>
        <Chip color="danger" variant="bordered" className='ml-4 mt-3 p-3'>Get more storage</Chip>
      </div>
      </div>
  )
}

export default sidebar
