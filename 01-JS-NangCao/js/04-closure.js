// Ứng dụng tính closure ghi log.

const createLogger = (namespace) => {
  const logger = (message) => {
    console.log(`[${namespace}] ${message}`);
  };

  return logger;
};

// ============== APP =================
const infoLogger = createLogger("Info");
infoLogger("Bắt đầu gửi mail");
infoLogger("Gửi mail lần 1");

const infoLogger2 = createLogger("Error");
infoLogger2("Email không tồn tại");
infoLogger2("Gửi mail thất bại");

// Ứng dụng lưu storage.

const createStore = (key) => {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
};

//Profile.js
const profilteSetting = createStore("profile_setting");
// profilteSetting.set("fullName", "Huy Nguyen");
// console.log(profilteSetting.get("fullName"));

profilteSetting.remove("fullName");
