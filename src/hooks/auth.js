import { useSelector } from "react-redux";


export const useAuth =() => {
  const {email,id,token,name, isLoading} = useSelector(state => state.user);

  return{
    isAuth: !!email,
    email,
    token,
    id,
    name,
    isLoading,
  }
}