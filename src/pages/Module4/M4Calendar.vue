<template>
  <div v-frag>
    <section class="section module">
      <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>
      <!-- 캘린더 -->
      <LoadingDiv v-if="loading"></LoadingDiv>
      <div class="module__calendar" v-else>
        <FullCalendar
          :options="{
            ...calendarOptions,
            events: eventList,
          }"
        >
          <template #eventContent="eventInfo">
            <div
              class="fc-event-link"
              @click="handleLink(eventInfo.event.extendedProps.link)"
            >
              <strong>{{ eventInfo.event.title }}</strong>
              <span>[{{ eventInfo.event.extendedProps.place }}]</span>
            </div>
          </template>
        </FullCalendar>
      </div>
      <!-- //캘린더 -->
    </section>
  </div>
</template>

<script>
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue";
import koLocale from "@fullcalendar/core/locales/ko";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import LoadingDiv from "@/components/Loading/LoadingDiv";

export default {
  components: {
    FullCalendar,
    LoadingDiv,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        },
        contentHeight: "auto",
        selectable: true,
        locale: koLocale,
      },
    };
  },
  created() {
    this.$store.dispatch("actionEventList", {
      perPage: 100,
    });
  },
  methods: {
    handleLink(link) {
      this.$router
        .push({
          path: `/${this.$route.matched[0].name}/view_${this.$route.matched[1].name}/${link}`,
        })
        .catch(() => {});
    },
  },
  computed: {
    eventList() {
      const list = this.$store.state.EventList
        ? this.$store.state.EventList.list
        : [];
      const dataEvents = [];
      list.map((item) => {
        return dataEvents.push({
          title: item.title,
          // date: item.start_date,
          start: item.start_date,
          end: item.end_date + 'T23:59:59',
          link: item.document_srl,
          place: item.place,
        });
      });
      return dataEvents;
    },
    loading() {
      return this.$store.state.EventList.list ? false : true;
    },
  },
};
</script>
