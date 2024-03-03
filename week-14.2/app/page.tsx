import axios from "axios";

async function getUserDetails() {
  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}
export default async function Home() {
  const user = await getUserDetails();

  return (
    <div className="flex w-48 m-auto h-screen justify-center flex-col items-center ">
      <div className="border-gray-400 border-[1px] p-4">
        <div>{user?.name}</div>
        <div>{user?.email} </div>
      </div>
    </div>
  );
}
