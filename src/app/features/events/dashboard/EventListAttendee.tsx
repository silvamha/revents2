import { List, Image } from "semantic-ui-react";

/**
 * Renders a single attendee in the event list.
 * @returns JSX element representing the attendee.
 */
/**
 * Renders a single attendee in the event list.
 * @returns JSX element representing the attendee.
 */
export default function EventListAttendee() {
    return (
        <>
            <List.Item>
                <Image size="mini" circular src="/user.png" />
            </List.Item>
        </>
    )
}