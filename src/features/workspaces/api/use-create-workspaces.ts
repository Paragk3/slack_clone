import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback } from "react";

type RequestType = any;
type Responsetype = any;

type options = {
    onSucess?: (data: Responsetype) => void;
    onError?: () => void;
    onSettled?: () => void;
};

export const useCreateWorkspaces = () => {
    const mutation = useMutation(api.workspaces.create);

    const mutate = useCallback(async(values:RequestType, options?:options) => {
        try{
                const response = await mutation(values);
                options?.onSucess?.(response);
        }catch{
            options?.onError?.();

        }finally{
            options?.onSettled?.();
        }
    }, [mutation]);
    return{
        mutate,
    }
    
}