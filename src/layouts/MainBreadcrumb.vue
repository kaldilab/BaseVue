<template>
  <div v-frag>
    <nav class="main__breadcrumb">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item">
          <span class="material-icons">home</span>
        </li>
        <li class="breadcrumb-item" v-if="$route.matched[0]">
          <span>{{ $route.matched[0].meta.label }}</span>
        </li>
        <li class="breadcrumb-item" v-if="$route.matched[1]">
          <span>{{ $route.matched[1].meta.label }}</span>
        </li>
        <li class="breadcrumb-item" v-if="$route.matched[2]">
          <span>{{ $route.matched[2].meta.label }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
