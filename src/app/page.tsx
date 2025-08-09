export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-lg text-gray-600 mb-8">
        Build full courses from a single prompt.
      </p>
      <a href="/login" className="bg-black text-white px-4 py-2 rounded-xl">
        Get Started
      </a>
    </main>
  );
}
