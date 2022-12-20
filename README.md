# Finished Animation ![img](https://img.shields.io/badge/version-v0.0.34-brightgreen)

Finished Animation 은 미리 완성된 애니메이션을 호출하여, 필요한 상황에 빠르게 적용 할 수 있는 라이브러리입니다.

각 애니메이션은 [공통, 텍스트, 버튼, 이미지] 의 카테고리로 분류되며, 정해진 가이드라인을 준수하는 엘리먼트에 간단한 코드로 애니메이션을 생성 할 수 있습니다. 생성된 애니메이션은 내부에 포함된 이벤트 호출 함수 또는 직접 작성한 이벤트에서 실행 될 수 있습니다.

자세한 내용은 [Finished Animation Docs](https://finished-animation.web.app/)에서 확인하세요.

### Installation (for standard modern project)

```
npm install --save finished-animation
```

### Usage

##### HTML code

```html
<h2 class="header">fill text!</h2>
```

##### Javascript code

``` javascript
import { fillText } from "finished-animation/text";
import { hover } from "finished-animation/util";

const animation = fillText({
  target:'.header',
});
hover('.header', animation);
```

### Installation (without package manager)
패키지 매니저를 사용하지 않는다면, 다음의 [Github 저장소](https://github.com/wo7864/finished-animation)에서 코드를 다운로드하세요.

### Usage

##### HTML code

```html
<h2 class="header">fill text!</h2>

<script src='yourpath/dist/util.min.js'></script>
<script src='yourpath/dist/core.min.js'></script>
<script src='yourpath/dist/text.min.js'></script>
```



##### Javascript code

```javascript
var animation = fillText({
  target:'.header',
});
hover('.header', animation);
```

