import React , {useState}from "react";
import { Text, View , FlatList , Button , ActivityIndicator} from "react-native";
import axios from "axios";

import UserCard from "./Components/UserCard/UserCard";

const URL = "https://jsonplaceholder.typicode.com/users"

function App(){
    const [loading , setLoading] = useState(false)
    const [userList,setUserList] = useState([])

  async function fetchData(){
    setLoading(true);
    const response = await axios.get(URL)
    setLoading(false);

    setUserList(response.data)

  }

return(
  <View>
  <Text>Hello Api</Text>
  {   loading ? (<ActivityIndicator size="large"/>)  : (
  
  <FlatList
  data={userList}
  renderItem={({item}) => <UserCard 
  name={item.name} email={item.email} username={item.username}/>}/>
)}
  <Button title="fetch data" onPress={fetchData}/>
  </View>
  )
}

export default App;