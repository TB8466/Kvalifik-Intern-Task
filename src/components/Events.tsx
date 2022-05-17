import { Box, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'

type Props = {
  date: number
  setDate : any
  eventName : string
  setEventName : any
}

const events : any = [{name: "Apply for Kvalifik internship", date: 517}, {name: "Make a cool calendar", date: 517}];

function createEvent(name : string, date : number){
  const event = {
    name: "",
    date: 0
  }
  event.name = name;
  event.date = date;
  events.push(event);
  console.log(events);
}


function showEvents(date : number){
  console.log(date);
  const arr = [];
  for(let i = 0; i<events.length; i++)
    if(date === events[i].date)
      {
        console.log("yes");
        
        arr.push(
        <Box
          m="10px"
          bg='white'
          h="60px"
          w="600px"
          display='flex'
          justifyContent='center'
          alignItems='center'
          borderRadius='13px'
          boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
        >
          {events[i].name}
          <Button
            position="absolute"
            left="75%"
            h="40px"
            w="40px"
            padding="8px"
            bg="#d9dadb"
            color="white"
            fontSize="15px"
            _hover={{
              background: "red"
              }}
            borderRadius="50%"
            onClick={() => deleteEvent(i)}
          >
            x
            </Button>
        </Box>
        );
      }
    else{
      console.log("no");     
    }
    return arr;
}

function deleteEvent(index : number){
  console.log("deleted index:",index);
  
  events.splice(index,1);
}
const Events: FC<Props> = (props) => {
  
  function displayToday(){
    const month = Number(String(props.date).slice(0,1))
    const day = Number(String(props.date).slice(1,3))
    console.log("month",month,"day",day);
    
    let monthName;
    switch(month-1){
      case 0: monthName = "January"
      break;
      case 1: monthName = "February"
      break;
      case 2: monthName = "March"
      break;
      case 3: monthName = "April"
      break;
      case 4: monthName = "May"
      break;
      case 5: monthName = "June"
      break;
      case 6: monthName = "July"
      break;
      case 7: monthName = "August"
      break;
      case 8: monthName = "September"
      break;
      case 9: monthName = "Oktober"
      break;
      case 10: monthName = "November"
      break;
      case 11: monthName = "December"
      break;
    }
    return <h1>{monthName} {day} </h1>
  }

  const handleChange = (ev : any) => props.setEventName(ev.target.value)
  
  return (
    <Box 
      w='600px'
      borderRadius='13px'
      display='flex'
      flexDirection="column"
      justifyContent='center'
      alignItems='center'
    >
      
      <Box
        position="relative"
        right="40%"
        fontSize="30px"
      >
        {displayToday()}
      </Box>

      <Box
        bg='white'
        w="600px"
        h="60px"
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius='13px'
        boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
      >
        <Input
          h="60px"
          value={props.eventName}
          onChange={handleChange}
          placeholder="Add new event"
        >
        </Input>
        
        <Button
          position="absolute"
          left="75%"
          bg="#a970b3"
          color="white"
          fontSize="40px"
          h="40px"
          w="40px"
          borderRadius='50%'
          display="flex"
          alignItems="center"
          textAlign="center"
          onClick={() => createEvent(props.eventName,props.date)}
        >
          +
        </Button>
      </Box>
      <br></br>
      <Box>
        {showEvents(props.date)}
      </Box>
    </Box>
  )
}
export default Events