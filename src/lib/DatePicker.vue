<template>
  <div class="blanche-date">
    <div class="blanche-date-toggle">
      <div class="blanche-date-toggle-left">
        <span class="blanche-date-toggle-left-pre-year year" @click="toggle(year-1,month)">
          <svg>
            <use xlink:href="#icon-pre-year"></use>
          </svg>
        </span>
        <span class="blanche-date-toggle-left-pre-month" @click="toggle(year,month-1)">
          <svg>
            <use xlink:href="#icon-pre-month"></use>
          </svg>
        </span>
      </div>
      <div class="blanche-date-toggle-time">{{ year }}年{{ month }}月</div>
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
      <li v-for="(day,index) in state.dayArr" :key="index"
          :class="{other:day[1],today:day[2]==='today',selected:day[3]==='selected'}"
          @click="selectDay(day[0],index)"
      >{{
          day[0]
        }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import {onMounted, onUpdated, reactive, ref} from "vue";

export default {
  name: "DatePicker",
  setup(context) {
    const state = reactive({
      dayArr: [],
      date: new Date(),
      selected: false
    })
    let year = state.date.getFullYear()
    let month = state.date.getMonth() + 1
    let days = new Date(new Date(year, month, 1) - 86400 * 1000).getDate()  // 获取本月天数
    let week = new Date(year, month - 1, 1).getDay() // 获取当月一号的星期数
    let lastMonth = new Date(new Date(year, month - 1, 1) - 86400 * 1000).getDate() // 获取上个月的最后一天
    for (let i = 0; i < week - 1; i++) {
      state.dayArr.unshift([lastMonth - i, true])
    }
    for (let i = 1; i <= days; i++) {
      i === new Date().getDate() ? state.dayArr.push([i, false, 'today']) : state.dayArr.push([i, false])
    }
    const butify = 42 - state.dayArr.length
    for (let i = 1; i <= butify; i++) {
      state.dayArr.push([i, true])
    }
    onUpdated(() => {
    })
    const toggle = (year, month) => {
      state.date = new Date(year, month - 1, 1)
      console.log(typeof state.date)
      state.dayArr.unshift(111)
    }
    const selectDay = function (day,index) {
      state.dayArr[index].push('selected')
      console.log(state.dayArr)
    }
    return {year, month, state, toggle,selectDay}
  }
}
</script>

<style lang="scss" scoped>
.blanche-date {
  font-size: 12px;
  color: rgb(96, 98, 102);
  width: 322px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .1);

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
      cursor: pointer;
    }

    .other {
      color: rgb(192, 196, 204);
    }

    .today {
      color: rgb(64, 158, 255);
    }
    .selected{
      color: #fff;
      background: rgb(64, 158, 255);
      border-radius: 20px;
    }
  }
}

svg {
  grid-area: icon;
  width: 10px;
  height: 10px;
}
</style>