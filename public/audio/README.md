# Phát âm tiếng Việt — Hoài My

235 từ vựng được tạo sẵn bằng giọng `vi-VN-HoaiMyNeural` qua edge-tts 7.2.8, tốc độ/cao độ mặc định (giống mẫu đã chọn).

- File: `public/audio/<chủ-đề>/<item-id>.mp3`.
- Mỗi item trong `src/data/topics/*.ts` khai báo `audio: "/audio/<chủ-đề>/<item-id>.mp3"`.
- Bấm hình hoặc nút Nghe để phát MP3. Khi phát từ mới, âm thanh cũ dừng lại.
- Các file được phục vụ trực tiếp bởi website; không gọi dịch vụ TTS khi bé bấm nghe.
- Nếu thiếu file hoặc phát lỗi, hook dùng Web Speech API (`vi-VN`) dự phòng; chất lượng giọng dự phòng tùy thiết bị.

## Tạo thêm audio

Khai báo `speechText` và `audio` cho từ mới, rồi chạy từ thư mục project:

```sh
python3 -m venv /tmp/learning-child-tts-env
/tmp/learning-child-tts-env/bin/python -m pip install edge-tts==7.2.8
/tmp/learning-child-tts-env/bin/python scripts/generate-audio.py
```

Script cần mạng, đọc dữ liệu từ source, chỉ tạo file còn thiếu và thử tối đa sáu lần cho mỗi từ nếu dịch vụ lỗi. Các từ được tạo lần lượt, mỗi yêu cầu có thời gian chờ tối đa 45 giây. Nếu một từ vẫn lỗi, script tiếp tục những từ khác rồi báo danh sách lỗi; chạy lại để hoàn tất phần còn thiếu. Khi sửa nội dung `speechText`, xóa MP3 tương ứng rồi chạy lại, hoặc dùng `--force` để tạo lại toàn bộ. Nghe kiểm tra các từ mới trước khi sử dụng cho bé.

Ví dụ: `animal-cat` → `/audio/animals/animal-cat.mp3` → “Con mèo”.

## Chủ đề Quần áo

12 file MP3 trong `public/audio/clothing/` dùng giọng Hoài My, tốc độ mặc định. Tạo lại riêng chủ đề này:

```sh
/tmp/learning-child-tts-env/bin/python scripts/generate-audio.py --topic clothing --force
```

## Năm chủ đề bổ sung

Số (21), Bảng chữ cái (29), Gia đình (10), Hành động (16), Đồ ăn (16) dùng 92 file mới trong `/audio/<topic>/hoai-my/`. Tất cả được tạo bằng `vi-VN-HoaiMyNeural`, tốc độ/cao độ mặc định, từ `speechText` trong source. Các MP3 cũ ở thư mục số/chữ cấp trên không được dữ liệu sử dụng.

Ví dụ tạo lại:

```sh
/tmp/learning-child-tts-env/bin/python scripts/generate-audio.py --topic alphabet --force
```

## Kiểm tra trước khi đưa lên web

`npm run build` tự chạy kiểm tra toàn bộ đường dẫn audio trước khi build. Thiếu file hoặc file rỗng sẽ dừng build. Cần đưa các MP3 mới trong `public/audio/` lên Git cùng source; bản static export có audio trong `out/audio/`.
