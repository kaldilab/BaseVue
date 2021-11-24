<template>
  <div v-frag>
    <h2 class="main__top">
      <strong class="main__top--title">
        <span class="material-icons" v-if="$route.matched[0].name === 'hello'">
          sports_bar
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'module1'">
          sports_baseball
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'module2'">
          sports_esports
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'module3'">
          sports_football
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'module4'">
          sports_motorsports
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'module5'">
          sports_rugby
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'member'">
          sports_golf
        </span>
        <span class="material-icons" v-if="$route.matched[0].name === 'search'">
          sports_basketball
        </span>
        {{ $route.matched[0].meta.label }}
      </strong>
      <span class="main__top--desc">
        {{ $route.matched[1] ? $route.matched[1].meta.label : $route.matched[0].meta.label }}
        <small v-if="$route.matched[0].name === 'hello'">
          정적인 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'module1'">
          테이블 형태의 동적인 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'module2'">
          카드 형태의 동적인 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'module3'">
          리스트 형태의 동적인 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'module4'">
          이벤트 형태의 동적인 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'module5'">
          커뮤니티 형태의 동적인 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'member'">
          회원 관련 컨텐츠를 위한 페이지입니다.
        </small>
        <small v-if="$route.matched[0].name === 'search'">
          검색 결과 컨텐츠를 위한 페이지입니다.
        </small>
      </span>
    </h2>
  </div>
</template>

<script>
export default {};
</script>
