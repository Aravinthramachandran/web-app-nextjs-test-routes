import Link from "next/link";

export default function Private() {
  return (
    <div className='flex items-center justify-items-center  p-8 pb-20 gap-9 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Link href='/'>Home</Link>
      <Link href='/public'>Public</Link>
      <Link href='/data'>Data</Link>
    </div>
  );
}
