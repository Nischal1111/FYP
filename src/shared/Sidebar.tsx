import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'

const Sidebar = () => {

    const sideItems = [
        { title: "Home", link: "/" },
        { title: "Search", link: "/" },
        { title: "Messages", link: "/contacts" },
        { title: "Gallery", link: "/gallery" },
        { title: "Menus", link: "/menus" }
    ];



    return (
    <main className='w-[17%] border-r border-["#222838"] h-screen fixed text-textColor py-16 px-8 flex flex-col justify-between'>
        <section className='flex flex-col gap-16'>
            <h1 className='font-medium tracking-widest text-3xl'>Edia</h1>
            <section className='flex flex-col gap-8'>
                {sideItems.map((item) => (
                                <Link href={item.link} key={item.title}>
                                    <p className={`text-base`}>{item.title}</p>
                                </Link>
                            ))}
            </section>
        </section>
        <section>
            <Button className='w-3/4' type='button'>Logout</Button>
        </section>
    </main>
    )
}

export default Sidebar
