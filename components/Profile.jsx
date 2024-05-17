const Profile = ({name,email})=>{
    return(
        <div className="flex flex-col items-center gap-y-5">
            <div className="text-2xl font-bold">Profile</div>
            <div className="flex flex-col gap-y-5">
                <div className="flex gap-x-5">
                    <div className="font-bold">Name:</div>
                    <div>{name}</div>
                </div>
                <div className="flex gap-x-5">
                    <div className="font-bold">Email:</div>
                    <div>{email}</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;