// pages/exam/exam.js
var app = getApp();
Page({
   tiaozhuan_easy:function(){wx:wx.navigateTo({
     url: '../easy/easy',
     success: (result) => {},
     fail: (res) => {},
     complete: (res) => {},
   })},
   tiaozhuan_middle:function(){wx:wx.navigateTo({
    url: '../middle/middle',
    success: (result) => {},
    fail: (res) => {},
    complete: (res) => {},
  })},
  tiaozhuan_difficult:function(){wx:wx.navigateTo({
    url: '../difficult/difficult',
    success: (result) => {},
    fail: (res) => {},
    complete: (res) => {},
  })}
})