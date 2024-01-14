'use client'
import Image from "next/image";
import ButtonLink from "../components/ButtonLink";
import ButtonBack from "../components/ButtonBack";
import { useState } from "react";

const Map = () => {
    const [location, setLocation] = useState("");
    const url: string = "/map/" + location;
    let next_btn: boolean = false;
    if (location === "") {
        next_btn = true;
    }
    return (
        <main className="h-screen w-screen flex flex-col">
            <ButtonBack 
                href="/passport"/>
            <div className="sm:hidden h-screen relative flex items-center justify-end ml-5">
                <div className="relative flex">
                    <div>
                        <Image
                        src="\passport-map.svg"
                        alt="passport"
                        width={400}
                        height={400}
                        priority
                        />
                    </div>
                    <div className="absolute flex flex-row h-full w-full items-center px-8 py-10">
                        <div className="flex items-center h-full w-full">
                            <label className="cursor-pointer">
                                <div className=" bg-white p-2">
                                    <input type="radio" className="peer sr-only" name="map" value="location1" onChange={e=>setLocation(e.target.value)}/>
                                    <div className="opacity-50 peer-checked:opacity-100 -rotate-3">
                                        <Image
                                        src="/san-jao-1.png"
                                        alt="san-jao-1"
                                        width={140}
                                        height={140}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-col h-full w-full">
                            <div className="flex justify-end items-start h-full w-full">
                                <label className="cursor-pointer">
                                    <div className=" bg-white p-2">
                                        <input type="radio" className="peer sr-only" name="map" value="location2" onChange={e=>setLocation(e.target.value)}/>
                                        <div className="opacity-50 peer-checked:opacity-100 rotate-6">
                                            <Image
                                            src="/san-jao-2.png"
                                            alt="san-jao-2"
                                            width={150}
                                            height={150}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex justify-end items-end h-full w-full">
                                <label className="cursor-pointer">
                                    <div className=" bg-white p-2">
                                        <input type="radio" className="peer sr-only" name="map" value="location3" onChange={e=>setLocation(e.target.value)}/>
                                        <div className="opacity-50 peer-checked:opacity-100 rotate-6">
                                            <Image
                                            src="/san-jao-3.png"
                                            alt="san-jao-3"
                                            width={150}
                                            height={150}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-sm:hidden h-screen relative flex items-center justify-center mx-5">
                <div>
                    <Image
                    src="\passport-map-full.svg"
                    alt="passport"
                    width={700}
                    height={700}
                    priority
                    />
                </div>
                <div className="absolute flex flex-auto w-full h-full p-10 max-h-[540px] max-w-[700px] items-center justify-center">
                    <div className="flex flex-col w-full h-full max-h-[460px] max-w-[620px]">
                        <div className="flex h-full w-full items-start justify-center pt-3">
                            <label className="cursor-pointer">
                                <div className=" bg-white p-2">
                                    <input type="radio" className="peer sr-only" name="map" value="location2" onChange={e=>setLocation(e.target.value)}/>
                                    <div className="opacity-50 peer-checked:opacity-100 rotate-6">
                                        <Image
                                        src="/san-jao-2.png"
                                        alt="san-jao-2"
                                        width={180}
                                        height={180}
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-row justify-between h-full w-full">
                            <div className="flex h-full w-full items-end justify-start">
                                <label className="cursor-pointer">
                                    <div className=" bg-white p-2">
                                        <input type="radio" className="peer sr-only" name="map" value="location1" onChange={e=>setLocation(e.target.value)}/>
                                        <div className="opacity-50 peer-checked:opacity-100 -rotate-3">
                                            <Image
                                            src="/san-jao-1.png"
                                            alt="san-jao-1"
                                            width={150}
                                            height={150}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="flex h-full w-full items-end justify-end">
                                <label className="cursor-pointer">
                                    <div className=" bg-white p-2">
                                        <input type="radio" className="peer sr-only" name="map" value="location3" onChange={e=>setLocation(e.target.value)}/>
                                        <div className="opacity-50 peer-checked:opacity-100 rotate-6">
                                            <Image
                                            src="/san-jao-3.png"
                                            alt="san-jao-3"
                                            width={180}
                                            height={180}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-10 mb-10">
                <ButtonLink
                    text="next"
                    href={url}
                    disabled={next_btn}/>
            </div>
        </main>
    );
}

export default Map;