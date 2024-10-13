
import { v } from "convex/values";
import {mutation, query } from "./_generated/server";
import { auth } from "./auth"; // Ensure this import is correct and the auth module has a getUserId function
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx,args) => {
        const userId = await getAuthUserId(ctx);

        if(!userId){
            throw new Error("Not authenticated");
        }
        const joinCode = '123456';

        const workspaceId = await ctx.db.insert("workspaces", {
            name: args.name,
            usedId: userId,
            joinCode,
        });

        const workspaces = await ctx.db.get(workspaceId);

        return {workspaceId};
    },
})

export const get = query({
    args:{},
    handler: async (ctx) => {
       return await ctx.db.query("workspaces").collect();
    },
});