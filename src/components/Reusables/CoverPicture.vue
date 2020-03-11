<template>
  <v-card height="500px" dark flat tile>
    <v-img
      :src="img"
      height="500px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-col cols="5" class="pa-0">
        <v-card
          height="500px"
          class="d-flex flex-column align-center justify-center transparent"
          flat
        >
          <v-card class="transparent" flat>
            <p class="display-3 font-weight-bold">{{ title }}</p>
          </v-card>
          <v-card class="transparent" flat>
            <p>{{ subtitle }}</p>
          </v-card>
          <v-card class="transparent" flat>
            <v-btn
              dark
              class="primary font-weight-bold px-6"
              router
              :to="button.route"
              >{{ button.text }}</v-btn
            >
          </v-card>
        </v-card>
      </v-col>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    subtitle: String,
    button: Object
  }
};
</script>

<style></style>
