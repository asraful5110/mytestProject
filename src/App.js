// import global css
import "./styles/global.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Title, Text, Button, Input } from "./styled_components/bassic_styled";

import Navbar from "./components/navbar/Navbar";

// import router

import Routers from './routes/Routers'

function App() {
  return (
    <>
      <Navbar />
        
        <Routers />
  
      <div className="container">
        <Title color="var(--tomato)">This is a title</Title>
        <Text>
          Asraful islam ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
          sapiente cumque nemo animi nam molestiae! Repellat laborum, doloremque
          placeat quasi eveniet dicta officiis autem repellendus, provident
          nihil vel consectetur numquam possimus. Temporibus fugit architecto
          laboriosam atque necessitatibus. Similique aperiam aut suscipit
          quisquam fugiat recusandae odit, itaque error eius, pariatur
          obcaecati?
        </Text>
        <Input placeholder="your name" />
        <Button>Submit</Button>
      </div>
    </>
  );
}

export default App;
