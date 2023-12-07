<template>
    <form
    class=""
        @submit.prevent="onSubmit"
    >
        <h2 class="">Sign in</h2>
        <p>Don't you have an account?</p> 
        <router-link to="/signup">Sign up</router-link>
        <div class="mb-4">
            <Input
                id="email"
                placeholder="Email"
                type="email"
                required
                v-model="email"
            />
        </div>
        <div class="mb-4">
            <Input
                id="password"
                placeholder="Password"
                type="password"
                required
                v-model="password"
            />
        </div>
        <div>
            <Button
                type="submit"
                class="btn-primary"
            >
                Next step
            </Button>
        </div>

        <div class="bg-blue-500 text-white p-4">
    This is a Tailwind CSS component.
  </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

import Button from "../components/base/base-button.vue"
import Input from "../components/base/base-input.vue"

const email = ref('')
const password = ref('')

async function onSubmit() {
    if(!email.value.length && !password.value.length) {
        return;
    }
}

</script>

<style scoped>

</style>