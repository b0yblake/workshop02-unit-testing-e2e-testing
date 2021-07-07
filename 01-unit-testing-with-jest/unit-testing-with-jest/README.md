## TESTING

### `Lợi ích tổng quan`
- Nâng cao chất lượng code => do kiểm soát được input/out - kết quả thực tế (TypeScript validate được kiểu dữ liệu input/output)
- Nâng cao sự tự tin khi kết thúc release/sprint
- Tránh các bug sơ đẳng, không đáng có

### `Đừng lạm dụng Unit testing`
- Với những `props` đã có validator => không cần thiết phải test props
- `Third-party libs` thư viện ngoài cũng k cần test nó, hãy test kết quả thu được khi kết hợp trong components.
- 
### `Unit test`

```
yarn: yarn add @vue/test-utils@next --dev
npm: npm install @vue/test-utils@next --save-dev
```

- https://v3.vuejs.org/guide/testing.html#introduction
- https://next.vue-test-utils.vuejs.org/guide/

- Unit test thường được làm ở phía developer, khi kết thúc 1 sprint/components chúng ta muốn kiểm thử các thành phần đó có hoạt động trơn tru <br> nhận giá trị `input/output` 1 cách chính xác và đúng theo ý developer mong muốn.
- các thành phần thường có của `input/output` <br>
<img src="@img/test1.png" alt="" width="100%" height="auto"><br/>

- Cách xác định `input/output` <br>
<img src="@img/test2.png" alt="" width="600px" height="auto"><br/>

-`Config` <br>
```
Run commands:
npm install -g @vue/cli
# OR
yarn global add @vue/cli

vue create unit-testing-with-jest

Pick: Manually select features -> Router + Vuex + linter/Formatter + Unit testing -> ESlint + prettier -> Jest

```

```
Tạo file .prettierrc.js
module.exports = {
  singQuote: true,
  semi: false
}

*Important* folder: tests/unit in root run test in: package.json
"test:unit": "vue-cli-service test:unit"
```

### `Step common`
- 1. Create a test suite (a block of test) using Jest describe method <br>
```
describe('NameSpaceOfComponent', () => {
  // Put test here
})
```

- 2. Setup your test function <br>
```
describe('NameSpaceOfComponent', () => {
  
  test('Test description: ', () => {
    // testing function
  })

  //OR
  it('Test description: ', () => {
    // testing function
  })

})
```

- 3. Mount the component with `vue-test-utils` <br>
- https://github.com/vuejs/vue-test-utils-next/#mounting-options <br>
```
import NameSpaceOfComponent from '@/components/NameSpaceOfComponent'
import { mount, shallowMount } from '@vue/test-utils'

describe('NameSpaceOfComponent', () => {
  test('Test description: ', () => {

    const wrapper = mount(NameSpaceOfComponent)

  })
```

- 4. Use many function to describe your ideal test <br>
- https://github.com/vuejs/vue-test-utils-next/#wrapper-api-mount <br>

- 5. Describe your result you want <br>

```
expect(wrapper.find('button').isVisible()).toBe(false)
```





### `Automation test`
Công nghệ đổi thay, giờ đây chúng ta sử dụng công nghệ đám mây, tất cả mọi thử đều được up lên máy chủ ảo.
Setup Docker, Kubernetes , CI/CD , Jenkin