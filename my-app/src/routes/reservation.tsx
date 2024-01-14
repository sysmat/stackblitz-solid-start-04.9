import { Title } from "@solidjs/meta";
import { ReservationsList } from "~/components/ReservationList";

export default function Home() {
    return (
      <main>
        <Title>reservations</Title>
        <h1>reservations</h1>
        <ReservationsList />
      </main>
    );
  }