import Link from "next/link";

const pages = [
  { title: "Archetype Quiz", path: "/personalityquiz", date: "2025-09-14" },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pages</h1>
      <ul className="space-y-3">
        {pages.map((p) => (
          <li key={p.path} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Link href={p.path} className="text-blue-600 hover:underline font-medium">
              {p.title}
            </Link>
            <span className="text-sm text-gray-500">{p.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
