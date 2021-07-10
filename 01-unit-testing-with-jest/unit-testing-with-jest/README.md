## TESTING

<p align="center">🎯 Trước khi kết thúc phần này, chúng tôi có một lời khuyên là viết UT cũng tương tự như viết mã một chương trình, điều bạn cần làm là không ngừng thực hành. Hãy nhớ UT chỉ thực sự mang lại lợi ích nếu chúng ta đặt vấn đề chất lượng phần mềm lên hàng đầu hơn là chỉ nhằm kết thúc công việc đúng thời hạn.  </p>

### `Lợi ích tổng quan`
- Nâng cao chất lượng code => do kiểm soát được input/out - kết quả thực tế (TypeScript validate được kiểu dữ liệu input/output
- Tránh các bug sơ đẳng, không đáng có
- Tạo ra môi trường lý tưởng để kiểm tra bất kỳ đoạn code nào, có khả năng thăm dò và phát hiện lỗi chính xác, duy trì sự ổn định của toàn bộ PM và giúp tiết kiệm thời gian so với công việc gỡ rối truyền thống.
- Phát hiện các thuật toán thực thi không hiệu quả, các thủ tục chạy vượt quá giới hạn thời gian.
- Phát hiện các vấn đề về thiết kế, xử lý hệ thống, thậm chí các mô hình thiết kế.
- Phát hiện các lỗi nghiêm trọng có thể xảy ra trong những tình huống rất hẹp.
- Tạo hàng rào an toàn cho các khối mã: Bất kỳ sự thay đổi nào cũng có thể tác động đến hàng rào này và thông báo những nguy hiểm tiềm tàng.
- Giải phóng chuyên viên QA khỏi các công việc kiểm tra phức tạp.
- Nâng cao sự tự tin khi kết thúc release/sprint. Chúng ta thường có cảm giác không chắc chắn về các đoạn mã của mình như liệu các lỗi có quay lại không, hoạt động của module hiện hành có bị tác động không, hoặc liệu công việc hiệu chỉnh mã có gây hư hỏng đâu đó…
- Là công cụ đánh giá năng lực của bạn. Số lượng các tình huống kiểm tra (test case) chuyển trạng thái “pass” sẽ thể hiện tốc độ làm việc, năng suất của bạn.

### `Đừng lạm dụng Unit testing`
- Với những `props` đã có validator => không cần thiết phải test props
- `Third-party libs` thư viện ngoài cũng k cần test nó, hãy test kết quả thu được khi kết hợp trong components.
- 

### `Chỉ thực sự hiệu quả khi`
- Được vận hành lặp lại nhiều lần
- Tự động hoàn toàn
- Độc lập với các UT khác.
- Khách khó tính trong việc nghiệm thu sản phẩm
- Product

### `Unit test`

```
yarn: yarn add @vue/test-utils@next --dev
npm: npm install @vue/test-utils@next --save-dev

npm run test:unit
npm run test:unit -t NameOfFileTest
```

- https://v3.vuejs.org/guide/testing.html#introduction
- https://next.vue-test-utils.vuejs.org/api/

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
- `1.` Create a test suite (a block of test) using Jest describe method <br>
```
describe('NameSpaceOfComponent', () => {
  // Put test here
})
```

- `2.` Setup your test function <br>
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

- `3.` Mount the component with `vue-test-utils` <br>
- https://github.com/vuejs/vue-test-utils-next/#mounting-options <br>
```
import NameSpaceOfComponent from '@/components/NameSpaceOfComponent'
import { mount, shallowMount } from '@vue/test-utils'

describe('NameSpaceOfComponent', () => {
  test('Test description: ', () => {

    const wrapper = mount(NameSpaceOfComponent)

  })
```

- `4.` Use many function to describe your ideal test <br>
- https://github.com/vuejs/vue-test-utils-next/#wrapper-api-mount <br>

- `5.` Describe your result you want <br>

```
expect(wrapper.find('button').isVisible()).toBe(false)
```

### `Khái niệm thường gặp`

### `Tham khảo`
- https://lcdung.top/unit-test-la-gi/