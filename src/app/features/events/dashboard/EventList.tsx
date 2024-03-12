import EventListItem from "./EventListItem";


/**
 * Renders a list of event items.
 *
 * @returns The rendered EventList component.
 */
export default function EventList(props: any) {
  return (
    <>
    {props.events.map ((event: any) => (
   <EventListItem event = {event} />   
    ))}
    </>
  )
}