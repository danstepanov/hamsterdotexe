import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>hamster.exe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl text-white font-bold">
          Gucci X Kanye
        </h1>

        <p className="mt-3 text-white text-2xl">
          you're early...
        </p>
      </main>
    </div>
  )
}
