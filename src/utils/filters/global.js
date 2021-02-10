import Vue from 'vue'

export const price = value => `${value} Сум`

Vue.filter(price.name, price)