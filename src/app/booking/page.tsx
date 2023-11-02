import BookingForm from "@/components/BookingForm/page";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return null;
  const profile = await getUserProfile(session.user?.token);
  console.log(profile.data);

  return (
    <>
      {session && (
        <div>
          <div>{profile.data.name}</div>
          <div>{profile.data.email}</div>
          <div>{profile.data.tel}</div>
          <div>{profile.data.createdAt}</div>
        </div>
      )}
      <BookingForm></BookingForm>
    </>
  );
}
