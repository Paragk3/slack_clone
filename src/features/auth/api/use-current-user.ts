import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useCurrentuser = () =>{
    const data = useQuery(api.Users.current);
    const isLoading = data === undefined;

    return{data, isLoading};

};
    