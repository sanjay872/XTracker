"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect,useState } from "react";
import { useSession,signIn,signOut,getProviders } from "next-auth/react";
import {useRouter} from "next/navigation";

const Nav=()=>{
    const {data:session}=useSession();
    const [providers,setProviders]=useState(null);
    const router=useRouter();
    
    useEffect(()=>{
        const fetchData=async()=>{
            const providers=await getProviders();
            setProviders(providers);
        }
        fetchData();
    },[])

    const signOutAndRedirect=async ()=>{
        await signOut({ redirect: false })
        router.push("/"); // Redirect to the dashboard page after signing out})
    }
    
    return(
        <nav className="flex w-full items-center px-5 py-5 gap-x-10 bg-red-600 text-white">
            <Link href='/' className="pr-10 text-2xl">XTracker</Link>
            <div className="flex w-full items-center justify-end gap-x-5">
                {session?.user?(
                    <>
                        <button className="black_btn" 
                        onClick={signOutAndRedirect}>Sign Out</button>
                        <Link href='/profile'>
                        <Image
                            src={session?.user.image}
                            width={40}
                            height={50}
                            className="rounded-full"
                            alt="Profile"
                        />
                        </Link>
                    </>
                ):(
                    <>
                        {providers && Object.values(providers).map((provider)=>{
                            return(
                                <button className="outline_btn" key={provider.name} onClick={()=>signIn(provider.id)}>
                                    Sign in with {provider.name}
                                </button>
                            )
                            }
                        )}
                    </>
                )}
            </div>

        </nav>
    )
}
export default Nav;