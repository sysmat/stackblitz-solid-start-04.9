"use client";
import { ErrorBoundary, For, Suspense, createResource } from "solid-js";
import { Reservation } from "~/routes/api/reservation";

export const ReservationsList = () => {

  const [reservations] = createResource(async () => {
    const response = await fetch("./api/reservations");
    return (await response.json()) as Reservation[];
  });    

    return (
        <ErrorBoundary fallback={err => <p>Napaka pri pridobivanju rezervacij</p>}>
            <Suspense fallback={<p>loading...</p>}>
                <ul>
                    <For each={reservations()}>
                        {(sub) => (
                            <li class="todo pending">
                                <label>{sub.id}</label>
                                &nbsp;&nbsp;
                                <label>{sub.title}</label>
                            </li>
                        )}
                    </For>
                </ul>
            </Suspense>
        </ErrorBoundary>


    )
}