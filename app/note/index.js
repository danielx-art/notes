import { Redirect, useLocalSearchParams } from "expo-router";

export default function TabsLayout() {
  
  const { id } = useLocalSearchParams();

    return (<Redirect href={`/edit/${id}`}/>)

}