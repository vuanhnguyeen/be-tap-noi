# Bé Tập Nói

Website học nói tiếng Việt dành cho trẻ nhỏ (khoảng 2 tuổi), thiết kế cực kỳ đơn giản, nút lớn, chữ lớn, thao tác trực quan.

## 1. Công nghệ sử dụng

- Next.js 16 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- Lucide React (icon)
- Vitest (unit test)
- Dữ liệu tĩnh, không dùng database

## 2. Tính năng chính

- Trang chủ hiển thị 13 chủ đề học
- Mỗi chủ đề có URL riêng, truy cập trực tiếp được
- Trang học hiển thị từng từ một:
  - Hình minh họa lớn
  - Tên tiếng Việt
  - Bấm vào thẻ để phát âm
  - Nút Trước / Nghe / Tiếp
- Hai chế độ học:
  - Theo thứ tự
  - Ngẫu nhiên (shuffled deck, không lặp ngay)
- Nút bật/tắt âm thanh toàn cục
- Lưu thiết lập âm thanh và chế độ học vào localStorage
- Hỗ trợ phím mũi tên trái/phải trên desktop
- Hỗ trợ vuốt trái/phải trên cảm ứng
- Fallback phát âm:
  - Đã có 235 file MP3 giọng Hoài My, ưu tiên phát từ public/audio
  - Không có MP3 thì dùng Web Speech API (`vi-VN`)

## 3. Sitemap

- `/` (trang chọn chủ đề)
- `/hoc/mau-sac` (16 từ)
- `/hoc/so` (21 từ)
- `/hoc/bang-chu-cai` (29 từ)
- `/hoc/gia-dinh` (10 từ)
- `/hoc/hanh-dong` (16 từ)
- `/hoc/do-an` (16 từ)
- `/hoc/quan-ao` (12 từ)
- `/hoc/con-vat` (30 từ)
- `/hoc/trai-cay` (20 từ)
- `/hoc/phuong-tien` (18 từ)
- `/hoc/do-dung` (20 từ)
- `/hoc/nghe-nghiep` (14 từ)
- `/hoc/bo-phan-co-the` (13 từ)

## 4. Cài đặt và chạy local

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

Build production:

```bash
npm run build
npm run start
```

## 5. Kiểm tra chất lượng

```bash
npm run lint
npm run test
npm run build
```

## 6. Cấu trúc dữ liệu

Dữ liệu được tách theo chủ đề trong `src/data/topics/`, không hard-code trong JSX.

- Type: `src/types/learning.ts`
- Tổng hợp chủ đề: `src/data/topics.ts`
- Mỗi item có `id` ổn định.

## 7. Cách thêm chủ đề mới

1. Tạo file chủ đề trong `src/data/topics/`.
2. Export `Topic` đúng schema.
3. Thêm vào mảng `TOPICS` trong `src/data/topics.ts`.
4. Thêm ảnh trong `public/images/...`.
5. Nếu có audio, thêm file vào `public/audio/...` và khai báo `audio` trong item.

## 8. Cách thêm một từ mới

Ví dụ item:

```ts
{
  id: "animal-cat",
  name: "Con mèo",
  speechText: "Con mèo",
  image: "/images/noto/animals/cat.svg",
  audio: "/audio/animals/animal-cat.mp3"
}
```

Quy tắc:

- `id` duy nhất, ổn định
- `speechText` là nội dung đọc
- `image` là đường dẫn local
- `audio` là tùy chọn

## 9. Cách thay hình Noto Emoji bằng ảnh thật

1. Chép ảnh mới vào `public/images/...`.
2. Cập nhật trường `image` trong item tương ứng.
3. Không cần sửa logic trang học vì đã tách qua component `LearningImage`.

## 10. Cách thêm file MP3 thu âm

Tham khảo chi tiết trong `public/audio/README.md`.

Tóm tắt:

1. Đặt file MP3 vào đúng thư mục chủ đề.
2. Dùng tên file chữ thường, gạch nối, không dấu.
3. Khai báo đường dẫn vào trường `audio` của item.

Nếu không có MP3 hoặc phát lỗi, hệ thống tự fallback qua Web Speech API.

## 11. Quy tắc đặt tên file asset

- Chữ thường
- Dùng `-` thay khoảng trắng
- Không dấu tiếng Việt trong tên file
- Ví dụ: `con-meo.mp3`, `dragon-fruit.svg`

## 12. Deploy lên Vercel

1. Push code lên GitHub.
2. Import project vào Vercel.
3. Build command: `npm run build`.
4. Output theo Next.js mặc định.
5. Deploy.

Project không cần biến môi trường để chạy.

## 13. Biến môi trường

Dự án hiện không cần biến môi trường.

- File `.env.example` đã ghi chú rõ nội dung này.

## 14. Giấy phép asset Noto Emoji

- Asset Noto Emoji được tải về local từ repository chính thức của Google Noto Emoji.
- Thông tin bản quyền và giấy phép nằm trong `THIRD_PARTY_LICENSES.md`.
- Không hotlink ảnh emoji từ nguồn ngoài khi runtime.
