import { Container } from "semantic-ui-react"
import EventDashboard from "../features/events/dashboard/EventDashboard"
import NavBar from "./nav/NavBar"

/**
 * The main component of the application.
 *
 * @returns The rendered JSX elements.
 */
function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App

/**!SECTION
 * 
 */
