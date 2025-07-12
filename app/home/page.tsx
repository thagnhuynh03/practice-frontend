'use client';
import Link from "next/link";
import { inter } from "../util/font";
import Image from "next/image";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { Button, Divider } from "antd";

export default function HomePage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <div className={`${inter.className} text-[#5d5f79] dark:bg-white ${open ? 'opacity-50' : ''}`}>
                <div className="flex justify-between pt-7 px-5 xs:px-15 md:px-35">
                    <Image
                    src='/images/homepage/logo.svg'
                    alt='Logo'
                    width={50}
                    height={50}
                    />
                    <ul className="hidden xs:flex gap-4 md:gap-7">
                        <li className="hover:text-[#f15e50]"><Link href=''>Home</Link></li>
                        <li className="hover:text-[#f15e50]"><Link href=''>New</Link></li>
                        <li className="hover:text-[#f15e50]"><Link href=''>Popular</Link></li>
                        <li className="hover:text-[#f15e50]"><Link href=''>Trending</Link></li>
                        <li className="hover:text-[#f15e50]"><Link href=''>Categories</Link></li>
                    </ul>
                    <IoMenuSharp className="xs:hidden w-10 h-10" onClick={handleOpen}/>
                </div>
                <div className="grid xs:grid-cols-3 xs:grid-rows-[minmax(0, 1fr)_minmax(0, 1fr)_minmax(0, 1fr)] gap-5 px-5 xs:px-15 md:px-35 pt-7">
                    <div className="xs:col-span-2">
                        <Image
                        src='/images/homepage/image-web-3-desktop.jpg'
                        alt='Image of home page'
                        width={1460}
                        height={600}
                        />
                    </div>
                    
                    <div className="xs:row-start-2">
                        <h1 className="text-black font-extrabold text-4xl">The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className="flex flex-col justify-between space-y-10">
                        <p>We dive into the next of evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <Button type="primary" className="!font-medium !tracking-[0.2em] hover:!bg-[#00001a] hover:!text-white !p-5 !min-w-[100px] !w-1/2 !text-black !bg-[#f15e50] !rounded-none">READ MORE</Button>
                    </div>
                    <div className="xs:col-start-3 xs:row-start-1 xs:row-span-2 my-10 xs:my-0 py-8 px-4 bg-[#00001a]">
                        <h3 className="font-bold text-3xl text-[#e9ab53]">New</h3>
                        <div className="mt-10 pb-5">
                            <div>
                                <h5 className="font-bold text-white">Hydrogen VS Electric Cars</h5>
                                <p className="text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
                            </div>
                            <Divider className="!border-gray-500" />
                            <div>
                                <h5 className="font-bold text-white">The Downsides of AI Artistry</h5>
                                <p className="text-sm">What are the possible adverse effects of on-demand AI image generation?</p>
                            </div>
                            <Divider className="!border-gray-500" />
                            <div>
                                <h5 className="font-bold text-white">Is VC Funding Drying Up?</h5>
                                <p className="text-sm">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image
                        src='/images/homepage/image-retro-pcs.jpg'
                        alt='Image of home page'
                        width={100}
                        height={127}
                        className="w-[100px] h-[127px] object-cover"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-3xl text-[#f15e50]">01</h2>
                            <h4 className="font-bold text-black text-lg">Reviving Retro PCs</h4>
                            <p className="text-sm">What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image
                        src='/images/homepage/image-top-laptops.jpg'
                        alt='Image of home page'
                        width={100}
                        height={127}
                        className="w-[100px] h-[127px] object-cover"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-3xl text-[#f15e50]">02</h2>
                            <h4 className="font-bold text-black text-lg">Top 10 Laptops of 2022</h4>
                            <p className="text-sm">Our best picks for various needs and budgets.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Image
                        src='/images/homepage/image-gaming-growth.jpg'
                        alt='Image of home page'
                        width={100}
                        height={127}
                        className="w-[100px] h-[127px] object-cover"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-3xl text-[#f15e50]">03</h2>
                            <h4 className="font-bold text-black text-lg">The Growth of Gaming</h4>
                            <p className="text-sm">How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${open ? 'flex' : 'hidden'} flex-col gap-20  fixed top-0 right-0 w-3/4 h-screen bg-white z-10 pt-5 px-3`}>
                <IoCloseSharp className="w-10 h-10 self-end" onClick={handleClose} />
                <ul className="space-y-5 md:gap-7">
                    <li className="hover:text-[#f15e50]"><Link href=''>Home</Link></li>
                    <li className="hover:text-[#f15e50]"><Link href=''>New</Link></li>
                    <li className="hover:text-[#f15e50]"><Link href=''>Popular</Link></li>
                    <li className="hover:text-[#f15e50]"><Link href=''>Trending</Link></li>
                    <li className="hover:text-[#f15e50]"><Link href=''>Categories</Link></li>
                </ul>
            </div>
        </div>
        
    );
}