import {useAppSelector} from "../../app/hooks.ts";
import {userState} from "../../Components/Users/UsersSlice.ts";
import HeaderForUser from "./HeaderForUser.tsx";
import HeaderForAnon from "./HeaderForAnon.tsx";


const Header = () => {
    const user = useAppSelector(userState);
    return (
        <>
            {user ? (
                <HeaderForUser user={user}/>
            ) : (
                <HeaderForAnon/>
            )}
        </>
    );
};

export default Header;