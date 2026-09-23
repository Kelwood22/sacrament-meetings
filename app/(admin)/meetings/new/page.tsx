import { addMeeting } from "@/lib/actions";

export default function NewMeetingPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Create Meeting
      </h1>

      <form action={addMeeting}>
        <input
          type="date"
          name="date"
          className="border p-2 w-full"
        />

        <select
          name="meeting_type"
          className="border p-2 w-full"
        >
          <option value="regular">Regular</option>
          <option value="testimony">Testimony</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
        </select>

        <input
          type="text"
          name="presiding"
          placeholder="Presiding"
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="conducting"
          placeholder="Conducting"
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="opening_prayer"
          placeholder="Opening Prayer"
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="closing_prayer"
          placeholder="Closing Prayer"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Meeting
        </button>
      </form>
    </main>
  );
}