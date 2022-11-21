<template>
        <div class="main-cont">
          <div class="main-team">
            <h3 class="main-title">Team</h3>
            <div class="team-cont">
              <div class="slide-wrap">
                <vueper-slides class="no-shadow" style="width: 1250px;" :visible-slides="5" slide-multiple :gap="7" :slide-ratio="1 / 7" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                  <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" >
                  <template v-slot:content>
                    <div class="team-slide" @click="$router.push('/team')">
                    <div class="team-img"><span :style="{backgroundImage:`url(${imgdata.userImage})`}"></span></div>
                      <div class="team-mem"><p>Kim Us er</p></div>
                      <div class="team-job"><p>개발</p></div>
                  </div></template>
                    </vueper-slide>
                </vueper-slides>
              </div>
            </div>
          </div>
          <div class="main-calender">
            <h3 class="main-title">My calender</h3>
            <div class="calender-cont">
            <FullCalendar :options="calendarOptions" />
          </div>
          </div>
        </div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import imgdata from "@/assets/imgdata";


export default {
  name: "IndexPage",
  data: () => ({
    imgdata : imgdata,
    dropDown: false,
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        id: 'slide-1',
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
        content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
      },
    ],
    calendarOptions: {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth'
    },
  }),
  components: {VueperSlides, VueperSlide, FullCalendar},
}
</script>



<style scoped>
.team-img {
  border-radius: 50px;
  background-color: #cccccc;
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  display: inline-block;
  margin: 20px 0;
}
.team-job {
  color: #5794ff;
  font-width: bold;
  font-size: 16px;
}
</style>

