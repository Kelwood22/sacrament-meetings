import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">
        Sacrament Meeting Planner
      </h1>

      <Image
        src="/chapel.webp"
        alt="Church meetinghouse"
        width={800}
        height={600}
        priority
      />

      <p>
        Plan and organize your sacrament meeting programs, including speakers, hymns, announcements, and prayers.
      </p>
    </div>
  );
}