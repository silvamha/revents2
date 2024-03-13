import { Container } from "semantic-ui-react"
import EventDashboard from "../features/events/dashboard/EventDashboard"
import NavBar from "./nav/NavBar"
import { useState } from "react";

/**
 * The main component of the application.
 *
 * @returns The rendered JSX elements.
 */



function App() {
const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <NavBar setFormOpen = {setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} />
      </Container>
    </>
  );
}

export default App

/**!SECTION
 * 
 */
