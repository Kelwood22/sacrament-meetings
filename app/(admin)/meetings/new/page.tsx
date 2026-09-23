"use client";

import { useActionState } from "react";
import { addMeeting } from "@/lib/actions";

const initialState = {
  message: null,
  errors: {},
};

export default function NewMeetingPage() {
  const [state, formAction, isPending] =
    useActionState(addMeeting, initialState);
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Create Meeting
      </h1>

      <form action={formAction}>
        <label htmlFor="date" className="block mb-2">
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          aria-describedby="date-error"
          className="border p-2 w-full"
        />
        <div id="date-error" aria-live="polite" className="text-red-600">
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
          aria-describedby="meeting_type-error"
          className="border p-2 w-full"
        >
          <option value="regular">Regular</option>
          <option value="testimony">Testimony</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
        </select>
        <div id="meeting_type-error" aria-live="polite" className="text-red-600">
          {state.errors?.meeting_type?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>

        <label htmlFor="presiding" className="block mb-2">
          Presiding
        </label>
        <input
          type="text"
          aria-describedby="presiding-error"
          id="presiding"
          name="presiding"
          placeholder="Presiding"
          className="border p-2 w-full"
        />
        <div id="presiding-error" aria-live="polite" className="text-red-600">
          {state.errors?.presiding?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>

        <label htmlFor="conducting" className="block mb-2">
          Conducting
        </label>
        <input
          type="text"
          aria-describedby="conducting-error"
          id="conducting"
          name="conducting"
          placeholder="Conducting"
          className="border p-2 w-full"
        />
        <div id="conducting-error" aria-live="polite" className="text-red-600">
          {state.errors?.conducting?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>

        <label htmlFor="opening_prayer" className="block mb-2">
          Opening Prayer
        </label>
        <input
          type="text"
          aria-describedby="opening_prayer-error"
          id="opening_prayer"
          name="opening_prayer"
          placeholder="Opening Prayer"
          className="border p-2 w-full"
        />
        <div id="opening_prayer-error" aria-live="polite" className="text-red-600">
          {state.errors?.opening_prayer?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>

        <label htmlFor="closing_prayer" className="block mb-2">
          Closing Prayer
        </label>
        <input
          type="text"
          aria-describedby="closing_prayer-error"
          id="closing_prayer"
          name="closing_prayer"
          placeholder="Closing Prayer"
          className="border p-2 w-full"
        />
        <div id="closing_prayer-error" aria-live="polite" className="text-red-600">
          {state.errors?.closing_prayer?.map((error) => (
            <p key={error}>{error}</p>
          ))}
          </div>

        {state.message && (
            <p aria-live="polite" className="text-red-600">
              {state.message}
            </p>
          )}

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isPending ? "Saving..." : "Save Meeting"}  
        </button>
      </form>
    </main>
  );
}