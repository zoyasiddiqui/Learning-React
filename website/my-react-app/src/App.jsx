import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <> 
      <Header></Header>
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
