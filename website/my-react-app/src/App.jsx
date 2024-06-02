import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {

  const passedList = [{pos:1, name:"zoya"},{pos:2, name:"bilal"},{pos:3, name:"shahnee"}];

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
      {passedList.length ? <List passedList={passedList}></List> : null}
      <Footer></Footer>
    </>
  );
}

export default App
