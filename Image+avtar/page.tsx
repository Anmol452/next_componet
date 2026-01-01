"use client";
import { useState, useRef } from "react";
import Image from "next/image";



const SignUp = ({ signUpOpen }: { signUpOpen?: any }) => {

const [loading, setLoading] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Image change handle karne ke liye function
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        const data = new FormData(e.currentTarget);
        // data.get("avatar") se aapko file mil jayegi
        
        // Form submission logic...
    };
  

return (
{/* --- Avatar Upload Section --- */}
                <div className="flex flex-col items-center mb-6">
                    <div 
                        className="relative w-24 h-24 mb-2 cursor-pointer group"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {avatarPreview ? (
                            <img 
                                src={avatarPreview} 
                                alt="Avatar Preview" 
                                className="w-full h-full object-cover rounded-full border-2 border-primary"
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark_border flex items-center justify-center border-2 border-dashed border-gray-400">
                                <span className="text-xs text-gray-500">Upload Photo</span>
                            </div>
                        )}
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="text-[10px] text-white font-medium">Change</span>
                        </div>
                    </div>
                    
                    <input 
                        type="file" 
                        name="avatar"
                        accept="image/*"
                        className="hidden" 
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                </div>
                  )

                  }
