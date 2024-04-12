import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className='flex mt-10 justify-center'>
            <h1 className='text-4xl'>
                Worlde
            </h1>
            </div>
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </header>
        )
}

export default Header;