import { AppBar, Container, Toolbar, Typography,Box } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CarList from "./component/CarList";
 const queryClient = new QueryClient();

const App = () => {
  return (

  <Container maxWidth='xl' >
     <AppBar  position="static">
       <Toolbar>
         <Typography variant="h3" style={{ textAlign: 'center', width: '100%' }}>
          🚖 Car Show 🚘
         </Typography>
       </Toolbar>
     </AppBar>
     <QueryClientProvider client={queryClient}>
      <CarList />
    </QueryClientProvider>
   
  </Container >
 

   
     
  )
}

export default App