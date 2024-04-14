import { useEffect, useState } from 'react'
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa'

const DarkModeToggle = () => {

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme === "dark")
      setDarkMode(true);
    else 
      setDarkMode(false);
  }, [])

  useEffect(() =>{
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  },[darkMode])


  return (
    <section>
      <button className='relative cursor-pointer w-16 h-8  flex items-center bg-black dark:bg-white rounded-full text-white dark:text-black'
      onClick={() => setDarkMode(!darkMode)}
      >
        <FaMoon className="text-white" size={18}/>
        <div className='absolute bg-white dark:bg-black w-6 h-6 rounded-full shadow-md tranform transition-transform duration-300'
        style={
          darkMode ? {left: "2px"} : {right: "2px"}
        }
        
        ></div>

        <BsSunFill 
          className='ml-auto text-yellow' size={18}
        />
      </button>
    </section>
  )
}

export default DarkModeToggle