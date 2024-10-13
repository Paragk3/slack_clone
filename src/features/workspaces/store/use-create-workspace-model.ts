import {atom, useAtom} from "jotai";

const createWorkspaceModelAtom = atom(false);

const modelState = atom(false)

export const useCreateWokspaceModel = () => {
    return useAtom(modelState);
};
