"use client";

import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { user } from "./user-action";
export const dynamic = "force-dynamic";

export default function Data() {
  const { execute, result } = useAction(user);

  return (
    <div className='flex flex-col  gap-9  sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='flex items-center justify-items-center  gap-9 '>
        <Link href='/'>Home</Link>
        <Link href='/private'>Private</Link>
        <Link href='/public'>Public</Link>
      </div>

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
        onClick={() => {
          execute();
        }}
      >
        get user
      </button>

      {result && (
        <div>
          <h1>Received from Database</h1>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
