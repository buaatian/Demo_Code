// pages/Chapter_7/7_7_picker-view/7_7_picker-view.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 5,
    days,
    day: 1,
    value: [9999, 4, 0],
    isDaytime: true,
  },

  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      isDaytime: !val[3]
    })
  }
})
