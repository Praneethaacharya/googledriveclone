"use client"
import { Button, Checkbox, Link, Listbox, ListboxItem, Progress, Radio, RadioGroup, Spacer } from '@nextui-org/react'
import { color, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const Settingpage = () => {

  const [selectedOption, setSelectedOption] = useState<string>('Home');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedOption = localStorage.getItem('selectedOption');
      if (storedOption) {
        setSelectedOption(storedOption);
      }
    }
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedOption', value);
    }
  };


  const [selecteddensity, setSelecteddensity] = useState<string>('Density');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedOption = localStorage.getItem('selecteddensity');
      if (storedOption) {
        setSelecteddensity(storedOption);
      }
    }
  }, []);

  const handleDensityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelecteddensity(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selecteddensity', value);
    }
  };
  
  return (
    <div className=' bg-white text-black'>
      <div className='flex flex-col'>
        <p className='ml-16 mt-4 text-xl'>Settings</p>
        <div className='ml-3 mt-6 w-60'>
          <Listbox>
            <ListboxItem key="gen" className='rounded-full pl-6' >General</ListboxItem>
            <ListboxItem key="notif" className='rounded-full pl-6'>Notifications</ListboxItem>
            <ListboxItem key="manage" className='rounded-full pl-6'>Manage apps</ListboxItem>
          </Listbox>
        </div>
      </div>
      <div className='ml-72 -mt-28'>


        <p className=' text-2xl'>Storage</p>
        <Progress size='sm' aria-label="Loading..." value={60} className="h-2 w-48 mt-3" />
        <p className='mb-4'>9 GB of 15 GB used</p>
        <Button color="default" variant="bordered" className='rounded-full'>
          <p className='text-red-700 font-medium p-4 '>Buy storage</p>
        </Button>
        <Button color="default" variant="bordered" className='rounded-full ml-4'>
          <p className='text-red-700 font-medium p-4 '>View items taking up storage</p>
        </Button>


        <hr className='mt-5 w-[800px]' style={{ height: '1px', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
        <p className=' text-2xl mt-4'>Start Page</p>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          <Radio value="Home" className='mt-2' >Home</Radio>
          <Radio value="MY-Drive" className='mt-2' >My Drive</Radio>
        </RadioGroup>


        <hr className='mt-5 w-[800px]' style={{ height: '1px', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
        <p className=' text-2xl mt-4'>Density</p>
        <RadioGroup value={selecteddensity} onChange={handleDensityChange}>
          <Radio value="Comfortable" className='mt-2'>Comfortable</Radio>
          <Radio value="Cozy" className='mt-2'>Cozy</Radio>
          <Radio value="Compact" className='mt-2'>Compact</Radio>
        </RadioGroup>


        <hr className='mt-5 w-[800px]' style={{ height: '1px', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
        <p className=' text-2xl mt-4'>Uploads</p>
        <Checkbox className='mt-2' radius="none">Convert uploads to google docs editor format</Checkbox>


        <hr className='mt-5 w-[800px]' style={{ height: '1px', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
        <p className=' text-2xl mt-4'>Offline</p>
        <Checkbox className='mt-2' radius="none">Create, open and edit your recent Google Docs, Slides and Sheets files on this devide while offline  </Checkbox>
        <div className='ml-7'><br /> Not recommended on public or shared computers. <Link href="https://support.google.com/drive/answer/2375012?hl=%7B$language%7D" target='blank' size="sm">Learn more</Link></div>


        <hr className='mt-5 w-[800px]' style={{ height: '1px', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
        <p className=' text-2xl mt-4'>Language</p>
        <Button color="default" variant="bordered" className='rounded-full mt-3'>
          <p className='text-blue-500 font-medium p-4 '>Change language settings</p>
        </Button>


        <hr className='mt-5 w-[800px]' style={{ height: '1px', borderWidth: '0', color: 'gray', backgroundColor: 'gray' }} />
        <p className=' text-2xl mt-4'>Privacy</p>
        <Button color="primary" variant="light" className='mt-3 rounded-full font-medium'>
          Manage search history
        </Button>
        <div className='w-[725px] text-small ml-2 mt-2'>
          <p>Search history includes things that you searched for in Google Workspace. The searches stored by Google workspace are used to give more personalised experiences, including faster searches and more helpful content recommendations</p>
          <div className='m-28'></div>
        </div>
      </div>
    </div>
  )
}

export default Settingpage
