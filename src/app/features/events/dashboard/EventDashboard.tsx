import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../form/api/sampleData";

/**
 * Component for displaying the event dashboard.
 * 
 * @returns The rendered EventDashboard component.
 */
export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList 
        events = {sampleData}
        
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  )
}
