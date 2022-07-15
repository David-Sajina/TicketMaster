<template>
  <v-container
    style="margin-left: 20px margin-right: 20px"
    height="20px"
    class="my-4"
  >
    <v-app>
      <v-card>
        <div class="d-flex">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Neko pitanje?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Neki odgovor
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div></v-card
      ></v-app
    >
  </v-container>
</template>
<script>
export default {
  name: "QA",
  data: () => ({
    readonly: false,
  }),
};
</script>
