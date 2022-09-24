<template>
  <div class="blanche-date">
    <div class="blanche-date-toggle">
      <div class="blanche-date-toggle-left">
        <span class="blanche-date-toggle-left-pre-year year">
          <svg>
            <use xlink:href="#icon-pre-year"></use>
          </svg>
        </span>
        <span class="blanche-date-toggle-left-pre-month ">
          <svg>
            <use xlink:href="#icon-pre-month"></use>
          </svg>
        </span>
      </div>
      <div class="blanche-date-toggle-time">2022年9月</div>
      <div class="blanche-date-toggle-right">
        <span class="blanche-date-toggle-right-next-month">
          <svg>
            <use xlink:href="#icon-next-month"></use>
          </svg>
        </span>
        <span class="blanche-date-toggle-right-next-year">
          <svg>
            <use xlink:href="#icon-next-year"></use>
          </svg>
        </span>
      </div>
    </div>
    <ol class="blanche-date-weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ol>
    <ol class="blanche-date-days">
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
      <li>0</li>
    </ol>
  </div>
</template>

<script lang="ts">
export default {
  name: "DatePicker"
}
</script>

<style lang="scss" scoped>
.blanche-date {
  font-size: 12px;
  color: rgb(96, 98, 102);
  width: 322px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0,0,0,.1);

  &-toggle {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;

    &-left, &-right {
      display: flex;
      padding: 0 12px;

      > span {
        padding: 0 4px;
      }
    }
  }

  &-weekdays {
    display: flex;
    margin: 0 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgb(192, 196, 204);

    > li {
      width: 43.4285px;
      text-align: center;
      font-size: 12px;
    }
  }

  &-days {
    display: flex;
    flex-wrap: wrap;
    margin: 0 8px;
    padding: 12px 0;

    > li {
      width: 43.4285px;
      text-align: center;
      padding: 2px 0;
    }
  }
}

svg {
  grid-area: icon;
  width: 10px;
  height: 10px;
}
</style>