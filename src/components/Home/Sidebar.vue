<template>
  <v-card flat class="transparent">
    <v-list dense>
      <v-list-item-group>
        <v-list-item class="font-weight-bold">
          <v-list-item-content>All classes</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group>
        <v-list-item class="font-weight-bold">
          <v-list-item-content>Create</v-list-item-content>
        </v-list-item>

        <hr class="ml-4" style="width:60%; border: 1px solid black;" />
        <v-list-item v-for="(item, n) in create" :key="n">
          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group class="mt-5">
        <v-list-item class="font-weight-bold">
          <v-list-item-content>Learn</v-list-item-content>
        </v-list-item>
        <hr class="ml-4" style="width:60%; border: 1px solid black;" />
        <v-list-item v-for="(item, n) in learn" :key="n">
          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group class="mt-5">
        <v-list-item class="font-weight-bold">
          <v-list-item-content>Lifestyle</v-list-item-content>
        </v-list-item>
        <hr class="ml-4" style="width:60%; border: 1px solid black;" />
        <v-list-item v-for="(item, n) in lifestyle" :key="n">
          <v-list-item-content>{{ item.text }}</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    create: [
      { text: "Programming", route: "" },
      { text: "Web Development", route: "" },
      { text: "UI/UX Design", route: "" },
      { text: "Film & Video", route: "" },
      { text: "Photography", route: "" }
    ],
    learn: [
      { text: "Data Structures", route: "" },
      { text: "Cryptography", route: "" },
      { text: "Web Application", route: "" },
      { text: "Leadership Communications", route: "" },
      { text: "Database", route: "" }
    ],
    lifestyle: [
      { text: "Gaming", route: "" },
      { text: "Fitness", route: "" },
      { text: "Productivity", route: "" }
    ]
  })
};
</script>

<style></style>
