<template>
    <form
    @submit.prevent="onSubmit"
    >
        <h2>Sign up</h2>
        <p>Already have an account?</p>
        <router-link to="/login">Sign in</router-link>
        <div class="mb-4">
            <Input
                id="firstname"
                placeholder="First name"
                type="text"
                required
                v-model="first_name"
            />
        </div>
        <div class="mb-4">
            <Input
                id="lastname"
                placeholder="Last name"
                type="text"
                required
                v-model="last_name"
            />
        </div>
        <div class="mb-4">
            <Input
                id="phone"
                placeholder="Phone"
                type="text"
                required
                v-model="phone_number"
            />
        </div>
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
    </form>
</template>

<script setup>
import { ref } from 'vue';

import Button from "../components/base/base-button.vue"
import Input from "../components/base/base-input.vue"

const first_name = ref('')
const last_name = ref('')
const phone_number = ref('')
const email = ref('')
const password = ref('')

async function onSubmit() {
if(!email.value.length && !password.value.length) {
        return;
    }
}

</script>
