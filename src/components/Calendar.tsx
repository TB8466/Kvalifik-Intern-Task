import { background, Box, Grid, GridItem, Tab, Tabs, TabPanel, TabPanels, TabList, Button} from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  date: number
  setDate : any
}

const Calendar: FC<Props> = (props) => {
  const today = new Date();

  function displayToday(){
    let monthName;
    switch(today.getMonth()){
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
    return <h1>{monthName} {today.getDate()+1} {today.getFullYear()}</h1>
  }

  function selectDay(x : number){
    props.setDate(() => x)
  }

  function createCalender(x : number){
    const month = today.getMonth()+x;
    const year = today.getFullYear();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfLastMonth = new Date(year, month, 0);
    
    const arr = [];
    //Last month
    //Not Monday
    if(firstDayOfMonth.getDay()!==1){
      //Sonday
      if (firstDayOfMonth.getDay()===0){
        for(let i = 6; i>0; i--){
          arr.push(<GridItem 
            color="#cccccc"
            >
              {lastDayOfLastMonth.getDate()+1-i}
              
            </GridItem>)
        }
      }
      else{
        //Tuesday-Saturday
        for(let i = firstDayOfMonth.getDay()-1; i>0; i--){
          arr.push(
          <GridItem 
            color="#cccccc"
            >
              {lastDayOfLastMonth.getDate()+1-i}
            </GridItem>)
        }
      }
    }
    //This month
    for(let i = 1; i<=daysInMonth; i++){        
        arr.push(
          <GridItem
            id={String(i)}
          >
              <Button
              w="48px"
                _hover={{
                background: "#bfb2c2"
                }}
                _focus={{
                  bg: "#a970b3"
                }}
                onClick={() => selectDay(Number(""+(month+1)+i))}
              >
                {i}
              </Button>
          </GridItem>
        );
    }
    return arr;
    
  }

  return (
    <Box 
      w='600px'
      bg='white'
      h='500px'
      borderRadius='13px'
      boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
      mb='10'
      display='flex'
      flexDirection="column"
      justifyContent='center'
      alignItems='center'
    >
      <Box
        fontWeight="bold"
      >{displayToday()}</Box>
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab
            bg="#a970b3"
            color="white"
            borderRadius="50%"
            fontWeight="bold"
          >
            &#60;
            </Tab>
          <Tab>Today</Tab>
          <Tab
            bg="#a970b3"
            color="white"
            borderRadius="50%"
            fontWeight="bold"
          >
            &#62;
          </Tab>
        </TabList>
      
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns="repeat(7, 1fr)"
              gap={2}
            >
              <GridItem>Mon</GridItem>
              <GridItem>Tue</GridItem>
              <GridItem>Wed</GridItem>
              <GridItem>Thu</GridItem>
              <GridItem>Fri</GridItem>
              <GridItem>Sat</GridItem>
              <GridItem>Son</GridItem>
              {createCalender(-1)}
            </Grid>
          </TabPanel>
          
          <TabPanel>
            <Grid
              templateColumns="repeat(7, 1fr)"
              gap={2}
            >
              <GridItem>Mon</GridItem>
              <GridItem>Thu</GridItem>
              <GridItem>Wed</GridItem>
              <GridItem>Thu</GridItem>
              <GridItem>Fri</GridItem>
              <GridItem>Sat</GridItem>
              <GridItem>Son</GridItem>
              {createCalender(0)}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateColumns="repeat(7, 1fr)"
              gap={2}
            >
              <GridItem>Mon</GridItem>
              <GridItem>Thu</GridItem>
              <GridItem>Wed</GridItem>
              <GridItem>Thu</GridItem>
              <GridItem>Fri</GridItem>
              <GridItem>Sat</GridItem>
              <GridItem>Son</GridItem>
              {createCalender(1)}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
export default Calendar
