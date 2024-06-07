import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePic from './ProfilePic.jsx'
import MyComponent from './MyComponent.jsx'
import MyComponent2 from './MyComponent2.jsx'
import MyComponent3 from './MyComponent3.jsx'
import MyComponent4 from './MyComponent4.jsx'
import MyComponent5 from './MyComponent5.jsx'
import MyComponent6 from './MyComponent6.jsx'
import MyComponent7 from './MyComponent7.jsx'

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
      <MyComponent2></MyComponent2>
      <MyComponent3></MyComponent3>
      <MyComponent4></MyComponent4>
      <MyComponent5></MyComponent5>
      <MyComponent6></MyComponent6>
      <MyComponent7></MyComponent7>
      <Footer></Footer>
    </>
  );
}

export default App
