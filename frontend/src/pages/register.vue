<template>
    <div class="flex flex-col p-4 items-center">
        <NuxtForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <div class="flex flex-col p-8 rounded-md gap-4 items-center">
                <NuxtFormField label="Name" name="name">
                  <NuxtInput v-model="state.name" placeholder="user" />
                </NuxtFormField>

                <NuxtFormField label="Email" name="email">
                  <NuxtInput v-model="state.email" placeholder="example@email.com" />
                </NuxtFormField>
            
                <NuxtFormField label="Password" name="password">
                  <NuxtInput v-model="state.password" type="password" placeholder="******" />
                </NuxtFormField>
            
                <div class="w-full flex items-center justify-between">
                    <NuxtButton type="submit">Submit</NuxtButton>
                    <NuxtButton variant="outline" to="/login">Cancel</NuxtButton>
                </div>
            </div>
        </NuxtForm>
    </div>
</template>


<script setup lang="ts">
    import * as z from 'zod/v4';

    const router = useRouter();
    const auth = useAuth();
    const toast = useToast();

    const schema = z.object({
        name: z.string(),
        email: z.string().email('Invalid email'),
        password: z.string().min(3, 'Must be at least 3 characters')
    });

    type Schema = z.output<typeof schema>;
    type Register = {name: string, email: string, password: string};

    const state = reactive<Partial<Schema>>({
        name: undefined,
        email: undefined,
        password: undefined,
    });

    const register = async ({name, email, password}: Register) => {
        const success = await auth.register(name, email, password);
        if (success) {
            router.push('/login');
        } else {
            alert('Email inválido');
        }
    }

    async function onSubmit() {
        await register(state as Register);
        toast.success({ title: 'Success', message: 'The form has been submitted.', timeout: 500 });
    }
</script>
