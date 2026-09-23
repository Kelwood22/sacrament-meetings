"use client";

import { useActionState } from "react";
import { updateMeeting } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

const initialState = {
  message: null,
  errors: {},
};

export default function EditMeetingForm({
  meeting,
  id,
}: {
  meeting: SacramentMeeting;
  id: number;
}) {
  const updateMeetingWithId =
    updateMeeting.bind(null, id);

  const [state, formAction, isPending] =
    useActionState(updateMeetingWithId, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="date" className="block mb-2">
        Date
      </label>
      <input
        id="date"
        type="date"
        name="date"
        defaultValue={meeting.date}
        aria-describedby="date-error"
        className="border p-2 w-full"
      />
      <div
        id="date-error"
        aria-live="polite"
        className="text-red-600"
      >
        {state.errors?.date?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <label htmlFor="meeting_type" className="block mb-2">
        Meeting Type
      </label>
      <select
        id="meeting_type"
        name="meeting_type"
        defaultValue={meeting.meetingType}
        aria-describedby="meeting_type-error"
        className="border p-2 w-full"
      >
        <option value="regular">Regular</option>
        <option value="testimony">Testimony</option>
        <option value="stake">Stake</option>
        <option value="general">General</option>
      </select>
      <div
        id="meeting_type-error"
        aria-live="polite"
        className="text-red-600"
      >
        {state.errors?.meeting_type?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <label htmlFor="presiding" className="block mb-2">
        Presiding
      </label>
      <input
        id="presiding"
        type="text"
        name="presiding"
        defaultValue={meeting.presiding}
        aria-describedby="presiding-error"
        className="border p-2 w-full"
      />
      <div
        id="presiding-error"
        aria-live="polite"
        className="text-red-600"
      >
        {state.errors?.presiding?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <label htmlFor="conducting" className="block mb-2">
        Conducting
      </label>
      <input
        id="conducting"
        type="text"
        name="conducting"
        defaultValue={meeting.conducting}
        aria-describedby="conducting-error"
        className="border p-2 w-full"
      />
      <div
        id="conducting-error"
        aria-live="polite"
        className="text-red-600"
      >
        {state.errors?.conducting?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <label htmlFor="opening_prayer" className="block mb-2">
        Opening Prayer
      </label>
      <input
        id="opening_prayer"
        type="text"
        name="opening_prayer"
        defaultValue={meeting.openingPrayer}
        aria-describedby="opening_prayer-error"
        className="border p-2 w-full"
      />
      <div
        id="opening_prayer-error"
        aria-live="polite"
        className="text-red-600"
      >
        {state.errors?.opening_prayer?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      <label htmlFor="closing_prayer" className="block mb-2">
        Closing Prayer
      </label>
      <input
        id="closing_prayer"
        type="text"
        name="closing_prayer"
        defaultValue={meeting.closingPrayer}
        aria-describedby="closing_prayer-error"
        className="border p-2 w-full"
      />
      <div
        id="closing_prayer-error"
        aria-live="polite"
        className="text-red-600"
      >
        {state.errors?.closing_prayer?.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>

      {state.message && (
        <p
          aria-live="polite"
          className="text-red-600"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Saving..." : "Update Meeting"}
      </button>
    </form>
  );
}