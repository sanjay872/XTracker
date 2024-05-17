"use client"

import Profile from "@components/Profile";

import { useSession } from "next-auth/react";

const page=()=>{
    const {data: session} = useSession();
    return(
        <Profile
            name={session?.user?.name}
            email={session?.user?.email}
        />
    )
}

export default page;