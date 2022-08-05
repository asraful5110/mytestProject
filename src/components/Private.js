import {Outlet} from 'react-router-dom';
//import useAuth from '../hooks/useAuth';
export default function Private(){
    //const auth = useAuth();

    //console.log(auth)
    return (
        <div>
           <Outlet />
        </div>
    )
}