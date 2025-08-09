import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mt-8 mb-4">Welcome to Event Planner</h2>
        <p className="text-gray-700">
          Plan your perfect event with ease. Choose event types, themes, menus, and vendors — all in one place.
        </p>
      </main>
    </>
  );
}
