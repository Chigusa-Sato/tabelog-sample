<template>
  <div class="CardNarrow">
    <div class="CardNarrow_Top">
      <div class="CardNarrow_Top_Icon_Container">
        <fa icon="bookmark" class="CardNarrow_Top_Icon" />
      </div>
      <div class="CardNarrow_Top_Badge" v-show="cardItem.isBadge">
        <span>初選出</span>
      </div>
    </div>
    <div class="CardNarrow_Bottom">
      <p class="CardNarrow_Title">{{cardItem.title}}</p>
      <div class="CardNarrow_Details">
        <p>
          <fa icon="location-dot" class="CardNarrow_Details_Icon" />
          {{cardItem.address}}
        </p>
        <p>
          <span>休</span>
          {{cardItem.regularHoliday}}
        </p>
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
$main-color: #b42824;
$bold: bold;

.CardNarrow {
  min-width: 162px;
  min-height: 190px;
  box-shadow: 0px 4px 4px $gray;
  border-radius: 0px 0px 6px 6px;

  &_Top {
    width: 100%;
    position: relative;
    min-height: 100px;
    border-radius: 6px 6px 0px 0px;
    background: $gray;
    &_Icon {
      width: 16px;
      height: 16px;
      &_Container {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: $white;
        opacity: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &_Badge {
      position: absolute;
      bottom: 8px;
      left: 8px;
      padding: 3px 5px;
      font-size: 11px;
      border-radius: 2px;
      background-color: $main-color;
      color: $white;
    }
  }
  &_Bottom {
    width: 100%;
    max-width: 162px;
    min-height: 100px;
    box-sizing: border-box;
    padding: 0px 10px;
  }
  &_Title {
    color: $main-color;
    text-align: start;
    font-weight: $bold;
  }
  &_Details {
    width: 100%;
    text-align: start;
    &_Icon {
      color: #ebc4c3;
    }
    span {
      display: inline-block;
      border-radius: 10px;
      color: $white;
      padding: 1px;
      background-color: #ebc4c3;
      font-size: 11px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>