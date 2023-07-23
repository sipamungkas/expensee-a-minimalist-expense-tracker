<script setup>
import {
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'



const mobileMenuOpen = ref(false)
const localPath = useLocalePath()
const switchLocale = useSwitchLocalePath()

</script>

<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink :to="localPath('/dashboard')">
                    <span class="sr-only">Expensee - a minimalist expense tracker</span>
                    <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
                    <span class="font-semibold text-lg lg:text-2xl">Expensee</span>
                </NuxtLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 mt-1">
                <NuxtLink href="#"
                    class="text-sm lg:text-md 2xl:text-base font-semibold leading-6 text-gray-900 hover:text-gray-900 capitalize">
                    {{ $t('dashboard') }}</NuxtLink>
                <NuxtLink href="#"
                    class="text-sm lg:text-md 2xl:text-base font-semibold leading-6 text-gray-400 hover:text-gray-900 capitalize">
                    {{
                        $t('accounts') }}</NuxtLink>
                <NuxtLink href="#"
                    class="text-sm lg:text-md 2xl:text-base font-semibold leading-6 text-gray-400 hover:text-gray-900 capitalize">
                    {{ $t('records') }}</NuxtLink>
                <NuxtLink href="#"
                    class="text-sm lg:text-md 2xl:text-base font-semibold leading-6 text-gray-400 hover:text-gray-900 capitalize">
                    {{ $t('analytics') }}</NuxtLink>
                <NuxtLink href="#"
                    class="text-sm lg:text-md 2xl:text-base font-semibold leading-6 text-gray-400 hover:text-gray-900 capitalize">
                    {{
                        $t('imports') }}</NuxtLink>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end ">
                <NuxtLink href="#" class="text-sm font-semibold leading-6 text-gray-900 mt-1">
                    Log in
                    <span aria-hidden="true">&rarr;</span>
                </NuxtLink>
            </div>
        </nav>
        <ClientOnly>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-10" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <NuxtLink href="localPath('/dashboard')" class="-m-1.5 p-1.5">
                            <span class="sr-only">Expensee - a minimalist expense tracker</span>
                            <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" /> -->
                            <span class="font-semibold text-lg lg:text-2xl">Expensee</span>
                        </NuxtLink>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">

                                <NuxtLink :to="localPath()"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ $t('dashboard') }}</NuxtLink>
                                <NuxtLink :to="localPath()"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ $t('accounts') }}</NuxtLink>
                                <NuxtLink :to="localPath()"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ $t('records') }}</NuxtLink>
                                <NuxtLink :to="localPath()"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ $t('analytics') }}</NuxtLink>
                                <NuxtLink :to="localPath()"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    {{ $t('imports') }}</NuxtLink>
                            </div>
                            <div class="py-6">
                                <NuxtLink :to="localPath()"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Log in</NuxtLink>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </ClientOnly>
    </header>
</template>