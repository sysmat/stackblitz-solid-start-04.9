"use client";
import { ErrorBoundary, For, Suspense, createResource } from "solid-js";
import { Reservation } from "~/routes/api/reservation";


export const fetchReservations = async (): Promise<Reservation[]> => (
    await fetch(`./api/reservations`, {
        method: 'GET',
    })).json();

// beacause is on the same route as todos it can not user route data, data must be combined on index level
export const ReservationsList = () => {

    const [reservations] = createResource<Reservation[]>(fetchReservations);

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