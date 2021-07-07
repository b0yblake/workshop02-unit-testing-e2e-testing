## TESTING


### `Lợi ích tổng quan`
- Nâng cao chất lượng code => do kiểm soát được input/out - kết quả thực tế (TypeScript validate được kiểu dữ liệu input/output)
- Nâng cao sự tự tin khi kết thúc release/sprint
- Tránh các bug sơ đẳng, không đáng có

### `Đừng lạm dụng Unit testing`
- Với những `props` đã có validator => không cần thiết phải test props
- `Third-party libs` thư viện ngoài cũng k cần test nó, hãy test kết quả thu được khi kết hợp trong components.
- 

### `Các cấp độ`

- Sum wrap 2 loại test cơ bản:

| Loại   | Black box test                                            | White box test                                            |
| -------| :---------------------------------------------------------| :---------------------------------------------------------|
|Ưu điểm | Thích hợp trong việc kiểm tra từng phân đoạn lớn các mã lệnh, chức năng lớn <br> Người thử nghiệm không cần hiểu biết về mã lệnh được viết trong chương trình <br> Tách biệt giữa quan điểm của người sử dụng và người phát triển phần mềm | Thích hợp trong việc tìm kiếm lỗi và các vấn đề trong mã lệnh <br> Biết được yêu cầu bên trong của phần mềm, kiểm tra sẽ sát hơn <br> Cho phép tìm kiếm các lỗi ẩn bên trong <br> Các lập trình viên có thể tự kiểm tra <br> Giúp tối ưu việc mã hoá <br> Do yêu cầu kiến thức cấu trúc bên trong của phần mềm, nên việc kiểm soát lỗi tối đa nhất |
|Nhược điểm | Độ bao phủ hạn chế vì chỉ có một phần nhỏ trong số các kịch bản thử nghiệm được thực hiện <br> Kiểm tra không hiệu quả do người thử nghiệm không hiểu biết gì về cấu trúc bên trong phần mềm. <br> Tester có hạn chế về hiểu biết về ứng dụng | Không thể tìm thấy tính năng chưa thực hiện hoặc bỏ sót <br> Đòi hỏi hiểu sâu về cấu trúc bên trong của phần mềm được thử nghiệm <br> Yêu cầu truy xuất mã lệnh bên trong chương trình |
|Định nghĩa | Kiểm tra hộp đen là phương pháp thử nghiệm phần mềm được sử dụng để kiểm tra các phần mềm mà không quan tâm đến cấu trúc bên trong của chương trình. | Kiểm tra hộp trắng là phương pháp kiểm thử phần mềm, sử dụng để kiểm tra phần mềm mà yêu cầu phải biết cấu trúc bên trong của chương trình. |
|Trách nhiệm | Thử nghiệm được thực hiện bên ngoài, không liên quan đến nhà phát triển phần mềm. | Thông thường, các thử nghiệm được thực hiện bởi nhà phát triển phần mềm.|
|Cấp độ test sử dụng | Thử nghiệm áp dụng ở cấp độ cao như: kiểm tra hệ thống (System test), kiểm tra chấp nhận (Acceptance test) | Thử nghiệm được áp dụng ở mức độ thấp hơn như thử nghiệm đơn vị (Unit Test), thử nghiệm hội nhập (Integration test)|
|Biết lập trình | Không yêu cầu hiểu biết về Lập trình | Yêu cầu hiểu biết nhất định về lập trình.|
|Biết việc thực hiện chương trình | Không yêu cầu hiểu về cấu trúc bên trong chức năng, và không cẩn hiểu làm thế nào để có được chức năng đó | Yêu cầu hiểu cấu trúc bên trong chức năng được thực hiện như nào. |
|Cơ sở tạo Test Cases | Kiểm tra hộp đen được bắt đầu dựa trên tài liệu yêu cầu kỹ thuật | Kiểm tra hộp trắng được bắt đầu dựa trên các tài liệu thiết kế chi tiết|


- Whitebox test: Manual test & Automation test

| Loại   | Manual test                                          | Automation test                                           |
| -------| :---------------------------------------------------------| :---------------------------------------------------------|
|Ưu điểm |                    |                        |


- Testing level

| Loại   | Unit test                       | Intergation test                  | System test                   | Acceptance test               |
| -------| :-------------------------------| :---------------------------------| :-----------------------------| :-----------------------------|
|Ưu điểm |                    |                        |   |   |

- Test technichques

| Loại   | Giá trị biên                    | Phân lớp tương đương              | Đoán lỗi                   | 
| -------| :-------------------------------| :---------------------------------| :--------------------------| 
|Ưu điểm |                    |                        |   |

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