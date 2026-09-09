import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Meetings
      </h2>
      <NavLinks />
      {children}
    </section>
  );
}