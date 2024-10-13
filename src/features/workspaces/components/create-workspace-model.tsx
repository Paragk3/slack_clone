'use client'
import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateWokspaceModel } from "../store/use-create-workspace-model";


export const CreateWokspaceModel = () => {
    const [open, setOpen] = useCreateWokspaceModel();
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add a workspace
                    </DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <Input
                      value=""
                      disabled={false}
                      required
                      autoFocus
                      minLength={3}
                      placeholder="Workspace name e.g. 'Work','Personal','Home' "
                    />
                    <div className="flex justify-end">
                        <Button disabled = {false}>
                            Create
                        </Button>

                    </div>

                </form>
            </DialogContent>

        </Dialog>

    )
}