import { useContext } from "react";
import NavigationContext from "../context/navigation";

const useNavigation = () => {
    return useContext();
}

export default useNavigation;