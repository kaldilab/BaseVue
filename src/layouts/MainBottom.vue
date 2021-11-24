<template>
  <div v-frag>
    <div class="main__bottom">
      <h3 class="position-absolute main__bottom--title">
        {{ $route.matched[0].meta.label }}
      </h3>
      <img
        v-if="$route.matched[0].name === 'hello'"
        class="w-100 main__bottom--hello"
        src="@/assets/images/sample1.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'module1'"
        class="w-100"
        src="@/assets/images/sample2.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'module2'"
        class="w-100"
        src="@/assets/images/sample3.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'module3'"
        class="w-100"
        src="@/assets/images/sample4.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'module4'"
        class="w-100"
        src="@/assets/images/sample5.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'module5'"
        class="w-100"
        src="@/assets/images/sample6.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'member'"
        class="w-100"
        src="@/assets/images/sample7.jpg"
        alt="이미지"
      />
      <img
        v-if="$route.matched[0].name === 'search'"
        class="w-100"
        src="@/assets/images/sample8.jpg"
        alt="이미지"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
