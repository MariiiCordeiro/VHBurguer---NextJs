import { api } from "./api"; //verificar se foi colocado default

 export async function login(email: string, senha: string){
    try{
        //requisição:
      const response = await api.post("Autenticacao/login", {email, senha});

    }catch(error: any){
        throw new Error("Email ou senha inválidos!")
    }
}