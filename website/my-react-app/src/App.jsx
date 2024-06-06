import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePic from './ProfilePic.jsx'
import MyComponent from './MyComponent.jsx'

// React hook = Special function that allows functional components to use react features without
// writing class components

// useState() = A React hook that allows the creation of a stateful variable AND 
// a setter function to update its value in the virtual DOM

function App() {

  const passedList = [{pos:1, name:"zoya"},{pos:2, name:"bilal"},{pos:3, name:"shahnee"}];

  return(
    <> 
      <Header></Header>
      {/* One way to declare elemenets is as follows , with just the one </> */}
      <UserGreeting isLoggedIn={true} username="Zoya"/> 

      {/* But I prefer this way , <> </> */}
      <ProfilePic></ProfilePic>
      <Card></Card>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student></Student>
      <Button></Button>
      {passedList.length ? <List passedList={passedList}></List> : null}
      <MyComponent></MyComponent>
      <Footer></Footer>
    </>
  );
}

export default App
