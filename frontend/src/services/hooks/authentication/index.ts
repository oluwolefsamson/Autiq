"use client";

import { authEndpoints } from "@/services/endpoints/authentication";
import { authQueryKeys } from "@/services/queryKeys/authentication";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAuthSession = () =>
    useQuery({
        queryKey: authQueryKeys.session(),
        queryFn: authEndpoints.session,
        retry: false,
        staleTime: 60_000,
    });

export const useLoginMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authEndpoints.login,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: authQueryKeys.session() });
        },
    });
};

export const useRegisterMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authEndpoints.register,
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: authQueryKeys.session() });
        },
    });
};

export const useLogoutMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authEndpoints.logout,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: authQueryKeys.all });
        },
    });
};
