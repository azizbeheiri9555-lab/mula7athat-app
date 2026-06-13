// app.config.js
export default {
  expo: {
    name: "ملاحظات",
    slug: "mula7athat",
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
        projectId: "20dcd22f-2a4e-493d-9858-9436bc04701d"
      }
    }
  }
};
