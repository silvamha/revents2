import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../form/api/sampleData";
import { useEffect, useState } from "react";

/**
 * Component for displaying the event dashboard.
 * 
 * @returns The rendered EventDashboard component.
 */

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}
export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])
  useEffect(() => {
    setEvents(sampleData)
  }, [])

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen &&
          <EventForm setFormOpen={setFormOpen} />
        }
      </Grid.Column>
    </Grid>
  )
}
