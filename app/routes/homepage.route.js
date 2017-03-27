const express = require('express');
const homepageRouter = express.Router();

const homepageCtrl = require('../controller/homepage.ctrl');
/*
	- tạm thời quên cái vue đi, trong giai đoạn đầu nó ko có tác dụng đáng kể hết,
	phải có time để xác định chỗ nào dùng vue chỗ nào ko
	
	- còn cơ chế mvc của project này như sau:
		1. Khi có request => xử lý middleware => gán kết quả cần gửi cho client vào req => last render.
			.ví dụ:
				- nhận request .get('/homepage')
				- route get đó sẽ có các middleware như sau
					.get(authCrtl.check, homeCtrl.layDanhSachBaiViet, homeCtrl.layNoiDungQuangCao, (req,res) => {
						res.render('home', {req.danhSachBaiViet, req.noiDungQuangCao});
					});
				- authCrtl.check sẽ kiểm tra quyền truy cập, ko pass sẽ trả về status 401, redirect về page login
				- nếu pass, user dc quyền truy cập web, bắt đầu đến bước lấy thông tin để hiển thị trên web.
				homeCtrl.layDanhSachBaiViet sẽ lấy các danh sách các bài báo, bài viết từ database mongo thông qua
				mongo.provider và model (ở đây là BaiViet.model)
				- kết quả trả về ko lỗi thì gán danh sách bài viết vô biến req (req.danhSachBaiViet = danhSachBaiViet).
				kết thúc middleware homeCtrl.layDanhSachBaiViet
				- tương tự cho nội dung quảng cáo, homeCtrl.layNoiDungQuangCao sẽ kiểm tra sở thích của user và trả về danh sách
				các quảng cáo cần hiện ra trên template.
				- last middleware, nếu ko có xử lý ji` thì render và send dữ liệu.
		2. giải thích thư mục:
			- config: chứa, database connect info, biến dùng chung, message respone, http status....
			- controller: gồm các controller cần để điều phối request, respone, lấy dữ liệu từ database hoặc từ server khác
			- data: chứa các phương thức để sử dụng CSDL, luu xoa tim kiem trong mongo, postgreSQL, blabla...
			- helpers: bao bồm phương thức như, gửi email, đọc ghi file, hay genarate token, hash.
			- model: ...
			- routes: xử lý các routes
*/
// homepageRouter.route('/').get(homepageCtrl.basicTest);

/*
	TASK-CHUNG: 
 		- làm homepage hiển thị các thông tin giới thiệu vs danh sách bài viết (1 hoặc 2 là cùng)
		- khi click vào tên hay button đọc thêm sẽ chuyển sang trang hiển thị chi tiết bài viết đó
*/

/*
	TASK-1: 
		- render homepage + data gồm danh sách bài viết, res.render('index', { req.listArticles })
		- code:
			homepageRouter.route('/').get(homepageCtrl.showDefaultPage, (req, res) => {
				res.render('index', { req.listArticles });
			});
*/
homepageRouter.route('/').get((req, res) => {
	res.render('index');
});


module.exports = homepageRouter;
