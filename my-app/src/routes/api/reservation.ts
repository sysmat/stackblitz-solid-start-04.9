import { APIEvent } from "@solidjs/start/server/types";

export type Reservation = {
    id: number,
    name: string
}

const reservations: Reservation[] = [
    {id:1, name: "test"}
];

export async function GET({ request, params }: APIEvent) {
    return await reservations;
  }
  