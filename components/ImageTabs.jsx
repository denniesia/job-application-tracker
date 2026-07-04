"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";


export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState("organize");

    return (
        <section className="border-t bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    {/* Tabs */}
                    <div className="flex gap-2 justify-center mb-8">
                        <Button 
                            className={`text-md rounded-lg px-6 py-3 font-medium transistion-colors ${
                                activeTab === 'organize'
                                ? "bg-primary text-white" 
                                : "bg-gray-100 text-gry-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveTab("organize")} 
                        >
                            Organize Applications
                        </Button>
                        <Button 
                            className={`text-md rounded-lg px-6 py-3 font-medium transistion-colors ${
                                activeTab === 'hired'
                                ? "bg-primary text-white" 
                                : "bg-gray-100 text-gry-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveTab("hired")}
                        >
                            Get Hired
                        </Button>
                        <Button 
                        className={`text-md rounded-lg px-6 py-3 font-medium transistion-colors ${
                                activeTab === 'boards'
                                ? "bg-primary text-white" 
                                : "bg-gray-100 text-gry-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveTab("boards")}
                        >
                            Manage Boards
                        </Button>
                    </div>
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                    { activeTab === 'organize' 
                            && <Image 
                            src="/hero-images/hero1.png" 
                            alt="Organize Applications" 
                            width={1200}
                            height={800}
                        />}
                        { activeTab === 'hired' 
                            && <Image 
                            src="/hero-images/hero2.png" 
                            alt="Get Hired" 
                            width={1200}
                            height={800}
                        />}
                        { activeTab === 'boards' 
                            && <Image 
                            src="/hero-images/hero3.png" 
                            alt="Manage Boards" 
                            width={1200}
                            height={800}
                            />
                        }   
                    </div>
                </div>
            </div>
        </section>
    );

}