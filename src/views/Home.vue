<template>
  <div class="Tabelog">
    <div class="Tabelog_Container">
      <!-- TOP -->
      <div class="Tabelog_Top">
        <!-- TODO:fontawesome差し替え -->
        <fa icon="bars" class="Tabelog_Top_Icon" />
        <p class="Tabelog_Top_Subtitle">
          グルメが選ぶ、
          <br />いま食べるべき、
          <br />中国料理の名店。
        </p>
        <div class="Tabelog_Top_Content">
          <img src="../assets/img/top.png" alt="中華料理百名店 2023" />
          <div class="Tabelog_Top_Description">
            <div class="Tabelog_Top_Description-lead">
              <p>気のおけない仲間とテーブルを囲んで食べる中国料理は、いつの時代も格別なもの。</p>
            </div>
            <div class="Tabelog_Top_Description-more" v-show="isLeadMore">
              <p>日本最大級の中華街を擁する横浜を筆頭に、珠玉の一皿を提供するお店は東日本にもたくさんあります。</p>
              <p>いつか訪れたいお店が並ぶ「中国料理 EAST 百名店」はこちらです。</p>
            </div>
            <div class="Tabelog_Top_Description-more" v-show="!isLeadMore" @click="showLeadMore">...</div>
          </div>
          <div class="Tabelog_Top_BtnBlock">
            <button type="button" class="Tabelog_Top_Btn--round">選出店一覧</button>
            <button type="button" class="Tabelog_Top_Btn--round">レビュアーランキング</button>
          </div>
        </div>
      </div>
      <!-- Middle -->
      <div class="Tabelog_Middle">
        <div class="Tabelog_Middle_Content">
          <div class="Tabelog_Middle_CardSearch">
            <span class="Tabelog_Middle_Date">発売日：2023年3月27日</span>
            <div class="Tabelog_Middle_SearchArea">
              <fa icon="location-dot" class="Tabelog_Middle_SearchArea_Icon" />
              <span>すべて</span>
            </div>
          </div>
          <div class="Tabelog_Middle_CardList">
            <CardNarrow v-for="item in shopList" :key="item.id" :cardItem="item" />
          </div>
          <div class="Tabelog_Middle_Note">
            選出基準日：2023年3月8日
            <p>
              以下条件に該当する店舗から点数上位100店を選出
              <br />・選出基準日時点で、第一ジャンルが「中華料理」、「四川料理」または「台湾料理」となっている
              <br />※1 EASTエリア…東京都/北海道/青森県/岩手県/宮城県/秋田県/山形県/福島県/茨城県/栃木県/群馬県/埼玉県/千葉県/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県、WESTエリア…富山県/石川県/福井県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/和歌山県/鳥取県/島根県/岡山県/広島県/山口県/徳島県/香川県/愛媛県/高知県/福岡県/佐賀県/長崎県/熊本県/大分県/宮崎県/鹿児島県/沖縄県
              <br />※2 TOKYO、EAST、WESTの3エリアで発表している場合は、EASTエリアより東京都を除外しております。
            </p>
          </div>
          <div class="Tabelog_Middle_BtnBlock">
            <button class="Tabelog_Middle_Btn--square">
              ログインして
              <br />行った数を見る
            </button>
          </div>
        </div>
      </div>
      <!-- Bottom -->
      <div class="Tabelog_Bottom">
        <div class="Tabelog_Bottom_Content">
          <div class="Tabelog_Bottom_Title">
            <img src="../assets/img/tabelog_magazine.png" alt="食べログ Magazine" />
            選出店舗の掲載記事はこちら
          </div>
          <div class="Tabelog_Bottom_CardList">
            <CardWide v-for="item in shopMagazineList" :key="item.id" :cardItem="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardNarrow from "../components/CardNarrow.vue";
import CardWide from "../components/CardWide.vue";

const isLeadMore = ref(false);
const showLeadMore = () => {
  isLeadMore.value = !isLeadMore.value;
};
const shopList = [
  {
    id: 1,
    title: "中国料理 翆陽",
    address: "長野県北佐久郡軽井沢町大字追分字東かじか沢23-1 ",
    regularHoliday: "火曜日",
    isBadge: true
  },
  {
    id: 2,
    title: "中国料理 翆陽",
    address: "長野県北佐久郡軽井沢町",
    regularHoliday: "火曜日",
    isBadge: false
  },
  {
    id: 3,
    title: "中国料理 翆陽",
    address: "長野県北佐久郡軽井沢町",
    regularHoliday: "火曜日",
    isBadge: true
  },
  {
    id: 4,
    title: "中国料理 翆陽",
    address: "長野県北佐久郡軽井沢町",
    regularHoliday: "火曜日",
    isBadge: true
  },
  {
    id: 5,
    title: "中国料理 翆陽",
    address: "長野県北佐久郡軽井沢町",
    regularHoliday: "火曜日",
    isBadge: false
  },
  {
    id: 6,
    title: "中国料理 翆陽",
    address: "長野県北佐久郡軽井沢町",
    regularHoliday: "火曜日",
    isBadge: false
  }
];
const shopMagazineList = [
  {
    id: 11,
    date: "2022.04.08",
    title:
      "一流店シェフが惚れこむ。中華料理「イチリン ハナレ」店主がリアルに足を運ぶ店",
    isBadge: true
  },
  {
    id: 12,
    date: "2022.04.08",
    title:
      "一流店シェフが惚れこむ。中華料理「イチリン ハナレ」店主がリアルに足を運ぶ店",
    isBadge: false
  },
  {
    id: 13,
    date: "2022.04.08",
    title:
      "一流店シェフが惚れこむ。中華料理「イチリン ハナレ」店主がリアルに足を運ぶ店",
    isBadge: false
  }
];
</script>

<style scoped lang="scss">
$main-color: #b42824;
$white: #ffffff;
$gray: #cccccc;
$bold: bold;
$text-s: 12px;
$text-m: 14px;

.Tabelog {
  width: 375px;
  font-size: $text-m;
  font-family: Helvetica, Arial, Hiragino Sans, "ヒラギノ角ゴシック",
    "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", sans-serif;
  &_Container {
    width: 100%;
    display: flex; //TODO
    flex-direction: column;
  }
  //Top
  &_Top {
    width: 100%;
    position: relative;
    padding: 60px 10px 20px 10px;
    color: $white;
    background-color: $main-color;
    &_Icon {
      width: 38px;
      height: 28px;
      position: fixed;
      top: 10px;
      left: 10px;
    }
    &_Subtitle {
      position: absolute;
      top: 10px;
      right: 10px;
      line-height: 24px;
      letter-spacing: 3px;
      font-size: $text-s;
      font-family: "ヒラギノ丸ゴ Pro W4", "ヒラギノ丸ゴ Pro",
        "Hiragino Maru Gothic Pro";
      font-weight: 600;
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
      padding: 0px 40px;
      line-height: 1.64;
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
  &_Middle {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    &_Date {
      font-size: $text-s;
      color: $gray;
    }
    &_Content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &_CardSearch {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-end;
    }
    &_SearchArea {
      width: 100%;
      padding: 16px 0px;
      display: flex;
      gap: 10px;
      background-color: #faeded;
      border-radius: 30px;
      &_Icon {
        color: $main-color;
        padding-left: 20px;
      }
      span {
        display: inline-block;
        color: $main-color;
      }
    }
    &_CardList {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
    &_Note {
      color: $gray;
      font-size: 13px;
      padding: 20px;
      p {
        text-align: left;
        line-height: 1.5;
      }
    }
    &_Btn {
      &Block {
        width: 100%;
        display: flex;
        justify-content: right;
      }
      &--square {
        min-width: 133px;
        padding: 10px;
        border: none;
        border-radius: 6px;
        font-size: $text-s;
        color: $white;
        background-color: $main-color;
      }
    }
  }
  &_Bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px 40px 10px;
    background-image: linear-gradient(
      151deg,
      #faf4f9 0,
      #f9ebee 26%,
      #fcecd6 56%,
      #eff3e9 92%
    );
    &_Content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_Title {
      display: flex;
      gap: 10px;
      padding-bottom: 20px;
      align-items: center;
      font-weight: $bold;
      img {
        width: 104px;
        height: 38px;
      }
    }
    &_CardList {
      width: 100%;
      display: flex;
      gap: 20px;
      padding-left: 20px;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
}
</style>