var express = require("express");
var router = express.Router();
const { query } = require("../utils/mysql")

// 博客列表
router.get("/", checkLogin, async (req, res, next) => {
  try {
    // const result = await query("", []);
    // res.json({
    //   data: result
    // });
    res.json({
        data: '查询成功'
    })
  } catch (error) {
    res.json({
      data: "查询失败"
    });
  }
})

module.exports = router;
