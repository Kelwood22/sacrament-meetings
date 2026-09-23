"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  addMeeting as addMeetingDB,
  updateMeeting as updateMeetingDB,
  deleteMeeting as deleteMeetingDB,
} from "./meetings-db";

export type State = {
  errors?: {
    date?: string[];
    meeting_type?: string[];
    presiding?: string[];
    conducting?: string[];
    opening_prayer?: string[];
    closing_prayer?: string[];
  };
  message?: string | null;
};


const MeetingFormSchema = z.object({
  date: z.string().min(1, "Date is required"),

  meeting_type: z.string().min(
    1,
    "Meeting type is required"
  ),

  presiding: z.string().min(
    1,
    "Presiding leader is required"
  ),

  conducting: z.string().min(
    1,
    "Conducting leader is required"
  ),

  opening_prayer: z.string().min(
    1,
    "Opening prayer is required"
  ),

  closing_prayer: z.string().min(
    1,
    "Closing prayer is required"
  ),
});

export async function addMeeting(
    prevState: State,
    formData: FormData
): Promise<State> {
  const validatedFields =
    MeetingFormSchema.safeParse({
      date: formData.get("date"),
      meeting_type: formData.get("meeting_type"),
      presiding: formData.get("presiding"),
      conducting: formData.get("conducting"),
      opening_prayer: formData.get("opening_prayer"),
      closing_prayer: formData.get("closing_prayer"),
    });

if (!validatedFields.success) {
  return {
    errors:
      validatedFields.error.flatten().fieldErrors,
    message: "Missing required fields.",
  };
}

    try {
    await addMeetingDB({
    ...validatedFields.data,

    opening_hymn: {
        number: 1,
        title: "Opening Hymn",
    },

    sacrament_hymn: {
        number: 1,
        title: "Sacrament Hymn",
    },

    closing_hymn: {
        number: 1,
        title: "Closing Hymn",
    },

    announcements: [],
    ward_business: [],
    speakers: [],
    stake_business: false,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add meeting.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
    id: number,
    prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields =
    MeetingFormSchema.safeParse({
      date: formData.get("date"),
      meeting_type: formData.get("meeting_type"),
      presiding: formData.get("presiding"),
      conducting: formData.get("conducting"),
      opening_prayer: formData.get("opening_prayer"),
      closing_prayer: formData.get("closing_prayer"),
    });

  if (!validatedFields.success) {
return {
  errors:
    validatedFields.error.flatten().fieldErrors,
  message: "Missing required fields.",
};
}

    try {
    await updateMeetingDB(id, {
    ...validatedFields.data,
    
    opening_hymn: {
    number: 1,
    title: "Opening Hymn",
    },
    
    sacrament_hymn: {
    number: 1,
    title: "Sacrament Hymn",
    },
    
    closing_hymn: {
    number: 1,
    title: "Closing Hymn",
    },
    
    announcements: [],
    ward_business: [],
    speakers: [],
    stake_business: false,
    });
    
    revalidatePath("/meetings");
    redirect("/meetings");
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update meeting.");
    }
}

export async function deleteMeeting(
  id: number
) {
    try {
      await deleteMeetingDB(id);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete meeting.");
    }

    revalidatePath("/meetings");
    redirect("/meetings");

    return {
    errors: {},
    message: null,
    };
}
