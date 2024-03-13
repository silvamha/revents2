import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../form/api/sampleData";

/**
 * Component for displaying the event dashboard.
 * 
 * @returns The rendered EventDashboard component.
 */

type Props = {
  formOpen: boolean
}
export default function EventDashboard({ formOpen }: Props) {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={sampleData as AppEvent[]}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen &&
          <EventForm />
        }
      </Grid.Column>
    </Grid>
  )
}
