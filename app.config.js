// app.config.js
export default {
  expo: {
    name: "الملاحظات",
    slug: "mula8athat",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.smartnotes.app",
      permissions: [
        "android.permission.VIBRATE",
        "android.permission.SCHEDULE_EXACT_ALARM",
        "android.permission.POST_NOTIFICATIONS"
      ]
    },
    plugins: ["expo-notifications"],
    extra: {
      eas: {
        projectId: "645ea13c-bd68-4405-9320-ea48213609b6"
      }
    }
  }
};
