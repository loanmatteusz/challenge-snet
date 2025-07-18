import { useAuth } from "../composables/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuth();
    if (!auth.isAuthenticated.value) {
        return navigateTo('/login');
    }
})
