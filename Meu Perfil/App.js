import { Text, View, StyleSheet, Image, Linking} from 'react-native';


function calculoIdade(dataNascimento) {
  const dob = new Date(dataNascimento);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

const dataNascimento = '2003-12-29';
const age = calculoIdade(dataNascimento);
console.log(age);

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

handlePress = () => {
  Linking.openURL('https://github.com/AndreAugustoSS');
};


// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

let img = 'https://avatars.githubusercontent.com/u/112223123?v=4';
let imgGitHub = 'https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg';
let nome = 'André Augusto de Souza Soares';
let experiencia = 'Monitor em laboratório de informática';
let formacao1 = ' Técnico em Informática para Internet' ; 
let formacao2 = ' Análise e Desenvolvimento de Sistemas';
let certificacao1 = ' IOT (CISCO)' ; 
let certificacao2 = ' Cloud Computing (Azure)';
let certificacao3 = ' CiberSecurity (CISCO)';
let certificacao4 = ' JavaScript (Oracle)';
let projeto =  'Sistema e-commerce para venda de jogos';
let projeto2 =  'Sistema e-commerce para venda de roupas';
let projeto3 =  'Sistema e-commerce para venda de bolos';

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Meu perfil</Text>
      
      <Image source={{ uri: img }} style={styles.img} />

      <View style={styles.divInfs}>
          <Text style={styles.titleInfs}>Dados Pessoais</Text>
        <Text style={styles.textInfs}>{nome}</Text>
        <Text style={styles.textInfs}>{age} anos</Text>
        <Text style={styles.textInfs}>Gênero: Masculino</Text>
        <View style={styles.btnGitHub}>
          <Image source={{ uri: imgGitHub }} style={styles.imgGitHub} />
          <Text onPress={this.handlePress} style={styles.textInfsGithub}>GitHub</Text>
        </View>  
      </View>
      

      <View style={styles.divInfs}>
        <Text style={styles.titleInfs}>Certificações</Text>
        <Text style={styles.textInfs}>- {certificacao1}</Text>
        <Text style={styles.textInfs}>- {certificacao2}</Text>
        <Text style={styles.textInfs}>- {certificacao3}</Text>
        <Text style={styles.textInfs}>- {certificacao4}</Text>
       
        <View style={styles.ajust}></View>
      </View>

       <View style={styles.divInfs}>
        <Text style={styles.titleInfs}>Formação Acadêmica</Text>
        <Text style={styles.textInfs}>- {formacao1}</Text>
        <Text style={styles.textInfs}>- {formacao2}</Text>
        <View style={styles.ajust}></View>
      </View>

      <View style={styles.divInfs}>
        <Text style={styles.titleInfs}>Experiência</Text>
        <Text style={styles.textInfs}>{experiencia}</Text>
        <View style={styles.ajust}></View>
      </View>

     

      <View style={styles.divInfs}>
        <Text style={styles.titleInfs}>Projetos</Text>
        <Text style={styles.textInfs}>{projeto}</Text>
         <Text style={styles.textInfs}>{projeto2}</Text>
         <Text style={styles.textInfs}>{projeto3}</Text>
        <View style={styles.ajust}></View>
      </View>
      
    </View>
  );
}



// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------


// Estilização

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#086bff',
    padding: 1,
  },
  titlePage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  img: {
    alignSelf: 'center',
    width: 200,
    height: 220,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#f7f5f5',
  },
  divInfs: {
    alignSelf: 'center',
    marginTop: 12,
    width: 320,
    backgroundColor: '#fafafa',
    borderRadius: 10,
  },
  titleInfs: {
    textAlign: 'left',
    color: '#0a0a0a',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  textInfs: {
    color: '#0a0a0a',
    fontSize: 15,
    fontWeight: 'dark',
    marginLeft: 15,
    marginRight: 15,
  },

  // Botão do git
  btnGitHub: { 
    flexDirection: 'row',
    width: 76,
    borderRadius: 4,
    marginLeft: 13,
    marginRight: 3,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#0275d8',
  },
  textInfsGithub: {
    color: '#fff',
    fontWeight: 'bold'
  },

  // Logo do Git
  imgGitHub: {
    width: 16,
    height: 16,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 3,
    marginRight: 3,
  },
  ajust: {
    marginBottom: 10
  },
});