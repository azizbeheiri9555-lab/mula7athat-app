// app.config.js
export default {
  expo: {
    name: "ملاحظات",
    slug: "mula7athat",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    // لا تحتاج إلى كتابة سطر icon أو splash، Expo سيستخدم الافتراضي
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.smartnotes.app",
      permissions: []
    },
    extra: {
      eas: {
        projectId: "24232a98-5969-43a1-99e6-862910d4e6f2"
      }
    }
  }
};
