import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>hamster.exe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="p-5 border-4 border-double w-64 text-center sm:w-auto">
          <h1 className="text-6xl text-white font-bold">
            Gucci X Kanye</h1>
        </div>
        <p className="mt-3 text-white text-2xl">
          you're early...
        </p>
      </main>
    </div>
  )
}
