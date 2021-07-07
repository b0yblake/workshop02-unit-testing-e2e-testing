# workshop02-unit-testing-e2e-testing
A simple workshop, guiding unit test(Jest &amp; mocha) &amp; e2e testing(Cypress) real project 🔥

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
