import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className='selector flex mt-6 justify-center'>
            <h1 className='text-5xl tracking-wider font-bold text-black dark:text-white'>
                Worlde
            </h1>
            </div>
            <hr className='my-5 border-1 border-grey-secondary' />
        </header>
        )
}

export default Header;