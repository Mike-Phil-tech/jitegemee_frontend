<script setup>

</script>

<template>
                  <!--Rotating images-->
    <v-carousel>
  <v-carousel-item
    src="../../public/Images/aaron-burden-Xy-F5GptgR8-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/chuttersnap-cX2vElQ5aHk-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/margaret-kester-qRHipAoih9Y-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>


                     <!--Latest from Jitegemee-->
   <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Graduation"
        text="Graduation signifies a significant milestone, marking the culmination of years of dedicated effort and study. It's a time for celebration, reflection, and the anticipation of new beginnings. Graduates receive a diploma or certificate as a testament to their achievement, often shared with loved ones who offer congratulations and well wishes for the future. While it's the end of one chapter, it's also the start of another, filled with fresh opportunities and challenges. "
        title="Class of 2025"
        color="green"
      ></v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card color="green">
        <template v-slot:title>
          Upcoming intake
        </template>

        <template v-slot:subtitle>
          Jully Intake
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card color="green">
        <v-card-item>
          <v-card-title>Sports</v-card-title>

          <v-card-subtitle>Annual sports competition</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Annual sports day is a highly anticipated event that fosters healthy competition and school spirit. It's a day where students showcase their athletic abilities in various track and field events, from races and jumps to team sports. The atmosphere is charged with excitement, with students, teachers, and parents cheering each other on.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
                          <!--partners-->
    <v-container>
      <v-row>
         <v-col cols="12" md="2">
          <v-img src="../../public/Images/cio-e1692420410866.png"></v-img>
         </v-col>
         <v-col cols="12" md="2">
          <v-img src="../../public/Images/deloitte-01-400x280.png"></v-img>
         </v-col>
         <v-col cols="12" md="2">
          <v-img src="../../public/Images/samsung-01-1-400x280.png"></v-img>
         </v-col>
      </v-row>
    </v-container>

</template>