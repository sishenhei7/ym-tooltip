## ym-tooltip

<a href="https://www.npmjs.com/package/ym-tooltip">
  <img src="https://img.shields.io/npm/v/ym-tooltip.svg" alt="NPM">
</a>
<a href="https://github.com/sishenhei7/ym-tooltip/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
</a>

`ym-tooltip` is a tooltip component for PC and Mobile based on el-tooltip.

It solves the problem that **the el-tooltips in mobile don't disappear when scroll the screen**.

## Getting Started

To begin with, make sure that your project uses [element](https://github.com/ElemeFE/element), then install ym-tooltip:

``` bash
npm i ym-tooltip -s

```

Finally, you can replace el-tooltip by ym-tooltip wherever like this:

``` js
// before
<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
  <el-button>上左</el-button>
</el-tooltip>

// now
<ym-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
  <el-button>上左</el-button>
</ym-tooltip>
```


