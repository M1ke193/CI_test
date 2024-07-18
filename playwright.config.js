require("dotenv").config();
import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list", { printSteps: true }],
    ["html", { open: "never" }],
  ],
  use: {
    video: "on",
    size: { width: 640, height: 480 },
    //'off': Không ghi video.
    //'on': Ghi video cho mỗi test.
    //'retain-on-failure': Ghi video cho mỗi test nhưng xóa tất cả video từ các test chạy thành công.
    //'on-first-retry': Chỉ ghi video khi thử lại một test lần đầu tiên1.
  },
});
