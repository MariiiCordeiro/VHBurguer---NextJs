//Arquivo que será renderizado inicialmente, quando o comando npm run dev ou quando não há algum redirecionamento vem para cá
export async function getServerSideProps(){
  return{
    redirect:{
      destination:"/home/",
      permanent: false,   //redirecionamento para home esta false pois sempre ao carregar iria para home
    },
  };
}

export default function Index(){
  return null;
}
