import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="p-20 flex flex-col items-center gap-10">
        <h1 className="text-center text-6xl mb-10">Home page</h1>
        <Link
          href="/dashboard"
          className="inline-block text-3xl text-blue-500 hover:text-fuchsia-600 hover:underline underline-offset-8"
        >
          Dashboard
        </Link>
      </main>
    </>
  );
}
