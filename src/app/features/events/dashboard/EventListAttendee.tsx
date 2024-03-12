import { List, Image } from "semantic-ui-react";

/**
 * Renders a single attendee in the event list.
 * @returns JSX element representing the attendee.
 */
/**
 * Renders a single attendee in the event list.
 * @returns JSX element representing the attendee.
 */
export default function EventListAttendee((attendee: any) =>
) {
    return (
        <>
            <List.Item>
                <Image size="mini" circular src={attendee.photoURL} />
            </List.Item>
        </>
    )
}