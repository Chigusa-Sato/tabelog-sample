<template>
  <div class="Tabelog">
    <div class="Tabelog_Container">
      <!-- TOP -->
      <div class="Tabelog_Top">
        <!-- TODO:fontawesome差し替え -->
        <img src="../assets/img/menu.png" alt="メニュー" class="Tabelog_Top_Icon" />
        <p class="Tabelog_Top_Subtitle">
          グルメが選ぶ、
          <br />いま食べるべき、
          <br />中国料理の名店。
        </p>
        <div class="Tabelog_Top_Content">
          <img src="../assets/img/top.png" alt="中華料理百名店 2023" />
          <div class="Tabelog_Top_Description">
            <p>気のおけない仲間とテーブルを囲んで食べる中国料理は、いつの時代も格別なもの。</p>
            <p>日本最大級の中華街を擁する横浜を筆頭に、珠玉の一皿を提供するお店は東日本にもたくさんあります。</p>
            <p>いつか訪れたいお店が並ぶ「中国料理 EAST 百名店」はこちらです。</p>
          </div>
          <div class="Tabelog_Top_BtnBlock">
            <button type="button" class="Tabelog_Top_Btn--round">選出店一覧</button>
            <button type="button" class="Tabelog_Top_Btn--round">レビュアーランキング</button>
          </div>
        </div>
      </div>
      <!-- Middle -->
      <div class="Tabelog_Middle"></div>
      <!-- Bottom -->
      <div class="Tabelog_Bottom"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
$main-color: #b42824;
$white: #ffffff;
$gray: #cccccc;
$bold: bold;
$text-s: 12px;
$text-m: 13px;

.Tabelog {
  width: 375px;
  font-size: $text-m;
  color: $white;
  &_Container {
    width: 100%;
    display: flex; //TODO
    flex-direction: column;
  }
  //Top
  &_Top {
    width: 100%;
    padding: 60px 10px 20px 10px;
    background-color: $main-color;
    &_Icon {
      width: 28px;
      height: 18px;
      position: absolute;
      top: 10px;
      left: 10px;
    }
    &_Subtitle {
      position: absolute;
      top: 10px;
      right: 0px;
      writing-mode: vertical-rl;
    }
    &_Content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      img {
        width: 180px;
        height: 136px;
      }
    }
    &_Description {
      font-weight: $bold;
      text-align: left;
    }
    &_Btn {
      &Block {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      &--round {
        min-width: 162px;
        padding: 16px 10px;
        border: none;
        border-radius: 25px;
        color: $main-color;
        font-weight: $bold;
      }
    }
  }
}
</style>