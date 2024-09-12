import React from 'react'
import { ModeToggle } from '@/components/themeToggler'
import Results from '@/components/Results'


const App : React.FC = () => {
  return (
    <div className='w-screen h-svh bg-secondary flex items-center p-8 justify-center'>
      <div className='w-screen lg:w-3/5 shadow-xl bg-background rounded-md h-[90%] px-6 py-2'>
        <div className='w-full h-[10%] text-secondary-foreground flex items-center justify-between'>
          <p className='text-lg font-semibold tracking-wide'>Lyrics Finder <span className='text-xs text-primary font-medium'>By Cygnuxxs</span></p>
          <ModeToggle />
        </div>
        <Results />
      </div>
    </div>
  )
}

export default App