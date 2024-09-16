import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

const Settings = () => {
  

  return (
    <div className='flex gap-2 justify-between '>
      <Sidebar />
      <div className='mx-8 md:flex-1'>
      <Navbar />
        <h2 className='text-3xl font-bold uppercase mb-5'>Settings</h2>
      </div>
    </div>
  );
};

export default Settings;