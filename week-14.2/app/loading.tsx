import { ClipLoader } from "react-spinners"

export default function Loading() {
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <ClipLoader size={40} color="white" />
        </div>
    </div>
}