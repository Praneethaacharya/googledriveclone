
// import Sidebar from sidebar
import Sidebar from './Sidebarpage';
import Navigationbar from './Navigationbar';
import Rightsidebar from './Rightsidebar'


export default function Home() {
  return (
    <div className='flex flex-col justify-normal'>
      <div className=' bg-white flex flex-row'>
        <div className='flex flex-col'>
          <Navigationbar />
          <Sidebar />
        </div>
        <Rightsidebar />
        
        
      </div>
    </div>
  );
}


