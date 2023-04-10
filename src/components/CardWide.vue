<template>
  <div class="CardWide">
    <div class="CardWide_Top">
      <div class="CardWide_Top_Icon_Container">
        <div class="CardWide_Top_Icon" v-show="cardItem.isBadge">
          <span>New</span>
        </div>
      </div>
    </div>
    <div class="CardWide_Bottom">
      <p class="CardWide_Date">{{cardItem.date}}</p>
      <p class="CardWide_Title">{{cardItem.title}}</p>
      <div class="CardWide_Bottom_Wrapper">
        <fa icon="arrow-up-right-from-square" class="CardWide_Icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cardItem: Object
});
</script>Ï

<style scoped lang="scss">
$gray: #cccccc;
$white: #ffffff;
$gold: #9e7d36;
$bold: bold;

.CardWide {
  min-width: 315px;
  height: 338px;
  box-shadow: 0px 4px 4px $gray;
  border-radius: 6px;
  background-color: $white;

  &_Top {
    width: 100%;
    position: relative;
    min-height: 200px;
    border-radius: 6px 6px 0px 0px;
    background: $gray;
    &_Icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      background-color: $gold;
      span {
        font-weight: $bold;
        display: inline-block;
      }
    }
  }
  &_Bottom {
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    padding: 20px;
    text-align: start;
    &_Wrapper {
      text-align: end;
    }
  }
  &_Date {
    font-style: oblique;
    color: $gray;
  }
  &_Title {
    font-weight: $bold;
  }
  &_Icon {
    color: $gray;
  }
}
</style>
