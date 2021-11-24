<template>
  <div v-frag>
    <CardLink :linkPath="linkPath" target="_blank">
      <CardFigure :figureSrc="figureSrc" :figureAlt="figureAlt"> </CardFigure>
      <CardBody
        :titleValue="titleValue"
        :textValue="textValue"
        :badgeValue="badgeValue"
      >
      </CardBody>
      <CardFooter textValue="2020-01-01"></CardFooter>
    </CardLink>
  </div>
</template>

<script>
export default {
  props: ["linkPath", "figureSrc", "figureAlt", "titleValue", "textValue", "badgeValue"],
};
</script>

<style lang="scss" scoped>
</style>
