"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
    const route=useRouter();
    const { data: session } = useSession();
   
    return (
        <div>
            {session?.user ? route.push("/expenses") : (
                <>
                    <h1>Home</h1>
                    <p>Sign in to view your profile</p>
                </>
            )}
        </div>
    );
}
export default Home;