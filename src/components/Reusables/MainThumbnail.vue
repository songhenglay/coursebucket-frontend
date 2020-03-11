<template>
  <v-card width="700px" height="210px">
    <v-row align="center" no-gutters>
      <v-col cols="6">
        <v-card width="100%">
          <v-img height="210px" :src="thumbnailPic"></v-img>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="transparent" flat>
          <v-card class="transparent px-5 title" flat>
            Procastination: How to stop procastination
          </v-card>
          <v-card class="transparent px-1" flat>
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="user.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ user.username }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.rank }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card class="transparent px-5 subtitle-2 font-weight-regular" flat>
            12 lesson
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    thumbnailPic: String,
    user: Object,
    lessons: String
  }
};
</script>

<style></style>
