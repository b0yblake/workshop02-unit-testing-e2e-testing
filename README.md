<h1 align="center">🎯 Testing - let yourself more confidence </h1>
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


- Whitebox & Blackbox: Manual test & Automation test

`Manual test` là cách thông thường - tester - thực hiện thao tác bằng tay để test trực tiếp trên ứng dụng
`Automation test` là cách test tự động - developer/QA - viết sẵn các kịp bản phù hợp với từng đối tượng test

`TÓM LẠI`
- Manual testing sẽ giúp có cái nhìn trực quan và chính xác về ứng dụng (e2e test/ user test)
- Automation testing giúp tìm thấy nhiều lỗi hơn
- Manual testing cho kết quả ít tin cậy hơn vì con người có thể mắc lỗi
- Automation testing tiêu tốn chi phí cho các tool kiểm thử, làm tăng chi phí của dự án
- Manual testing tiêu tốn thời gian và nguồn nhân lực
- Automation testing nhanh hơn và hiệu quả hơn so với manual testing

| Loại   | Manual test                                          | Automation test                                           |
| -------| :---------------------------------------------------------| :---------------------------------------------------------|
| Định nghĩa | Thực hiện kiểm thử hoàn toàn thủ công không có sự trợ giúp của bất kỳ công cụ tự động nào, được thực hiện bời tester | Automation testing sử dụng các tool để thực hiện các trường hợp kiểm thử |
| Programming knowledge | Không cần có kiến thức lập trình vẫn có thể thực hiện | Yêu cầu phải có kiến thức lập trình |
| Thời gian xử lý | Manual testing tốn nhiều thời gian và nguồn nhân lực | Thời gian kiểm thử rút ngắn hơn so với manual testing |
| Exploratory Testing  | (Là 1 kiểu test không cần lên các testcase or kịch bản sẵn có) Có thể kiểm thử khám phá trong manual testing | Không cho phép kiểm thử khám phá |
| Độ tin cậy | Kết quả kiểm thử không đáng tin cậy vì có khả năng xảy ra lỗi của con người | Kết quả kiểm thử đáng tin cậy vì nó được thực hiện bằng các tool và các kịch bản |
| UI change | Những thay đổi nhỏ thư thay đổi về id, class sẽ không cản trở quá trình kiểm thử | Chỉ là thay đổi nhỏ trong giao diện AUT nhưng các kịch bản kiểm thử tự động cần phải sửa đổi để hoạt động đúng như mong đợi |
| Investment | Cần đầu tư về nguồn nhân lực | Cần phải đầu tư cho các công cụ kiểm thử |
| Test Report Visibility | Kết quả được lưu lại trong excel hoặc word | Tất cả các bên liên quan có thể đăng nhập vào hệ thống xem kết quả đã kiểm thử |
| Performance Testing | Không khả thi trong kiểm thử Load testing, stress testing | Được thực hiện trong kiểm thử Load testing, stress testing |
| Parallel Execution | Kiểm thử song song trên các nền tảng khác nhau sẽ phải tăng nguồn nhân lực | Có thể thực hiện song song trên cấc nền tảng vận hành khác nhau và giảm thời gian thực hiện kiểm thử |
| Ideal approach | Manual testing hữu ích khi chạy bộ test case một hoặc hai lần | Automation testing rất hữu ích khi thường xuyên thực hiện chạy lại một kịch bản nhiều nhiều lần |


- Testing level

| Loại   | Unit test                       | Intergation test                  | System test                   | Acceptance test               |
| -------| :-------------------------------| :---------------------------------| :-----------------------------| :-----------------------------|
|Ưu điểm |                    |                        |   |   |

- Test technichques

| Loại   | Giá trị biên                    | Phân lớp tương đương              | Đoán lỗi                   | 
| -------| :-------------------------------| :---------------------------------| :--------------------------| 
|Ưu điểm |                    |                        |   |
