import './Forms.css'
import Text from '../Text/Text'
import ListChoice from '../Listchoice/ListChoice'
import Bottom from '../Bottom/Botooom'


const Forms = () =>{

    const Skills = [
        "frontend",
        "backend",
        "engenharia de dados",
        "Ciência de dados",
        "design"

    ]


    return(

        <section className = 'forms'>
            <form>
                    <h2>Coloque seus dados pra logar</h2>
                    <Text label = "Nome" placeholder = "Digite seu nome" />
                    <Text label = "Email" placeholder = "Digite seu email" /> 
                    <Text label = "Senha" placeholder = "Digite sua senha" />
                    <ListChoice label = "Skills" itens= {Skills}/>
                    <Bottom text = "Login" />
                    

            </form>

        </section>

    )
}
export default Forms