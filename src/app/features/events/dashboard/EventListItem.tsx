import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

/**
 * Renders a single event item in the dashboard.
 */
export default function EventListItem() {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size="tiny" circular src="/user.png" />
                    </Item>
                    <Item.Content>
                        <Item.Header>Event Title</Item.Header>
                        <Item.Description>
                            Hoested by Bob
                        </Item.Description>
                    </Item.Content>
                </ItemGroup>
            </Segment>
            <Segment>
                <Icon name="clock" /> Date
                <Icon name="marker" /> Venue
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
            <Segment clearing>
                <span>Description of the Event</span>
                <Button color="teal" floated="right" content="view" />
            </Segment>
        </SegmentGroup>
    )
}