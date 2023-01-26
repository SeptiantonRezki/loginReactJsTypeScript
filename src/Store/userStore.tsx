import { createContext } from "react";
import { User } from "../Models";

interface currentUserInterface {
    currentUser: User | null,
    dispatch: React.Dispatch<React.SetStateAction<User | null>>,
}

const CurrentUserContext = createContext<currentUserInterface>({} as currentUserInterface);

export default CurrentUserContext;
