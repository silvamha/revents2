/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../types/events";


type Props = {
    event: AppEvent
}
/**
 * Renders a single event item in the dashboard.
 */
export default function EventListItem({ event }: Props) {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header>{event.title}</Item.Header>
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <Icon name="clock" /> {event.date}
                <Icon name="marker" /> {event.venue}
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((attendee: any) => (
                        <EventListAttendee key ={attendee.id} attendee ={attendee} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <span>Description of the event {event.description}</span>
                <Button color="teal" floated="right" content="view" />
            </Segment>
        </SegmentGroup>
    )
}