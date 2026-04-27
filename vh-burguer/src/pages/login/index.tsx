// Estrutura padrão
// no return é neessário ter um pai para todas as tags
// nao é aconselhavel utilizar a div pois ela será um elemento que existe na nossa tela
// fragment - div pai que nao ira interferir na tela
// ao inves de escrever fragment pode usar a estrutura <> </>
// tag unitária não precisa de pai
// pode ter pai sem elementos filhos

import { useState } from 'react';
import styles from './login.module.css'
import { login } from '../api/authServie';

const Login = () => {
    const [email, setEmail] = useState<string>("");    //*modifica = armazena
    const [senha, setSenha] = useState<string>("");

    function autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            login(email,senha);
        }catch(e: any){
            alert(e.message);
        }
    }

    
    return (
        <>
            <main id={styles.main}>
                <img src="../imgs/hamburguer_login.png/" alt="Hambúrguer com igredientes caindo." />
                <div className={styles.campo_login}>
                    <h1>Login</h1>
                    <form id= {styles.formulario} onSubmit = {autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)}/> //*enquanto o usuario esta escrevendo ele ja estara pegando o email. ele deve ser setado
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="**********" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        </div>
                        <a className={styles.esq_senha} href="">Esqueceu sua senha?</a>
                        <button className={styles.botao_entrar}>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;