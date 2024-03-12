/* eslint-disable @typescript-eslint/no-explicit-any */
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[]
}

/**
 * Renders a list of event items.
 *
 * @returns The rendered EventList component.
 */
export default function EventList({events}: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  )
}