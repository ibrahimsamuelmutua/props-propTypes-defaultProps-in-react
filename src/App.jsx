//props: refers to read-only properties  which can be shared between components
// a parent compontent is able to send data to  a child component
import Student from './Student.jsx'
function App() {

  return (
    <>
    <Student
    name= "carl Doe"
    age ={20}
    isStudent ={true}
    />
    
    <Student
    name= "John Mac"
    age ={33}
    isStudent ={false}
    />

    <Student

    name= "James Austin"
    age ={22}
    isStudent ={true}
    />
    </>





  )
}

export default App
