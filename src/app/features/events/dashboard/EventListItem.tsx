import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

/**
 * Renders a single event item in the dashboard.
 */
export default function EventListItem({ event: any }) {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hotPhotoURL} />
                    </Item>
                    <Item.Content>
                        <Item.Header>{event.title}</Item.Header> 
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                    </Item.Content>
                </ItemGroup>
            </Segment>
            <Segment>
                <Icon name="clock" /> {event.date}
                <Icon name="marker" /> {event.venue}
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((attendee: any) => (
                        <EventListAttendee attendee = {attendee} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <span>Description of the Event</span>
                <Button color="teal" floated="right" content="view" />
            </Segment>
        </SegmentGroup>
    )
}