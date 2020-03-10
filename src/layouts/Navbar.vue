<template>
  <div>
    <v-app-bar color="primary" dense dark class="px-5">
      <v-app-bar-nav-icon small></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold ml-5 mr-10"
        >Coursebucket.</v-toolbar-title
      >

      <v-btn outlined class="mx-5 px-5">
        <v-icon left class="mr-5">mdi-apps</v-icon>
        Subject
      </v-btn>
      <v-btn text class="mx-5">
        Popular
      </v-btn>
      <v-btn text class="mx-5">
        Trending
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        light
        flat
        append-icon="mdi-magnify"
        v-model="searchText"
        solo
        dense
        label="Search"
        hide-details
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-plus-box-multiple</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon class="mr-10">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn outlined class="px-5">
        <v-icon left class="mr-5">mdi-logout-variant</v-icon>
        Signout
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
