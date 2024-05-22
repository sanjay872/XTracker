"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Home from "@components/Home";

const Main = () => {
    const route=useRouter();
    const { data: session } = useSession();
   
    return (
        <div>
            {session?.user ? route.push("/expenses") : (
                <>
                    <Home />
                </>
            )}
        </div>
    );
}
export default Main;