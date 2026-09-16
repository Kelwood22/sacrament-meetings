import MeetingCard from "@/components/MeetingCard";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const query = params?.query ?? "";
  const currentPage =
    Number(params?.page) || 1;

  const meetings = await getMeetings(
    query,
    currentPage
  );

  const totalPages =
    await getMeetingsTotalPages(query);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        All Meetings
      </h1>

      <MeetingSearch />

      <div className="space-y-4">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}