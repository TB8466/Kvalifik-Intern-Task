import { Box, Center } from "@chakra-ui/react"
import { useState } from "react"
import Calendar from "./components/Calendar"
import Events from "./components/Events"

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [eventName, setEventName] = useState("");

  return (
    <Box
      bg='#F4F4F4'
      p='10'  
    >
      <Center>
        <Box>
          <Calendar date={selectedDate} setDate={setSelectedDate}/>
          <Events date={selectedDate} setDate={setSelectedDate} eventName={eventName} setEventName={setEventName}/>
        </Box>
      </Center>
    </Box>
  );
}

export default App;
