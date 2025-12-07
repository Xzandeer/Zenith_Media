import { Navigation } from "@/components/navigation";

export default function Blog4Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d64535] via-[#f7af90] to-[#af4913]">
      {/* NAVIGATION */}
      <Navigation scrolled={false} />

      <div className="px-10 py-32 max-w-3xl mx-auto text-white">
        <h1 className="text-5xl font-bold mb-4">Blog 10 Title</h1>
        <p className="text-sm opacity-80 mb-10">
          By Author Name · Date
        </p>

        <p>
          Blog 10 content coming soon. You can edit this page later with your
          real blog text.
        </p>
      </div>
    </main>
  );
}
