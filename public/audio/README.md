# Phát âm tiếng Việt — Hoài My

131 từ vựng được tạo sẵn bằng giọng `vi-VN-HoaiMyNeural` qua edge-tts 7.2.8, tốc độ/cao độ mặc định (giống mẫu đã chọn).

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

Script cần mạng, đọc dữ liệu từ source, chỉ tạo file còn thiếu và thử lại tối đa ba lần nếu dịch vụ lỗi. Khi sửa nội dung `speechText`, xóa MP3 tương ứng rồi chạy lại, hoặc dùng `--force` để tạo lại toàn bộ. Nghe kiểm tra các từ mới trước khi sử dụng cho bé.

Ví dụ: `animal-cat` → `/audio/animals/animal-cat.mp3` → “Con mèo”.
