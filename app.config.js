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
        projectId: "255b4627-77dd-4faa-a19b-371d3f0a508c"
      }
    }
  }
};
