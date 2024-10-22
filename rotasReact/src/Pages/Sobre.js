import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';

export default function Sobre() {
  const [contatos,setContatos] = useState({});
  
  const listContatos = () => {
    axios
    .get("http:// ip /contatos")
    .then((resposta) => {
      setContatos(resposta.data)
    })
    .catch((error) =>{
      console.error("Erro ao buscar contatos", error)
    })

    
  }

  useEffect(() => {
    listContatos();
  },{})
  return (
    <View style={styles.container}>
      <Text>Lista de contatos</Text>
      (contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View>
            <Text>(contato.nome)</Text>
            <Text>(contato.telefone)</Text>
          </View>
        ))
      ) : (
        <Text>Nenhum contaot disponivel</Text>
      ))
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tile:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:10
  },
  contatoItem:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:"#ccc"
  },
  noContacts:{
    fontSize:16,
    color: "gray",
    textAlig:"center",
    marginTop:20
  }
});