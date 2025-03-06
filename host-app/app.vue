<template>
  <div class="container mx-auto p-4 text-center">
    <h1 class="text-2xl font-bold">Host App</h1>
    <Suspense>
      <RemoteComponent />
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const RemoteComponent = defineAsyncComponent(() =>
  import("remoteApp/RemoteComponent")
);
</script>

<style>
.container {
  text-align: center;
  padding: 20px;
}
</style>
