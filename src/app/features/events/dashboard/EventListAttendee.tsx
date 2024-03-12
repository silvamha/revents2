/* eslint-disable @typescript-eslint/no-explicit-any */
import { List, Image } from "semantic-ui-react";
import { Attendee } from "../../../types/events";

type Props = {
    attendee: Attendee
}

/**
 * Renders a single attendee in the event list.
 * @returns JSX element representing the attendee.
 */
/**
 * Renders a single attendee in the event list.
 * @returns JSX element representing the attendee.
 */
export default function EventListAttendee({attendee}: Props) {
    return ( 
            <List.Item>
                <Image size="mini" circular src={attendee.photoURL} />
            </List.Item>    
    )
}