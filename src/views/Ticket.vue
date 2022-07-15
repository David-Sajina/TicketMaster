<template>
  <div class="ticket">
    <header-ticket />
    <q-a />
  </div>
</template>
<script>
import QA from "@/components/QA.vue";
import HeaderTicket from "../components/HeaderTicket.vue";

export default {
  name: "About",
  components: {
    QA,
    HeaderTicket,
  },
};
</script>
