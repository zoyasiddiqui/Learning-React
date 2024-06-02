import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
    <> 
      <Header></Header>
      {/* One way to declare elemenets is as follows , with just the one </> */}
      <UserGreeting isLoggedIn={true} username="Zoya"/> 

      {/* But I prefer this way , <> </> */}
      <Card></Card>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student></Student>
      <Button></Button>
      <Footer></Footer>
    </>
  );
}

export default App
