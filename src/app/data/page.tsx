import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Data() {
  console.log("Data page is being rendered");

  const user = await prisma.user.findUnique({
    where: {
      email: "test@test.com",
    },
  });

  return (
    <>
      <div className='flex items-center justify-items-center  p-8 pb-20 gap-9  sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <Link href='/'>Home</Link>
        <Link href='/private'>Private</Link>
        <Link href='/public'>Public</Link>
      </div>

      <div className='flex items-center justify-items-center  p-8 pb-20 gap-9  sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div>
          <h1>Received from Database:</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
